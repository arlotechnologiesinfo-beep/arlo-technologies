import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

// legal notice content
const Content = () => {
  return (
    <section className="pb-16 lg:pb-20 xl:pb-28">
      <div className="main-container">
        <div className="mx-auto w-full max-w-[950px]">
          <RevealAnimation delay={0.1}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Publisher:</h2>
              <p>
                The{' '}
                <Link href="/" className="text-primary-500">
                  https://arlotechnologies.in
                </Link>{' '}
                website is published by: <br />
                <strong>Arlo Technologies India</strong> <br />
                Operational Office: H No. 11, 13-746, Road No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana 500035, India <br />
                Contact Email:{' '}
                <Link href="mailto:contact@arlotechnologies.in" className="text-primary-500">
                  contact@arlotechnologies.in
                </Link>{' '}
                | Phone: +91 9494900475
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Corporate Governance &amp; Grievance Redressal:</h2>
              <p>
                Grievance Officer: Designated under the Information Technology Act, 2000 &amp; DPDP Act, 2023. <br />
                Email:{' '}
                <Link href="mailto:grievance@arlotechnologies.in" className="text-primary-500">
                  grievance@arlotechnologies.in
                </Link>
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Hosting Provider &amp; Infrastructure:</h2>
              <p>
                This web platform and services are hosted across globally distributed cloud infrastructure with Anycast CDN edge networks and high availability.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-3 py-8">
              <h2 className="text-heading-4 font-normal">Engineering &amp; Design:</h2>
              <p>
                Architected, designed, and developed in-house by Arlo Technologies India. <br />
                Website:{' '}
                <Link href="/" className="text-primary-500">
                  https://arlotechnologies.in
                </Link>
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

Content.displayName = 'Content';
export default Content;
