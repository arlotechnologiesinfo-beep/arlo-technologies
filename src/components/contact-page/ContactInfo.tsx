'use client';

import homeIcon from '@public/images/icons/home.svg';
import mailIcon from '@public/images/icons/mail-open.svg';
import phoneIcon from '@public/images/icons/phone-right.svg';
import gradientThree from '@public/images/ns-img-498.png';
import gradientTwo from '@public/images/ns-img-509.png';
import gradientOne from '@public/images/ns-img-510.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import { submitForm } from '@/lib/forms/submit';

const contactInfoCards = [
  {
    id: 1,
    icon: homeIcon,
    title: 'Visit Our Office',
    address: 'No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana 500035, India.',
    actionLabel: 'Get Directions',
    actionLink: 'https://www.google.com/maps/search/?api=1&query=No.+5,+Dwarka+Nagar,+Kothapet,+Hyderabad,+Telangana+500035,+India',
    gradient: gradientOne,
    gradientClass: 'top-[-187px] left-[174px] -rotate-[78deg]',
  },
  {
    id: 2,
    icon: mailIcon,
    title: "Let's Connect",
    emails: [
      { label: 'contact@arlotechnologies.in', href: 'mailto:contact@arlotechnologies.in' },
      { label: 'hello@arlotechnologies.in', href: 'mailto:hello@arlotechnologies.in' },
    ],
    gradient: gradientTwo,
    gradientClass: 'top-[-206px] left-[-36px] rotate-[62deg]',
  },
  {
    id: 3,
    icon: phoneIcon,
    title: 'Speak With Us',
    phone: '+91 94949 00475',
    phoneLink: 'tel:+919494900475',
    timing: 'Monday to Friday, 9:00 AM – 6:00 PM IST',
    gradient: gradientThree,
    gradientClass: 'top-[-184px] left-[-185px]',
  },
];

const enquiryOptions = [
  'Custom Software Development',
  'AI Solutions & Intelligent Agents',
  'Web & Mobile Applications',
  'Product Design & UX',
  'Cloud Architecture & DevOps',
  'Partnership & Affiliates',
  'General Inquiry',
  'Other',
];

const timelineOptions = [
  'Immediate (< 1 month)',
  '1–3 months',
  '3–6 months',
  'Exploring / Flexible',
  'Not sure yet',
];

