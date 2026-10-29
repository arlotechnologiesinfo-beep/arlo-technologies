import { webBgAssets } from '@/data/webBgImages';
import { StaticImageData } from 'next/image';

export interface ITestimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  websiteUrl: string;
  quote: string;
  avatar: StaticImageData | string;
}

export const testimonialsData: ITestimonial[] = [
  {
    id: 'raveena-sarees',
    name: 'Raveena Sarees',
    role: 'E-commerce & Brand Showcase',
    project: 'Raveena Sarees Digital Storefront',
    websiteUrl: 'https://www.raveenasarees.com/',
    quote:
      'Arlo Technologies delivered an elegant, high-performing digital storefront for our collections. The online shopping experience is fast, beautifully designed, and loved by our customers.',
    avatar: webBgAssets.taraWinstead,
  },
  {
    id: 'revengo',
    name: 'Revengo',
    role: 'Client Digital Platform',
    project: 'Revengo Online Presence',
    websiteUrl: 'https://revengo.com/',
    quote:
      'Working with Arlo was a seamless experience. They understood our brand vision from day one, delivering a modern, responsive website with exceptional attention to detail.',
    avatar: webBgAssets.dynamicwang,
  },
  {
    id: 'career-corner-india',
    name: 'Career Corner India',
    role: 'Education & Mentorship Platform',
    project: 'Career Mentorship Portal',
    websiteUrl: 'https://careercornerindia.com/',
    quote:
      'The platform built by Arlo has made connecting mentors, students, and professionals straightforward and reliable. Outstanding engineering, speed, and design execution.',
    avatar: webBgAssets.cottonbro,
  },
  {
    id: 'aeli-adops',
    name: 'Aeli Adops',
    role: 'Digital Services & Ad Operations',
    project: 'Digital Agency Platform',
    websiteUrl: 'https://aeliadops.com/',
    quote:
      'Arlo Technologies brought technical excellence and modern aesthetics together to create a dedicated digital presence that clearly communicates our service capabilities.',
    avatar: webBgAssets.lifestyle1,
  },
];
