'use client';

import { submitForm } from '@/lib/forms/submit';
import { FC, useEffect, useState } from 'react';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  positionTitle: string;
}

const ApplicationModal: FC<ApplicationModalProps> = ({ isOpen, onClose, positionTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: positionTitle,
    education: '',
    experienceLevel: '0 years — Beginners welcome',
    skillsInterests: '',
    whyJoin: '',
    weeklyAvailability: 'Part-Time (15-20 hours/week)',
    confirmUnpaid: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [statusMessage, setStatusMessage] = useState<{
    type: 'idle' | 'notice' | 'success';
    title: string;
    details: string;
  }>({
    type: 'idle',
    title: '',
    details: '',
  });

  useEffect(() => {
    setFormData((prev) => ({ ...prev, position: positionTitle }));
  }, [positionTitle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {return null;}

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {newErrors.fullName = 'Full Name is required.';}
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.education.trim()) {newErrors.education = 'Education or Current Status is required.';}
    if (!formData.skillsInterests.trim()) {newErrors.skillsInterests = 'Please describe your skills and interests.';}
    if (!formData.whyJoin.trim()) {newErrors.whyJoin = 'Please share why you want to join Arlo Technologies.';}
    if (!formData.confirmUnpaid) {
      newErrors.confirmUnpaid = 'You must confirm that you understand this internship is unpaid.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {return;}

    const result = await submitForm('career', { ...formData });
    if (result.ok) {
      setStatusMessage({
        type: 'success',
        title: 'Application received',
        details: 'Thank you for applying. Our team will review your application and get back to you by email.',
      });
      return;
    }
    setStatusMessage({
      type: 'notice',
      title: 'We could not submit your application',
      details: `${result.error} You can also send your details directly to careers@arlotechnologies.com using the button below.`,
    });
  };

  const mailtoUrl = `mailto:careers@arlotechnologies.com?subject=${encodeURIComponent(
    `Application: ${formData.position} - ${formData.fullName}`,
  )}&body=${encodeURIComponent(
    `Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'N/A'}
Position: ${formData.position}
Education / Status: ${formData.education}
Experience Level: ${formData.experienceLevel}
Weekly Availability: ${formData.weeklyAvailability}

Skills and Interests:
${formData.skillsInterests}

Why Do You Want to Join:
${formData.whyJoin}

Understands Internship is Unpaid: Yes`,
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="bg-background-1 dark:bg-background-6 border-stroke-3 dark:border-stroke-7 relative my-8 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[24px] border p-6 shadow-2xl sm:p-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close application form"
          className="text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent absolute top-6 right-6 flex size-9 items-center justify-center rounded-full border border-stroke-3 dark:border-stroke-7 bg-background-2 dark:bg-background-5 transition-colors">
          <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="mb-6 space-y-2 pr-8">
          <span className="badge badge-green !normal-case">Internship Application</span>
          <h3 id="modal-title" className="text-heading-5 font-normal">
            Apply for {positionTitle}
          </h3>
          <p className="text-tagline-2 text-secondary/70 dark:text-accent/70">
            Please complete the application form below. Zero experience is required — beginners and learners are welcome.
          </p>
        </div>

        {statusMessage.type === 'success' && (
          <div role="status" className="mb-6 rounded-2xl border border-primary-500/30 bg-primary-500/10 p-5 text-secondary dark:text-accent">
            <h4 className="mb-2 text-base font-semibold">{statusMessage.title}</h4>
            <p className="text-tagline-2 leading-relaxed text-secondary/80 dark:text-accent/80">{statusMessage.details}</p>
          </div>
        )}

        {statusMessage.type === 'notice' && (
          <div className="mb-6 rounded-2xl border border-ns-yellow/40 bg-ns-yellow/10 p-5 text-secondary dark:text-accent">
            <h4 className="text-base font-semibold text-secondary dark:text-accent mb-2">
              {statusMessage.title}
            </h4>
            <p className="text-tagline-2 mb-4 leading-relaxed text-secondary/80 dark:text-accent/80">
              {statusMessage.details}
            </p>
            <a
              href={mailtoUrl}
              className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-sm inline-flex items-center gap-2">
              Send Application via Email Client
            </a>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label htmlFor="fullName" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="e.g. Alex Morgan"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 focus:outline-none"
            />
            {errors.fullName && <p className="text-xs text-red-500">{errors.fullName}</p>}
          </div>

          {/* Email Address */}
          <div className="space-y-1.5">
            <label htmlFor="email" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="e.g. alex@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 focus:outline-none"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Phone Number (Optional) */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Phone Number <span className="text-secondary/60 dark:text-accent/60 text-xs font-normal">(Optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="e.g. +1 555-0199"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 focus:outline-none"
            />
          </div>

          {/* Internship Position (Preselected) */}
          <div className="space-y-1.5">
            <label htmlFor="position" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Internship Position
            </label>
            <input
              id="position"
              name="position"
              type="text"
              readOnly
              value={formData.position}
              className="dark:border-stroke-7 dark:bg-background-5/50 border-stroke-3 bg-background-2 text-tagline-2 text-secondary/90 dark:text-accent/90 h-[48px] w-full rounded-full border px-[18px] py-3 cursor-not-allowed focus:outline-none"
            />
          </div>

          {/* Education or Current Status */}
          <div className="space-y-1.5">
            <label htmlFor="education" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Education or Current Status <span className="text-red-500">*</span>
            </label>
            <input
              id="education"
              name="education"
              type="text"
              placeholder="e.g. Undergraduate Student, Recent Graduate, Self-Taught Learner"
              value={formData.education}
              onChange={(e) => setFormData({ ...formData, education: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 focus:outline-none"
            />
            {errors.education && <p className="text-xs text-red-500">{errors.education}</p>}
          </div>

          {/* Experience Level */}
          <div className="space-y-1.5">
            <label htmlFor="experienceLevel" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Experience Level
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 text-secondary dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-2 focus:border-secondary focus:outline-none">
              <option value="0 years — Beginners welcome">0 years — Beginners welcome</option>
              <option value="Self-taught beginner (learning online/projects)">Self-taught beginner (learning online/projects)</option>
              <option value="Academic coursework only">Academic coursework only</option>
              <option value="Some practical project experience">Some practical project experience</option>
            </select>
          </div>

          {/* Weekly Availability */}
          <div className="space-y-1.5">
            <label htmlFor="weeklyAvailability" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Weekly Availability
            </label>
            <select
              id="weeklyAvailability"
              name="weeklyAvailability"
              value={formData.weeklyAvailability}
              onChange={(e) => setFormData({ ...formData, weeklyAvailability: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 text-secondary dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-2 focus:border-secondary focus:outline-none">
              <option value="Part-Time (10-15 hours/week)">Part-Time (10-15 hours/week)</option>
              <option value="Part-Time (15-20 hours/week)">Part-Time (15-20 hours/week)</option>
              <option value="Full-Time (35-40 hours/week)">Full-Time (35-40 hours/week)</option>
              <option value="Flexible Schedule">Flexible Schedule</option>
            </select>
          </div>

          {/* Skills and Interests */}
          <div className="space-y-1.5">
            <label htmlFor="skillsInterests" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Skills and Interests <span className="text-red-500">*</span>
            </label>
            <textarea
              id="skillsInterests"
              name="skillsInterests"
              rows={3}
              placeholder="Tell us what areas, tools, or topics you are interested in exploring or learning..."
              value={formData.skillsInterests}
              onChange={(e) => setFormData({ ...formData, skillsInterests: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 focus:outline-none"
            />
            {errors.skillsInterests && <p className="text-xs text-red-500">{errors.skillsInterests}</p>}
          </div>

          {/* Why Do You Want to Join? */}
          <div className="space-y-1.5">
            <label htmlFor="whyJoin" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
              Why Do You Want to Join? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="whyJoin"
              name="whyJoin"
              rows={3}
              placeholder="What are your goals for this internship, and how do you hope to grow with Arlo Technologies?"
              value={formData.whyJoin}
              onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
              className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-5 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary dark:placeholder:text-accent/60 dark:text-accent w-full rounded-xl border px-[18px] py-3 focus:outline-none"
            />
            {errors.whyJoin && <p className="text-xs text-red-500">{errors.whyJoin}</p>}
          </div>

          {/* Confirmation that the applicant understands the internship is unpaid */}
          <div className="pt-2">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.confirmUnpaid}
                onChange={(e) => setFormData({ ...formData, confirmUnpaid: e.target.checked })}
                className="mt-1 size-4 rounded border-stroke-3 text-secondary focus:ring-0 dark:border-stroke-7"
              />
              <span className="text-tagline-3 text-secondary/80 dark:text-accent/80 leading-normal">
                I understand and confirm that this is a learning-focused,{' '}
                <strong className="text-secondary dark:text-accent">unpaid internship</strong> with no monetary stipend, carries no guarantee of future employment, and requires no fees.
              </span>
            </label>
            {errors.confirmUnpaid && <p className="mt-1 text-xs text-red-500">{errors.confirmUnpaid}</p>}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="btn btn-primary hover:btn-secondary dark:hover:btn-accent btn-md w-full justify-center">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationModal;
