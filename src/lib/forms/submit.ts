import type { FormType } from './schemas';

export type SubmitResult = { ok: true } | { ok: false; error: string; fields?: Record<string, string> };

/** Posts a form to the Supabase-backed API route. Never throws. */
export async function submitForm(type: FormType, data: Record<string, unknown>): Promise<SubmitResult> {
  try {
    const res = await fetch(`/api/forms/${type}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const body = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; fields?: Record<string, string> };
    if (res.ok && body.ok) {
      return { ok: true };
    }
    return { ok: false, error: body.error ?? 'Something went wrong. Please try again.', fields: body.fields };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}
