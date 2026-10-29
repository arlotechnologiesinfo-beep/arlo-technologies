import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Readable } from 'stream';

function getS3Client(): S3Client | null {
  const accountId = process.env.R2_ACCOUNT_ID || '2116b960add90907947c388503fa5c62';
  const endpoint = process.env.R2_ENDPOINT || `https://${accountId}.r2.cloudflarestorage.com`;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;

  if (accessKeyId && secretAccessKey) {
    return new S3Client({
      region: 'auto',
      endpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
    });
  }
  return null;
}

function getContentType(filePath: string): string {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case '.mp4':
      return 'video/mp4';
    case '.webm':
      return 'video/webm';
    case '.mov':
      return 'video/quicktime';
    case '.ogg':
      return 'video/ogg';
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg';
    case '.png':
      return 'image/png';
    case '.webp':
      return 'image/webp';
    case '.svg':
      return 'image/svg+xml';
    default:
      return 'application/octet-stream';
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ key: string[] }> }
) {
  const resolvedParams = await params;
  const rawKeyArray = resolvedParams.key || [];
  
  // Safe decode of URI segments
  const keyArray = rawKeyArray.map((seg) => {
    try {
      return decodeURIComponent(seg);
    } catch {
      return seg;
    }
  });

  const rawObjectKey = keyArray.join('/');

  if (!rawObjectKey) {
    return NextResponse.json({ error: 'Missing object key' }, { status: 400 });
  }

  // 1. Check local file system candidates
  const localCandidates = [
    path.join(process.cwd(), 'public', rawObjectKey),
    path.join(process.cwd(), 'public', 'videos', rawObjectKey),
    path.join(process.cwd(), 'public', 'videos', path.basename(rawObjectKey)),
  ];

  for (const localPath of localCandidates) {
    if (fs.existsSync(localPath) && fs.statSync(localPath).isFile()) {
      const stat = fs.statSync(localPath);
      const contentType = getContentType(localPath);
      const range = req.headers.get('range');

      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
        const chunkSize = end - start + 1;
        const fileStream = fs.createReadStream(localPath, { start, end });
        // @ts-expect-error Node stream to Web stream conversion
        const webStream = Readable.toWeb(fileStream);

        return new Response(webStream as ReadableStream, {
          status: 206,
          headers: {
            'Content-Range': `bytes ${start}-${end}/${stat.size}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': String(chunkSize),
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=31536000, immutable',
          },
        });
      }

      const fileStream = fs.createReadStream(localPath);
      // @ts-expect-error Node stream to Web stream conversion
      const webStream = Readable.toWeb(fileStream);

      return new Response(webStream as ReadableStream, {
        status: 200,
        headers: {
          'Content-Length': String(stat.size),
          'Content-Type': contentType,
          'Accept-Ranges': 'bytes',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    }
  }

  // 2. Fetch from Cloudflare R2
  const s3Client = getS3Client();
  const bucketName = process.env.R2_BUCKET_NAME || 'arlo-technologies';

  if (!s3Client) {
    return NextResponse.json(
      {
        error: 'R2 Credentials not configured and local video file not found',
        key: rawObjectKey,
      },
      { status: 404 }
    );
  }

  // Candidate keys in R2: decoded, raw, with/without portfolio/ prefix, and literal %20 variations
  const rawJoined = rawKeyArray.join('/');
  const baseCandidates = [
    rawObjectKey,
    rawJoined,
    rawObjectKey.startsWith('portfolio/') ? rawObjectKey.replace(/^portfolio\//, '') : `portfolio/${rawObjectKey}`,
    rawJoined.startsWith('portfolio/') ? rawJoined.replace(/^portfolio\//, '') : `portfolio/${rawJoined}`,
  ];
  const r2KeyCandidates = Array.from(
    new Set([
      ...baseCandidates,
      ...baseCandidates.map((k) => k.replace(/ /g, '%20')),
      ...baseCandidates.map((k) => k.replace(/Hero Gradient V3 - 37/, 'Hero%20Gradient%20V3%20-%2037')),
    ])
  );

  const rangeHeader = req.headers.get('range') || undefined;

  for (const candidateKey of r2KeyCandidates) {
    try {
      const command = new GetObjectCommand({
        Bucket: bucketName,
        Key: candidateKey,
        Range: rangeHeader,
      });

      const response = await s3Client.send(command);
      const contentType = response.ContentType || getContentType(candidateKey);

      const headers: Record<string, string> = {
        'Content-Type': contentType,
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      };

      if (response.ContentRange) {
        headers['Content-Range'] = response.ContentRange;
      }
      if (response.ContentLength !== undefined) {
        headers['Content-Length'] = String(response.ContentLength);
      }

      const bodyStream = response.Body as unknown;
      let webStream: ReadableStream;

      if (
        bodyStream &&
        typeof (bodyStream as { transformToWebStream?: () => ReadableStream }).transformToWebStream ===
          'function'
      ) {
        webStream = (bodyStream as { transformToWebStream: () => ReadableStream }).transformToWebStream();
      } else if (bodyStream instanceof Readable) {
        // @ts-expect-error Node stream to Web stream conversion
        webStream = Readable.toWeb(bodyStream) as ReadableStream;
      } else {
        webStream = bodyStream as ReadableStream;
      }

      const status = rangeHeader && response.ContentRange ? 206 : 200;
      return new Response(webStream, {
        status,
        headers,
      });
    } catch (err: unknown) {
      const error = err as { name?: string };
      if (error.name === 'NoSuchKey' || error.name === 'NotFound') {
        // Try next candidate
        continue;
      }
      console.error(`R2 Fetch Error for key ${candidateKey}:`, err);
    }
  }

  return NextResponse.json(
    { error: 'Object not found in R2 bucket', keysChecked: r2KeyCandidates },
    { status: 404 }
  );
}
