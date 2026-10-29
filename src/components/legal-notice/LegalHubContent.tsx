import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import LegalPageLayout from '../legal/LegalPageLayout';

const tocItems = [
  { id: 'sec-hub-nav', title: 'Legal Directory & Policies' },
  { id: 'sec-statutory', title: 'Statutory Corporate Disclosures' },
  { id: 'sec-grievance', title: 'Grievance Redressal Officer' },
  { id: 'sec-delivery', title: 'Delivery & Service Policy' },
  { id: 'sec-ai-policy', title: 'Artificial Intelligence Use Policy' },
  { id: 'sec-cookies', title: 'Cookie Policy & Consent' },
  { id: 'sec-disclaimer', title: 'Legal Disclaimer' },
  { id: 'sec-agreements', title: 'Enterprise Agreements (MSA & DPA)' },
  { id: 'sec-escalation', title: 'Consumer & Regulatory Escalation' },
];

const policyCards = [
  {
    title: 'Terms of Use',
    desc: 'Governing terms under the Information Technology Act, 2000 for website, services, and software.',
    href: '/terms-conditions',
    badge: 'IT Act 2000',
  },
  {
    title: 'Privacy Policy',
    desc: 'Comprehensive data protection frameworks complying with the Digital Personal Data Protection Act, 2023.',
    href: '/privacy-policy',
    badge: 'DPDP Act 2023',
  },
  {
    title: 'Refund & Cancellation',
    desc: 'Statutory cancellation rules, milestone settlements, and refund turnaround times.',
    href: '/refund-policy',
    badge: 'Consumer Protection',
  },
  {
    title: 'Interactive Sitemap',
    desc: 'Directory of all published pages, service catalogs, case studies, and corporate policies.',
    href: '/sitemap',
    badge: 'Directory',
  },
];

