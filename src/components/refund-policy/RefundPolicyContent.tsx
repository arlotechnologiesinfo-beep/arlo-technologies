import RevealAnimation from '../animation/RevealAnimation';
import LegalPageLayout from '../legal/LegalPageLayout';

const tocItems = [
  { id: 'sec-4-1', title: 'Custom Engineering & Website Projects' },
  { id: 'sec-4-2', title: 'Product Subscriptions & Plans' },
  { id: 'sec-4-3', title: 'Prepaid Usage Credits & Digital Items' },
  { id: 'sec-4-4', title: 'Failed, Duplicate or Erroneous Debits' },
  { id: 'sec-4-5', title: 'Non-Refundable Items & Services' },
  { id: 'sec-4-6', title: 'How to Submit a Refund Request' },
  { id: 'sec-4-7', title: 'Refund Processing Timelines & Method' },
];

const RefundPolicyContent = () => {
  return (
    <LegalPageLayout
      title="Refund & Cancellation Policy"
      badge="Consumer Protection Act, 2019 · E-Commerce Rules"
      description="Transparent, fair cancellation terms and refund procedures for custom engineering projects, software development, product subscriptions, and ongoing care plans."
      effectiveDate="October 18, 2026"
      lastUpdated="October 18, 2026"
      toc={tocItems}>
      <div className="space-y-8">
        {/* Statutory Intro */}
        <RevealAnimation delay={0.1}>
          <div className="p-6 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-3">
            <span className="badge badge-cyan text-xs">Consumer Protection &amp; Fair Trade</span>
            <p className="text-tagline-2 text-secondary/80 dark:text-accent/80 leading-relaxed">
              This Refund and Cancellation Policy is drafted under the Consumer Protection Act, 2019 and the Consumer
              Protection (E-Commerce) Rules, 2020. Your statutory rights as a consumer are strictly respected. Where an
              executed Statement of Work (SOW) or custom enterprise agreement defines specific milestone terms, those
              contractual provisions apply.
            </p>
          </div>
        </RevealAnimation>

        {/* Section 4.1 */}
        <RevealAnimation delay={0.12}>
          <section
            id="sec-4-1"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                4.1
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Custom Engineering &amp; Website Projects
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              For bespoke website development, custom software engineering, and automation projects, refund eligibility
              is structured by milestone progression:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stroke-3 dark:border-stroke-7 rounded-2xl overflow-hidden">
                <thead className="bg-background-2 dark:bg-background-8 text-secondary dark:text-accent font-semibold">
                  <tr>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Cancellation Scenario</th>
                    <th className="p-3 border-b border-stroke-3 dark:border-stroke-7">Refund Settlement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stroke-3 dark:divide-stroke-7 text-secondary/70 dark:text-accent/70">
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">
                      Cancelled within 7 days of deposit and prior to project kick-off
                    </td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                      100% full refund of all amounts paid
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">
                      Cancelled after milestone design/coding work has commenced
                    </td>
                    <td className="p-3">
                      Prorated refund for unstarted milestones, minus verified value of completed work and non-refundable
                      third-party outlays
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">
                      Milestones already delivered and accepted (or in live commercial use)
                    </td>
                    <td className="p-3 text-amber-600 dark:text-amber-400">
                      Non-refundable, as work has been fully delivered and inspected
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-secondary dark:text-accent">
                      Inability by Arlo to deliver agreed technical scope
                    </td>
                    <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">
                      Full refund for undelivered technical scope
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 leading-relaxed">
              If any deliverable deviates materially from agreed specifications in the SOW, our team will first rectify
              the non-conformity free of charge within a 30-day warranty window.
            </p>
          </section>
        </RevealAnimation>

        {/* Section 4.2 */}
        <RevealAnimation delay={0.14}>
          <section
            id="sec-4-2"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                4.2
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Product Subscriptions &amp; Care Plans
              </h2>
            </div>
            <ul className="space-y-2 text-tagline-2 text-secondary/70 dark:text-accent/70 list-disc pl-5 leading-relaxed">
              <li>
                <strong>Cancel Anytime:</strong> Monthly care plans and SaaS product subscriptions can be cancelled at
                any time with zero cancellation penalties. Cancellation terminates subsequent renewal charges while
                active access remains available until the end of the current paid billing cycle.
              </li>
              <li>
                <strong>7-Day First Purchase Window:</strong> If you purchase a subscription or care plan for the first
                time and have not utilized substantial support hours or API credits, you may request a full refund
                within 7 days of initial purchase.
              </li>
              <li>
                <strong>RBI Recurring Payment Compliance:</strong> All recurring payment debits follow Reserve Bank of
                India (RBI) e-mandate frameworks. We transmit pre-debit notifications via email/SMS prior to renewal,
                allowing you full control to modify or cancel your recurring plan.
              </li>
            </ul>
          </section>
        </RevealAnimation>

        {/* Section 4.3 */}
        <RevealAnimation delay={0.16}>
          <section
            id="sec-4-3"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                4.3
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Prepaid Usage Credits &amp; Digital Purchases
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              Unused prepaid credits (such as message packs or API tokens) may be refunded within 7 days of purchase upon
              request. Credits that have already been consumed through live messaging or automated workflows, as well as
              digital assets already delivered or downloaded, are non-refundable unless verified to be defective.
            </p>
          </section>
        </RevealAnimation>

        {/* Section 4.4 */}
        <RevealAnimation delay={0.18}>
          <section
            id="sec-4-4"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                4.4
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Failed, Duplicate or Erroneous Debits
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              In cases where funds were deducted from your bank account or card but the transaction failed to register on
              our platform, banking gateways typically initiate an automatic reversal within 5 to 7 business days. If you
              experience duplicate billing, notify us with the transaction UTR/reference number, and the erroneous
              amount will be promptly refunded.
            </p>
          </section>
        </RevealAnimation>

        {/* Section 4.5 */}
        <RevealAnimation delay={0.2}>
          <section
            id="sec-4-5"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                4.5
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                Non-Refundable Items &amp; Services
              </h2>
            </div>
            <ul className="space-y-1.5 text-tagline-2 text-secondary/70 dark:text-accent/70 list-disc pl-5 leading-relaxed">
              <li>Direct third-party costs disbursed on your behalf (e.g., custom domain registrations, SSL certs);</li>
              <li>Milestone deliverables inspected, approved, and formally accepted by you;</li>
              <li>Subscription periods already elapsed without prior cancellation;</li>
              <li>Costs incurred due to client breach of our Acceptable Use policy or Terms of Use.</li>
            </ul>
          </section>
        </RevealAnimation>

        {/* Section 4.6 & 4.7 */}
        <RevealAnimation delay={0.22}>
          <section
            id="sec-4-6"
            className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-background-6 border border-stroke-3 dark:border-stroke-7 shadow-xs space-y-4 scroll-mt-28">
            <div className="flex items-center gap-3">
              <span className="size-8 rounded-full bg-primary-100 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-mono text-xs flex items-center justify-center font-bold">
                4.6
              </span>
              <h2 className="text-heading-5 font-normal text-secondary dark:text-accent">
                How to Submit a Refund Request
              </h2>
            </div>
            <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed">
              To request a cancellation or refund, email{' '}
              <a href="mailto:contact@arlotechnologies.in" className="text-primary-600 hover:underline font-medium">
                contact@arlotechnologies.in
              </a>{' '}
              with:
            </p>
            <ol className="space-y-1.5 text-tagline-2 text-secondary/70 dark:text-accent/70 list-decimal pl-5 leading-relaxed">
              <li>Your full registered name and organization name;</li>
              <li>Invoice or order reference number;</li>
              <li>Date of payment and payment method;</li>
              <li>Detailed reason for the refund or cancellation request.</li>
            </ol>
            <div className="p-4 rounded-2xl bg-background-2 dark:bg-background-8 border border-stroke-3 dark:border-stroke-7 text-xs space-y-2 text-secondary/80 dark:text-accent/80">
              <p>
                <strong>Acknowledgement:</strong> We acknowledge refund requests within 24 hours of receipt.
              </p>
              <p>
                <strong>Evaluation Window:</strong> We review and decide on refund requests within 7 business days,
                communicating reasoned outcomes in writing.
              </p>
              <p>
                <strong>Disbursement:</strong> Approved refunds are credited directly back to the original payment source
                within 7 to 10 business days, with proportionate GST credit notes issued.
              </p>
            </div>
          </section>
        </RevealAnimation>
      </div>
    </LegalPageLayout>
  );
};

export default RefundPolicyContent;
