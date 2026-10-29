import RevealAnimation from '../animation/RevealAnimation';
import LegalPageLayout from '../legal/LegalPageLayout';

const tocItems = [
  { id: 'sec-2-1', title: 'Data Fiduciary & Accountability' },
  { id: 'sec-2-2', title: 'Personal Data We Collect' },
  { id: 'sec-2-3', title: 'Purposes & Lawful Grounds (DPDP Act)' },
  { id: 'sec-2-4', title: 'Notice & Withdrawal of Consent' },
  { id: 'sec-2-5', title: 'Marketing Communications' },
  { id: 'sec-2-6', title: 'Cookies & Tracking Technologies' },
  { id: 'sec-2-7', title: 'Data Sharing & Processors' },
  { id: 'sec-2-8', title: 'Cross-Border Data Transfers' },
  { id: 'sec-2-9', title: 'Data Retention Schedule' },
  { id: 'sec-2-10', title: 'Technical & Operational Security' },
  { id: 'sec-2-11', title: 'Personal Data Breach Protocol' },
  { id: 'sec-2-12', title: 'Your Rights as a Data Principal' },
  { id: 'sec-2-13', title: 'Protection of Children' },
  { id: 'sec-2-14', title: 'Automated Processing & AI Systems' },
  { id: 'sec-2-15', title: 'Service Providers & Sub-Processors' },
  { id: 'sec-2-16', title: 'No Aadhaar or Biometrics Collected' },
  { id: 'sec-2-17', title: 'System Logs & CERT-In Compliance' },
  { id: 'sec-2-18', title: 'Client Data Processing & DPA' },
];

