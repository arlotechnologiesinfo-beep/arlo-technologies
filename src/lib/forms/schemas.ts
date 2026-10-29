import { z } from 'zod';

export const FORM_TYPES = ['contact', 'newsletter', 'support', 'career', 'comment'] as const;
export type FormType = (typeof FORM_TYPES)[number];

type Raw = Record<string, unknown>;

/** First non-empty string among the aliased field names the site's forms use. */
const pick = (raw: Raw, ...keys: string[]): string | undefined => {
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === 'string' && value.trim()) {
      return value.trim();
    }
  }
  return undefined;
};

const text = (max: number) => z.string().trim().min(1).max(max);
const optionalText = (max: number) => z.string().trim().max(max).optional();
const email = z.string().trim().toLowerCase().email().max(254);

const contactSchema = z.object({
  full_name: text(120),
  email,
  phone: optionalText(40),
  company: optionalText(160),
  enquiry_type: optionalText(120),
  timeline: optionalText(120),
  message: text(5000),
  source: optionalText(60),
  extra: z.record(z.string(), z.string().max(500)).optional(),
});

const newsletterSchema = z.object({ email, source: optionalText(60) });

const supportSchema = z.object({
  name: text(120),
  email,
  subject: optionalText(200),
  message: text(5000),
  source: optionalText(60),
});

const careerSchema = z.object({
  full_name: text(120),
  email,
  phone: optionalText(40),
  position: text(160),
  education: optionalText(200),
  experience_level: optionalText(80),
  weekly_availability: optionalText(120),
  cover_note: optionalText(5000),
  portfolio_url: optionalText(500),
  extra: z.record(z.string(), z.string().max(2000)).optional(),
});

const commentSchema = z.object({
  post_slug: text(200),
  name: text(120),
  email,
  message: text(3000),
});

/** Maps the loosely named browser fields onto each table's column names. */
export const normalizers: Record<FormType, (raw: Raw) => unknown> = {
  contact: (raw) => ({
    full_name: pick(raw, 'fullname', 'fullName', 'name'),
    email: pick(raw, 'email', 'emailAddress'),
    phone: pick(raw, 'phone'),
    company: pick(raw, 'company'),
    enquiry_type: pick(raw, 'enquiryType'),
    timeline: pick(raw, 'timeline'),
    message: pick(raw, 'message', 'messages', 'comment'),
    source: pick(raw, 'source'),
    extra: pick(raw, 'subject') ? { subject: pick(raw, 'subject') } : undefined,
  }),
  newsletter: (raw) => ({ email: pick(raw, 'email', 'emailAddress'), source: pick(raw, 'source') }),
  support: (raw) => ({
    name: pick(raw, 'name', 'fullName', 'fullname'),
    email: pick(raw, 'email', 'emailAddress'),
    subject: pick(raw, 'subject'),
    message: pick(raw, 'comment', 'message', 'messages'),
    source: pick(raw, 'source'),
  }),
  career: (raw) => {
    const extra: Record<string, string> = {};
    for (const key of ['skillsInterests', 'whyJoin', 'confirmUnpaid']) {
      const value = raw[key];
      if (typeof value === 'string' || typeof value === 'boolean') {
        extra[key] = String(value).slice(0, 2000);
      }
    }
    return {
      full_name: pick(raw, 'fullName', 'fullname', 'name'),
      email: pick(raw, 'email', 'emailAddress'),
      phone: pick(raw, 'phone'),
      position: pick(raw, 'position'),
      education: pick(raw, 'education'),
      experience_level: pick(raw, 'experienceLevel'),
      weekly_availability: pick(raw, 'weeklyAvailability'),
      cover_note: pick(raw, 'whyJoin', 'coverNote'),
      portfolio_url: pick(raw, 'portfolioUrl'),
      extra,
    };
  },
  comment: (raw) => ({
    post_slug: pick(raw, 'postSlug'),
    name: pick(raw, 'fullName', 'fullname', 'name'),
    email: pick(raw, 'emailAddress', 'email'),
    message: pick(raw, 'messages', 'message', 'comment'),
  }),
};

export const schemas = {
  contact: contactSchema,
  newsletter: newsletterSchema,
  support: supportSchema,
  career: careerSchema,
  comment: commentSchema,
} as const;

export const tables: Record<FormType, string> = {
  contact: 'contact_submissions',
  newsletter: 'newsletter_subscribers',
  support: 'support_tickets',
  career: 'career_applications',
  comment: 'blog_comments',
};

/** Per-IP limits: [max requests, window in seconds]. */
export const limits: Record<FormType, [number, number]> = {
  contact: [5, 600],
  newsletter: [5, 600],
  support: [5, 600],
  career: [3, 3600],
  comment: [5, 600],
};
