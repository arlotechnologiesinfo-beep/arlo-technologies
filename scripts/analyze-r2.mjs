import { S3Client, ListObjectsV2Command } from '@aws-sdk/client-s3';
import fs from 'fs';
import path from 'path';

// Load .env or .env.local if present
const envFiles = ['.env.local', '.env'];
for (const envFile of envFiles) {
  const envPath = path.resolve(process.cwd(), envFile);
  if (fs.existsSync(envPath)) {
    const lines = fs.readFileSync(envPath, 'utf8').split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const idx = trimmed.indexOf('=');
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim();
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
        if (!process.env[key]) {
          process.env[key] = val;
        }
      }
    }
  }
}

const accountId = process.env.R2_ACCOUNT_ID || '2116b960add90907947c388503fa5c62';
const bucketName = process.env.R2_BUCKET_NAME || 'arlo-technologies';
const endpoint = process.env.R2_ENDPOINT || `https://${accountId}.r2.cloudflarestorage.com`;
const accessKeyId = process.env.R2_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID;
const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY;

console.log('--- Cloudflare R2 Bucket Analyzer ---');
console.log(`Endpoint:   ${endpoint}`);
console.log(`Bucket:     ${bucketName}`);
console.log(`Account ID: ${accountId}`);

if (!accessKeyId || !secretAccessKey) {
  console.log('\n[!] Missing R2 Credentials.');
  console.log('Please set R2_ACCESS_KEY_ID and R2_SECRET_ACCESS_KEY in .env.local:');
  console.log('  R2_ACCESS_KEY_ID="your_r2_access_key_id"');
  console.log('  R2_SECRET_ACCESS_KEY="your_r2_secret_access_key"');
  process.exit(1);
}

const s3Client = new S3Client({
  region: 'auto',
  endpoint,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

async function analyzeBucket() {
  try {
    console.log('\nConnecting to Cloudflare R2 and listing all bucket contents...');
    let continuationToken = undefined;
    const allObjects = [];

    do {
      const command = new ListObjectsV2Command({
        Bucket: bucketName,
        ContinuationToken: continuationToken,
      });

      const response = await s3Client.send(command);
      if (response.Contents) {
        allObjects.push(...response.Contents);
      }
      continuationToken = response.NextContinuationToken;
    } while (continuationToken);

    console.log(`\nSuccessfully listed ${allObjects.length} objects.\n`);

    // Group by folder
    const folderMap = new Map();
    for (const obj of allObjects) {
      const parts = obj.Key.split('/');
      const folder = parts.length > 1 ? parts[0] + '/' : '(root)';
      if (!folderMap.has(folder)) {
        folderMap.set(folder, []);
      }
      folderMap.get(folder).push({
        key: obj.Key,
        size: obj.Size,
        lastModified: obj.LastModified,
      });
    }

    console.log('================ BUCKET STRUCTURE ================');
    for (const [folder, files] of folderMap.entries()) {
      console.log(`\nFolder [${folder}] (${files.length} items):`);
      for (const file of files) {
        const sizeKb = (file.size / 1024).toFixed(1);
        console.log(`  - ${file.key} (${sizeKb} KB)`);
      }
    }
    console.log('\n==================================================');

    // Save mapping to public/r2-manifest.json
    const manifestPath = path.resolve(process.cwd(), 'src/data/r2-manifest.json');
    fs.writeFileSync(manifestPath, JSON.stringify(Object.fromEntries(folderMap), null, 2));
    console.log(`Saved manifest to ${manifestPath}`);
  } catch (error) {
    console.error('\nError connecting to R2 bucket:', error.message || error);
    process.exit(1);
  }
}

analyzeBucket();