const PrivacyContent = () => {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      badge="DPDP Act, 2023 · Privacy & Data Protection"
      description="How Arlo Technologies India collects, processes, protects, and respects personal data in accordance with the Digital Personal Data Protection Act, 2023 and the DPDP Rules, 2025."
      effectiveDate="October 18, 2026"
      lastUpdated="October 18, 2026"
      toc={tocItems}>
      <div className="space-y-8">
        {/* Intro Banner */}
        <RevealAnimation delay={0.1}>
          <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-3">
            <span className="badge badge-cyan text-xs">DPDP Act, 2023 &bull; DPDP Rules, 2025</span>
            <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
              This Privacy Policy explains how Arlo Technologies India handles digital personal data. It is drafted to
              meet the requirements of the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP Act&rdquo;), the
              DPDP Rules, 2025, the Information Technology Act, 2000, and the Information Technology (Reasonable Security
              Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.
            </p>
          </div>
        </RevealAnimation>

        {/* Section 2.1 */}
        <RevealAnimation delay={0.12}>
          <section
            id="sec-2-1"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.1
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Data Fiduciary &amp; Accountability
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              For personal data collected through our website, project enquiries, accounts, and marketing activities,
              Arlo Technologies India acts as the <strong>Data Fiduciary</strong>: we determine the purpose and means of
              processing your personal data.
            </p>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              When we build or host an application for an enterprise client and process their end-users&apos; data solely on
              their instructions, the client is the Data Fiduciary and Arlo acts strictly as a{' '}
              <strong>Data Processor</strong> under a signed Data Processing Agreement (DPA).
            </p>
            <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 text-xs space-y-1 text-secondary/80 dark:text-accent/80">
              <p>
                <strong>Data Protection Office:</strong> Arlo Technologies India
              </p>
              <p>
                <strong>Address:</strong> H No. 11, 13-746, Road No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana
                500102, India
              </p>
              <p>
                <strong>Email:</strong> contact@arlotechnologies.in | <strong>Phone:</strong> +91 9494900475
              </p>
            </div>
          </section>
        </RevealAnimation>

        {/* Section 2.2 */}
        <RevealAnimation delay={0.14}>
          <section
            id="sec-2-2"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.2
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">Personal Data We Collect</h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              We practice strict data minimization. We collect only what is strictly necessary to deliver agreed
              services:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stroke-3 dark:border-stroke-7 rounded-2xl overflow-hidden">
                <thead className="bg-background-2 dark:bg-background-8 text-secondary dark:text-accent font-semibold">
                  <tr>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Category</th>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Examples</th>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stroke-3 dark:divide-stroke-7 text-secondary/70 dark:text-accent/70">
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Contact &amp; Enquiry</td>
                    <td className="p-3">Name, work email, phone number, organisation, project brief</td>
                    <td className="p-3">Directly from you via enquiry forms or email</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Account Credentials</td>
                    <td className="p-3">User ID, hashed password, notification preferences</td>
                    <td className="p-3">Created by you upon registration</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Billing &amp; Transactions</td>
                    <td className="p-3">GSTIN, billing address, invoice records, gateway transaction tokens</td>
                    <td className="p-3">Payment gateway (we never store raw card/UPI PINs)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">AI &amp; Product Prompts</td>
                    <td className="p-3">Input prompts, workflow rules, document uploads for processing</td>
                    <td className="p-3">Submitted by you during feature usage</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Technical Device Data</td>
                    <td className="p-3">IP address, browser type, device resolution, error logs</td>
                    <td className="p-3">Automated diagnostic telemetry</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </RevealAnimation>

        {/* Section 2.3 */}
        <RevealAnimation delay={0.16}>
          <section
            id="sec-2-3"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.3
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Purposes &amp; Lawful Grounds (DPDP Act)
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              In accordance with Section 4 and Section 7 of the DPDP Act, 2023, personal data is processed solely for
              specified lawful purposes:
            </p>
            <ul className="space-y-2 text-tagline-2 text-secondary/70 dark:text-accent/70 list-disc pl-5 leading-relaxed">
              <li>
                <strong>Project Consultation &amp; Execution:</strong> Processing your contact data to provide quotes,
                manage milestones, and deliver software deliverables based on voluntary consent (Section 7(a)).
              </li>
              <li>
                <strong>Account Administration:</strong> Authenticating users, maintaining workspace security, and
                providing customer support.
              </li>
              <li>
                <strong>Statutory Compliance &amp; Tax:</strong> Maintaining accounting, tax, and GST records as
                mandated by Indian statutory law (Section 8(7)).
              </li>
              <li>
                <strong>Security &amp; Abuse Prevention:</strong> Investigating cybersecurity incidents, preventing
                unauthorised access, and fulfilling CERT-In incident reporting mandates.
              </li>
            </ul>
          </section>
        </RevealAnimation>

        {/* Section 2.4 */}
        <RevealAnimation delay={0.18}>
          <section
            id="sec-2-4"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.4
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Notice &amp; Withdrawal of Consent
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Consent requested by Arlo Technologies India is always free, specific, informed, unconditional, and
              unambiguous, indicated by a clear affirmative action. Consent is never a condition for accessing unrelated
              features.
            </p>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              You have the right to <strong>withdraw consent at any time</strong> with the same ease with which it was
              given. You may withdraw consent by writing to{' '}
              <a href="mailto:contact@arlotechnologies.in" className="text-primary-600 hover:underline">
                contact@arlotechnologies.in
              </a>
              . Upon receipt of withdrawal, we will cease processing and erase the personal data unless statutory
              retention is required under Indian law.
            </p>
          </section>
        </RevealAnimation>

        {/* Section 2.9 */}
        <RevealAnimation delay={0.2}>
          <section
            id="sec-2-9"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.9
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">Data Retention Schedule</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stroke-3 dark:border-stroke-7 rounded-2xl overflow-hidden">
                <thead className="bg-background-2 dark:bg-background-8 text-secondary dark:text-accent font-semibold">
                  <tr>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Data Type</th>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Retention Period</th>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Disposal Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stroke-3 dark:divide-stroke-7 text-secondary/70 dark:text-accent/70">
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Enquiries &amp; Project Leads</td>
                    <td className="p-3">Up to 24 months from last interaction</td>
                    <td className="p-3">Secure deletion</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Active Account &amp; Project Data</td>
                    <td className="p-3">Active service term + 90 days after account closure</td>
                    <td className="p-3">Complete database purging</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Invoices &amp; Tax Ledgers</td>
                    <td className="p-3">8 years (mandatory under Indian Income Tax Act)</td>
                    <td className="p-3">Archived offline, then shredded</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">Access &amp; Traffic Logs</td>
                    <td className="p-3">At least 1 year (DPDP Rules &amp; CERT-In directions)</td>
                    <td className="p-3">Automated log rotation</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </RevealAnimation>

        {/* Section 2.11 */}
        <RevealAnimation delay={0.22}>
          <section
            id="sec-2-11"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.11
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Personal Data Breach Protocol
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              In the unlikely event of a personal data breach compromising user confidentiality or integrity, Arlo
              Technologies India will notify affected Data Principals without undue delay. Notifications will specify
              the nature of the incident, likely consequences, remedial steps taken, and actionable advice for users. A
              detailed formal report will be submitted to the Data Protection Board of India (DPBI) within 72 hours,
              alongside required CERT-In cyber incident reports.
            </p>
          </section>
        </RevealAnimation>

        {/* Section 2.12 */}
        <RevealAnimation delay={0.24}>
          <section
            id="sec-2-12"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.12
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Your Rights as a Data Principal
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Under Chapter III of the DPDP Act, 2023, you enjoy statutory rights regarding your personal data:
            </p>
            <ol className="space-y-2 text-tagline-2 text-secondary/70 dark:text-accent/70 list-decimal pl-5 leading-relaxed">
              <li>
                <strong>Right to Access:</strong> Request a summary of personal data being processed and identities of
                third-party processors.
              </li>
              <li>
                <strong>Right to Correction &amp; Completion:</strong> Request correction of inaccurate data or update
                incomplete records.
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of personal data no longer necessary for the purpose
                it was gathered.
              </li>
              <li>
                <strong>Right of Grievance Redressal:</strong> Avail of an accessible grievance mechanism with dedicated
                statutory response timelines.
              </li>
              <li>
                <strong>Right to Nominate:</strong> Nominate an individual to exercise your rights in the event of death
                or incapacitation.
              </li>
            </ol>
            <div className="p-4 rounded-2xl bg-primary-50 dark:bg-primary-950/40 border border-primary-500/20 text-xs text-primary-800 dark:text-primary-300">
              To exercise any statutory data right, email{' '}
              <a href="mailto:contact@arlotechnologies.in" className="font-semibold underline">
                contact@arlotechnologies.in
              </a>{' '}
              with the subject line &ldquo;Data Rights Request&rdquo;. We verify identities and respond within 15 days.
            </div>
          </section>
        </RevealAnimation>

        {/* Section 2.13 */}
        <RevealAnimation delay={0.26}>
          <section
            id="sec-2-13"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                2.13
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">Protection of Children</h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Our website, products, and services are exclusively intended for individuals aged 18 and older. In
              strict compliance with Section 9 of the DPDP Act, we never knowingly collect personal data of children,
              nor do we engage in behavioral monitoring, tracking, or targeted advertising directed at individuals under
              18.
            </p>
          </section>
        </RevealAnimation>
      </div>
    </LegalPageLayout>
  );
};

export default PrivacyContent;
