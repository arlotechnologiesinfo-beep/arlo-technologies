'use client';
import { useTab } from '@/context/TabContext';
import blog1 from '@public/images/ns-img-428.png';
import blog2 from '@public/images/ns-img-459.png';
import blog3 from '@public/images/ns-img-460.png';
import blog4 from '@public/images/ns-img-461.png';
import blog5 from '@public/images/ns-img-462.png';
import blog6 from '@public/images/ns-img-463.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const blogs = [
  {
    id: 1,
    title: 'Autonomous AI Agents & Workflows',
    subtitle: 'Design, test, and deploy intelligent agentic workflows with structured tool calling and memory.',
    time: 'Architecture Guide',
    readTime: '15 Mins',
    tag: 'AI & Agents',
    href: '/blog/ai-agents-explained-from-smart-assistants-to-autonomous-workflows',
    image: blog1,
  },
  {
    id: 2,
    title: 'Event-Driven Workflow Automation',
    subtitle: 'Connect critical business systems, trigger operational pipelines, and eliminate manual bottlenecks.',
    time: 'Implementation Guide',
    readTime: '18 Mins',
    tag: 'Automation',
    href: '/whitepaper/automating-customer-support-with-ai',
    image: blog2,
  },
  {
    id: 3,
    title: 'Modern Full-Stack Web Development',
    subtitle: 'Best practices for scalable frontend architectures, component systems, and resilient backend endpoints.',
    time: 'Engineering Guide',
    readTime: '20 Mins',
    tag: 'Web & Apps',
    href: '/blog/jamstack-vs-traditional-cms-which-one-is-right-for-you',
    image: blog3,
  },
  {
    id: 4,
    title: 'UI/UX Design Systems & Product UI',
    subtitle: 'Create responsive user interfaces, accessible patterns, and consistent design tokens for modern apps.',
    time: 'Design Walkthrough',
    readTime: '14 Mins',
    tag: 'UI/UX & Design',
    href: '/blog/the-future-of-ui-ux-design-in-the-age-of-generative-ai',
    image: blog4,
  },
  {
    id: 5,
    title: 'API Integrations & Cloud Deployment',
    subtitle: 'Step-by-step setup for RESTful APIs, webhooks, containerized hosting, and production deployments.',
    time: 'Deployment Guide',
    readTime: '22 Mins',
    tag: 'Cloud & APIs',
    href: '/integration',
    image: blog5,
  },
  {
    id: 6,
    title: 'Security, Privacy & Data Protection',
    subtitle: 'Configure role-based access controls, protect data integrity, and adhere to security best practices.',
    time: 'Security Overview',
    readTime: '16 Mins',
    tag: 'Cloud & APIs',
    href: '/security',
    image: blog6,
  },
];

const BlogTabContent = () => {
  const { currentIndex: activeTab } = useTab();

  const getFilteredBlogs = () => {
    if (activeTab === 0) {
      return blogs;
    }

    const tagMap = {
      1: 'AI & Agents',
      2: 'Automation',
      3: 'Web & Apps',
      4: 'UI/UX & Design',
      5: 'Cloud & APIs',
    };

    const selectedTag = tagMap[activeTab as keyof typeof tagMap];
    return blogs.filter((blog) => blog.tag === selectedTag);
  };

  const filteredBlogs = getFilteredBlogs();
  return (
    <div className="mt-20 grid grid-cols-12 gap-y-6 sm:gap-5 md:gap-8">
      {filteredBlogs.map((blog, index) => (
        <RevealAnimation key={blog.id} delay={0.1 + index * 0.1}>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <article className="dark:bg-background-5 border-stroke-4 dark:border-stroke-5 mx-auto max-w-[500px] overflow-hidden rounded-[20px] border bg-white md:mx-0 md:max-w-full">
              <figure>
                <Image src={blog.image} alt={blog.title} loading="lazy" className="h-full w-full object-cover" />
              </figure>
              <div className="space-y-6 p-6">
                <div className="flex items-center gap-3.5 xl:gap-6">
                  <span className="badge badge-green">{blog.tag}</span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                      <path
                        d="M10.5 17.5C14.6421 17.5 18 14.1421 18 10C18 5.85786 14.6421 2.5 10.5 2.5C6.35786 2.5 3 5.85786 3 10C3 14.1421 6.35786 17.5 10.5 17.5Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeMiterlimit={10}
                      />
                      <path
                        d="M10.5 5.625V10H14.875"
                        className="stroke-secondary dark:stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-tagline-3 text-secondary dark:text-accent font-normal whitespace-nowrap">
                      {blog.readTime}
                    </span>
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={21} height={20} viewBox="0 0 21 20" fill="none">
                      <path
                        d="M4.25 16.875C4.25 16.3777 4.44754 15.9008 4.79917 15.5492C5.15081 15.1975 5.62772 15 6.125 15H16.75V2.5H6.125C5.62772 2.5 5.15081 2.69754 4.79917 3.04917C4.44754 3.40081 4.25 3.87772 4.25 4.375V16.875Z"
                        className="stroke-secondary dark:stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.25 16.875V17.5H15.5"
                        className="stroke-secondary dark:stroke-accent"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-tagline-3 text-secondary dark:text-accent font-normal whitespace-nowrap">
                      {blog.time}
                    </span>
                  </span>
                </div>
                <div className="space-y-2">
                  <p className="xl:text-heading-5 text-heading-6 text-secondary dark:text-accent">{blog.title}</p>
                  <p className="line-clamp-2">{blog.subtitle}</p>
                </div>
                <div>
                  <LinkButton
                    href={blog.href}
                    className="btn hover:btn-secondary dark:hover:btn-accent dark:btn-transparent btn-white btn-md">
                    Read guide
                  </LinkButton>
                </div>
              </div>
            </article>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

export default BlogTabContent;
