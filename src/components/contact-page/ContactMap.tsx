import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';
import Map from '../shared/Map';

const ContactMap = () => {
  return (
    <section className="md:pt-[40px] lg:pt-[60px] pb-[100px] md:pb-[140px] lg:pb-[180px]" aria-label="Location Map">
      <div className="main-container">
        <div className="mb-10 text-center space-y-3 max-w-[720px] mx-auto">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green !normal-case mb-2">Our Presence</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h3 className="text-heading-4 sm:text-heading-3 font-normal">Find Us in Hyderabad.</h3>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary/70 dark:text-accent/70 text-tagline-1">
              Located in the heart of Telangana&apos;s technology ecosystem. We welcome scheduled visits and collaborative conversations.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="text-tagline-2 font-medium text-secondary dark:text-accent pt-1">
              No. 5, Dwarka Nagar, Kothapet, Hyderabad, Telangana 500035, India.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="pt-3">
              <Link
                href="https://www.google.com/maps/search/?api=1&query=No.+5,+Dwarka+Nagar,+Kothapet,+Hyderabad,+Telangana+500035,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-outline-secondary dark:btn-outline-accent">
                Open in Google Maps
              </Link>
            </div>
          </RevealAnimation>
        </div>
        <RevealAnimation delay={0.3}>
          <div className="rounded-[20px] bg-white dark:bg-background-6 p-2.5 shadow-sm border border-stroke-3 dark:border-stroke-7">
            <div className="w-full h-[320px] overflow-hidden rounded-2xl lg:h-[500px]">
              <Map />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ContactMap;