const LegalHubContent = () => {
  return (
    <LegalPageLayout
      title="Legal Hub & Regulatory Disclosures"
      badge="Arlo Technologies India · Corporate Governance"
      description="Central legal directory, statutory disclosures under Indian law, Grievance Officer details, and corporate policies for Arlo Technologies India."
      effectiveDate="October 18, 2026"
      lastUpdated="October 18, 2026"
      toc={tocItems}>
      <div className="space-y-8">
        {/* Policy Directory Cards */}
        <RevealAnimation delay={0.1}>
          <section id="sec-hub-nav" className="scroll-mt-28 space-y-4">
            <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
              Core Legal Policies &amp; Documents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {policyCards.map((card, i) => (
                <Link
                  key={i}
                  href={card.href}
                  className="group p-5 rounded-2xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 hover:border-primary-500/50 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-secondary dark:text-accent group-hover:text-primary-600 transition-colors">
                        {card.title}
                      </h3>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-semibold">
                        {card.badge}
                      </span>
                    </div>
                    <p className="text-xs text-secondary/70 dark:text-accent/70 leading-relaxed">{card.desc}</p>
                  </div>
                  <div className="pt-3 text-xs font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1">
                    <span>Read Policy</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </RevealAnimation>

        {/* Statutory Disclosures */}
        <RevealAnimation delay={0.12}>
          <section
            id="sec-statutory"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §1
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Statutory Corporate Disclosures
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              In accordance with Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics
              Code) Rules, 2021 and Section 4 of the Consumer Protection (E-Commerce) Rules, 2020:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stroke-3 dark:border-stroke-7 rounded-2xl overflow-hidden">
                <tbody className="divide-y divide-stroke-3 dark:divide-stroke-7 text-secondary/80 dark:text-accent/80 font-mono">
                  <tr>
                    <td className="p-3 font-semibold bg-background-2 dark:bg-background-8 w-1/3">Trading Name</td>
                    <td className="p-3">Arlo Technologies India</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-background-2 dark:bg-background-8">Legal Status</td>
                    <td className="p-3">In process of incorporation under the Companies Act, 2013</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-background-2 dark:bg-background-8">Principal Office</td>
                    <td className="p-3">
                      H No. 11, 13-746, Road No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana 500102, India
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-background-2 dark:bg-background-8">Official Email</td>
                    <td className="p-3">contact@arlotechnologies.in</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-background-2 dark:bg-background-8">Customer Helpline</td>
                    <td className="p-3">+91 9494900475</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold bg-background-2 dark:bg-background-8">Corporate Website</td>
                    <td className="p-3">https://arlotechnologies.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </RevealAnimation>

        {/* Grievance Officer */}
        <RevealAnimation delay={0.14}>
          <section
            id="sec-grievance"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §2
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Grievance Redressal Officer
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Published pursuant to Rule 3(2) of the IT Rules, 2021, Section 5(9) of the Consumer Protection
              (E-Commerce) Rules, 2020, and Section 32 of the Digital Personal Data Protection Act, 2023.
            </p>
            <div className="p-5 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 text-xs space-y-2 text-secondary/80 dark:text-accent/80 font-mono">
              <p>
                <strong>Grievance Officer:</strong> Legal &amp; Compliance Department
              </p>
              <p>
                <strong>Address:</strong> H No. 11, 13-746, Road No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana
                500102, India
              </p>
              <p>
                <strong>Direct Email:</strong> contact@arlotechnologies.in (Mark: &ldquo;Attn: Grievance Officer&rdquo;)
              </p>
              <p>
                <strong>Contact Number:</strong> +91 9494900475
              </p>
              <p>
                <strong>Operational Hours:</strong> Monday to Saturday, 10:00 to 18:00 IST (Excluding National
                Holidays)
              </p>
            </div>
            <div className="space-y-2 text-tagline-2 text-secondary/70 dark:text-accent/70">
              <p className="font-semibold text-secondary dark:text-accent">Statutory Resolution Deadlines:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Formal acknowledgement of grievance: within 24 hours of receipt.</li>
                <li>Redressal and reasoned decision in writing: within 15 days of receipt.</li>
                <li>Content violating personal dignity/intimacy: taken down within 24 hours of complaint.</li>
              </ul>
            </div>
          </section>
        </RevealAnimation>

        {/* Delivery Policy */}
        <RevealAnimation delay={0.16}>
          <section
            id="sec-delivery"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §3
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Delivery and Service Policy
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Arlo Technologies India delivers purely digital software solutions, bespoke code, and online services. We
              do not manufacture or ship physical goods; therefore, no physical shipping or logistics charges apply.
            </p>
            <ul className="space-y-2 text-tagline-2 text-secondary/70 dark:text-accent/70 list-disc pl-5 leading-relaxed">
              <li>
                <strong>Product Accounts &amp; Access:</strong> Digital platform accounts and API access credentials are
                provisioned via email or workspace access within 24 hours of payment verification.
              </li>
              <li>
                <strong>Client Deliverables:</strong> Bespoke website files, mobile codebases, and application software
                are delivered via private staging links, secure Git repositories, or scheduled handover sessions.
              </li>
              <li>
                <strong>Delivery Confirmation:</strong> Deliverables are formally transmitted with an itemised delivery
                email recording repository tags, documentation links, and deployment configurations.
              </li>
            </ul>
          </section>
        </RevealAnimation>

        {/* AI Use Policy */}
        <RevealAnimation delay={0.18}>
          <section
            id="sec-ai-policy"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §4
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Artificial Intelligence Use Policy
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Where Arlo Technologies products integrate artificial intelligence or conversational automation:
            </p>
            <ul className="space-y-2 text-tagline-2 text-secondary/70 dark:text-accent/70 list-disc pl-5 leading-relaxed">
              <li>
                <strong>Transparency:</strong> Automated or AI-powered touchpoints are clearly labelled so users know
                they are interacting with an automated system.
              </li>
              <li>
                <strong>No Unauthorized Training:</strong> We do not use client prompts, proprietary data, or uploaded
                documents to train public AI models for third parties without explicit opt-in consent.
              </li>
              <li>
                <strong>Human-in-the-Loop:</strong> We never execute decisions with legal, credit, or significant impact
                on individuals based purely on unsupervised automated algorithms.
              </li>
              <li>
                <strong>Prohibited Uses:</strong> Users must not leverage our AI tools to generate deepfakes, deceptive
                impersonations, malicious code, phishing scams, or hateful content.
              </li>
            </ul>
          </section>
        </RevealAnimation>

        {/* Cookies */}
        <RevealAnimation delay={0.2}>
          <section
            id="sec-cookies"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §5
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Cookie Policy &amp; Consent
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              We employ cookies solely for essential session security, theme preferences (light/dark mode), and
              aggregate traffic analytics. Non-essential tracking cookies remain disabled until affirmative consent is
              granted via our consent banner. You may update or revoke cookie preferences at any time.
            </p>
          </section>
        </RevealAnimation>

        {/* Legal Disclaimer */}
        <RevealAnimation delay={0.22}>
          <section
            id="sec-disclaimer"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §6
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">Legal Disclaimer</h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              The content on this website is provided for general informational purposes regarding Arlo Technologies
              India&apos;s capabilities and solutions. It does not constitute binding legal, financial, or tax advice. While
              we employ best engineering practices, we cannot guarantee specific commercial outcomes, search rankings, or
              third-party business revenues. Consumer statutory rights under the Consumer Protection Act, 2019 remain
              unaffected.
            </p>
          </section>
        </RevealAnimation>

        {/* Client Agreements Overview */}
        <RevealAnimation delay={0.24}>
          <section
            id="sec-agreements"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §7
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Enterprise Agreements (MSA &amp; DPA)
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              For enterprise clients requiring institutional contracts, we execute standard bilateral templates:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 space-y-1">
                <span className="font-semibold text-secondary dark:text-accent">Master Services Agreement (MSA)</span>
                <p className="text-secondary/70 dark:text-accent/70">
                  Defines project governance, milestone acceptance, intellectual property assignment, confidentiality,
                  and liability caps under Indian contract law.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 space-y-1">
                <span className="font-semibold text-secondary dark:text-accent">Data Processing Agreement (DPA)</span>
                <p className="text-secondary/70 dark:text-accent/70">
                  Section 8(2) DPDP Act compliant framework binding Arlo as Data Processor to client documented
                  instructions and security safeguards.
                </p>
              </div>
            </div>
          </section>
        </RevealAnimation>

        {/* Escalation Channels */}
        <RevealAnimation delay={0.26}>
          <section
            id="sec-escalation"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                §8
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                External Escalation Channels
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              If an issue is not resolved through our internal Grievance Redressal Officer within the statutory 15-day
              timeline, users may seek recourse through official regulatory bodies:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7">
                <strong className="block text-secondary dark:text-accent">National Consumer Helpline</strong>
                <span className="text-secondary/70 dark:text-accent/70">Dial 1915 or visit consumerhelpline.gov.in</span>
              </div>
              <div className="p-3.5 rounded-xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7">
                <strong className="block text-secondary dark:text-accent">Data Protection Board</strong>
                <span className="text-secondary/70 dark:text-accent/70">Under DPDP Act statutory mechanisms</span>
              </div>
              <div className="p-3.5 rounded-xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7">
                <strong className="block text-secondary dark:text-accent">Consumer Commissions</strong>
                <span className="text-secondary/70 dark:text-accent/70">E-Daakhil filing platform (edaakhil.nic.in)</span>
              </div>
            </div>
          </section>
        </RevealAnimation>
      </div>
    </LegalPageLayout>
  );
};

export default LegalHubContent;