const ContactInfo = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    company: '',
    enquiryType: enquiryOptions[0],
    subject: '',
    message: '',
    timeline: timelineOptions[1],
    terms: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) {
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    const result = await submitForm('contact', { ...formData });
    setSubmitting(false);
    if (result.ok) {
      setFormSubmitted(true);
    } else {
      setSubmitError(result.error);
    }
  };

  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Contact Information and Form">
      <div className="main-container">
        <div className="space-y-[60px] md:space-y-[70px]">
          {/* Hero Section */}
          <div className="mx-auto max-w-[820px] space-y-4 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green !normal-case mb-2">Get In Touch</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 sm:text-heading-2 md:text-heading-1 font-normal leading-tight">
                Every Great Idea Starts With a Conversation.
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/70 dark:text-accent/70 text-tagline-1 max-w-[720px] mx-auto">
                Have a project in mind, a challenge to solve, or a vision you&apos;re ready to bring to life? We&apos;d love to hear from you. Tell us what you&apos;re working on, and let&apos;s explore how Arlo Technologies can help you take the next step.
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="pt-2">
                <a href="#contact-form" className="btn btn-md btn-primary hover:btn-secondary dark:btn-accent">
                  Let&apos;s Talk
                </a>
              </div>
            </RevealAnimation>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:items-start lg:gap-8 xl:gap-[70px]">
            {/* Contact Info Cards */}
            <div className="flex flex-col gap-6 md:flex-row lg:flex-col w-full lg:max-w-[371px]">
              {contactInfoCards.map((item, index) => (
                <RevealAnimation key={item.id} delay={0.3 + index * 0.1}>
                  <div className="bg-secondary dark:bg-background-6 relative w-full space-y-5 overflow-hidden rounded-[20px] p-8 md:p-9 text-center shadow-sm">
                    {/* Background overlay */}
                    <figure
                      className={`pointer-events-none absolute size-[350px] overflow-hidden select-none ${item.gradientClass}`}>
                      <Image src={item.gradient} alt="Decorative gradient overlay" className="size-full object-cover" />
                    </figure>
                    <figure className="mx-auto size-11 overflow-hidden relative z-10">
                      <Image src={item.icon} alt={`${item.title} icon`} className="size-full object-contain" />
                    </figure>
                    <div className="space-y-2 relative z-10">
                      <p className="text-heading-6 text-accent font-medium">{item.title}</p>
                      {item.address && (
                        <p className="text-accent/75 text-tagline-2 leading-relaxed">
                          {item.address}
                        </p>
                      )}
                      {item.actionLink && (
                        <div className="pt-1">
                          <Link
                            href={item.actionLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-tagline-3 text-primary-50 hover:underline">
                            {item.actionLabel} &rarr;
                          </Link>
                        </div>
                      )}
                      {item.emails && (
                        <div className="space-y-1">
                          {item.emails.map((email) => (
                            <p key={email.label} className="text-accent/80 text-tagline-2">
                              <Link href={email.href} className="hover:text-accent hover:underline">
                                {email.label}
                              </Link>
                            </p>
                          ))}
                        </div>
                      )}
                      {item.phone && (
                        <div className="space-y-1">
                          <p className="text-accent text-tagline-1 font-medium">
                            <Link href={item.phoneLink} className="hover:underline">
                              {item.phone}
                            </Link>
                          </p>
                          <p className="text-accent/60 text-tagline-3">{item.timing}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>

            {/* Contact Form */}
            <div id="contact-form" className="w-full max-w-[847px] scroll-mt-28">
              <RevealAnimation delay={0.3}>
                <div className="dark:bg-background-6 w-full rounded-4xl bg-white p-6 md:p-9 lg:p-11 shadow-sm border border-stroke-3 dark:border-stroke-7">
                  <div className="mb-8 space-y-2">
                  <h2 className="text-heading-4 sm:text-heading-3 font-normal">Tell Us What You Have in Mind.</h2>
                  <p className="text-secondary/70 dark:text-accent/70 text-tagline-1">
                    Share a few details about your project or inquiry. Our team will get back to you within 1–2 business days.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="rounded-2xl bg-primary-50 dark:bg-background-5 p-8 text-center space-y-4 border border-stroke-3 dark:border-stroke-7">
                    <span className="badge badge-green !normal-case text-sm">Message Sent</span>
                    <h3 className="text-heading-4 font-normal">Thank you for reaching out.</h3>
                    <p className="text-secondary/80 dark:text-accent/80 text-tagline-1 max-w-[560px] mx-auto">
                      Your enquiry has been received by the Arlo Technologies team. We will review your project requirements and respond to your work email (<strong className="font-semibold text-secondary dark:text-accent">{formData.email}</strong>) within 1–2 business days.
                    </p>
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="btn btn-sm btn-outline-secondary dark:btn-outline-accent">
                        Send Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" aria-busy={submitting}>
                    {submitError && (
                      <p role="alert" className="text-tagline-2 font-medium text-red-500">
                        {submitError}
                      </p>
                    )}

                    {/* Row 1: Name & Work Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="fullname"
                          className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullname"
                          name="fullname"
                          placeholder="e.g. Maya Chen"
                          required
                          autoComplete="name"
                          value={formData.fullname}
                          onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                          className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/50 focus:border-secondary dark:placeholder:text-accent/50 dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-3 font-normal focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Work Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="maya@company.com"
                          required
                          autoComplete="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/50 focus:border-secondary dark:placeholder:text-accent/50 dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-3 font-normal focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 2: Phone & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Phone Number <span className="text-xs text-secondary/50 dark:text-accent/50 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="+91 98765 43210"
                          autoComplete="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/50 focus:border-secondary dark:placeholder:text-accent/50 dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-3 font-normal focus:outline-none"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Company / Organisation <span className="text-xs text-secondary/50 dark:text-accent/50 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          placeholder="Your company or venture"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/50 focus:border-secondary dark:placeholder:text-accent/50 dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-3 font-normal focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* Row 3: Enquiry Type & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="enquiryType"
                          className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Enquiry Type
                        </label>
                        <select
                          id="enquiryType"
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                          className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 focus:border-secondary dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-2 font-normal focus:outline-none cursor-pointer">
                          {enquiryOptions.map((opt) => (
                            <option key={opt} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="timeline"
                          className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                          Expected Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 focus:border-secondary dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-2 font-normal focus:outline-none cursor-pointer">
                          {timelineOptions.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Brief overview of what you're looking to discuss"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/50 focus:border-secondary dark:placeholder:text-accent/50 dark:text-accent h-[48px] w-full rounded-xl border px-[18px] py-3 font-normal focus:outline-none"
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-tagline-2 text-secondary dark:text-accent block font-medium">
                        Project Details / Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Tell us about your project, current systems, goals, or any specific challenges you're looking to solve..."
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="dark:bg-background-6 dark:border-stroke-7 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/50 focus:border-secondary dark:focus-visible:border-stroke-4/20 dark:placeholder:text-accent/50 dark:text-accent w-full rounded-xl border px-[18px] py-3 font-normal focus:outline-none"
                      />
                    </div>

                    {/* Privacy Agreement Checkbox */}
                    <div className="flex items-start gap-3 pt-1">
                      <input
                        id="terms"
                        type="checkbox"
                        required
                        checked={formData.terms}
                        onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
                        className="mt-1 size-4 rounded border-stroke-3 dark:border-stroke-7 text-primary-500 focus:ring-primary-500 cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-tagline-3 text-secondary/70 dark:text-accent/70 cursor-pointer">
                        I agree to the collection and handling of my information in accordance with Arlo Technologies&apos;{' '}
                        <Link href="/privacy-policy" className="text-primary-500 hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>

                    {/* Submit Button & Helper text */}
                    <div className="pt-2 space-y-3">
                      <button
                        type="submit"
                        className="btn btn-md btn-secondary hover:btn-primary dark:btn-accent w-full text-center">
                        Send Your Enquiry
                      </button>
                      <p className="text-tagline-3 text-center text-secondary/60 dark:text-accent/60">
                        Let&apos;s turn your next idea into a meaningful conversation.
                      </p>
                    </div>
                  </form>
                )}
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
