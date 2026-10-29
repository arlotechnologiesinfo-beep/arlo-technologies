export interface IClientProject {
  id: string;
  name: string;
  category: string;
  description: string;
  websiteUrl: string;
  thumbnail: string;
  fallbackThumbnail?: string;
}

export const clientProjects: IClientProject[] = [
  {
    id: 'raveena-sarees',
    name: 'Raveena Sarees',
    category: 'Fashion & E-commerce',
    description: "An elegant digital storefront showcasing sarees and the brand's online shopping experience.",
    websiteUrl: 'https://www.raveenasarees.com/',
    thumbnail: '/api/r2/portfolio/projects/Screenshot%202026-10-20%20195116.png',
    fallbackThumbnail: '/images/ns-img-405.jpg',
  },
  {
    id: 'revengo',
    name: 'Revengo',
    category: 'Client Website',
    description: 'A digital experience designed to present the brand and its online presence.',
    websiteUrl: 'https://revengo.com/',
    thumbnail: '/api/r2/portfolio/projects/Screenshot%202026-10-20%20195352.png',
    fallbackThumbnail: '/images/ns-img-416.jpg',
  },
  {
    id: 'career-corner-india',
    name: 'Career Corner India',
    category: 'Education & Career Mentorship',
    description:
      'A platform connecting students and professionals with career guidance, educational mentorship, training, and job-related opportunities.',
    websiteUrl: 'https://careercornerindia.com/',
    thumbnail: '/api/r2/portfolio/projects/Screenshot%202026-10-20%20195602.png',
    fallbackThumbnail: '/images/ns-img-413.jpg',
  },
  {
    id: 'aeli-adops',
    name: 'Aeli Adops',
    category: 'Digital Services',
    description: 'A client website project showcasing the brand through a dedicated digital presence.',
    websiteUrl: 'https://aeliadops.com/',
    thumbnail: '/api/r2/portfolio/projects/Screenshot%202026-03-19%20142335.png',
    fallbackThumbnail: '/images/ns-img-411.jpg',
  },
];
