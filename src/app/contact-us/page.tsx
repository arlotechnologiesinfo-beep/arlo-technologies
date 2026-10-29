import ContactInfo from '@/components/contact-page/ContactInfo';
import ContactMap from '@/components/contact-page/ContactMap';
import CTA from '@/components/shared/cta/CTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Contact Us || Arlo Technologies',
  description:
    'Have a project in mind, a challenge to solve, or a vision you are ready to bring to life? Connect with the Arlo Technologies team in Hyderabad or online.',
};

const ContactUs = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <ContactInfo />
      <ContactMap />
      <CTA
        className="dark:bg-background-5 bg-white"
        badgeClass="badge-green"
        badgeText="Start the Dialogue"
        ctaBtnText="Get Started"
        ctaHeading="Get in Touch With Arlo Technologies."
        description="Have an ambitious project or want to learn more about what we can build together? Reach out to our team and let's explore possibilities."
      />
    </main>
  );
};

export default ContactUs;
