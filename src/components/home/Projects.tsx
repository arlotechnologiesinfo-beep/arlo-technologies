import { clientProjects } from '@/data/clientProjectsData';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-20 lg:py-[90px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.2}>
            <h2>Selected Work</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[680px]">
              Digital experiences crafted for ambitious brands and growing businesses.
            </p>
          </RevealAnimation>
        </div>
        <div className="mb-14">
          <div className="grid grid-cols-12 gap-y-12 lg:gap-14">
            {clientProjects.map((project, index) => {
              const isFullWidth = index % 3 === 0;
              const colSpanClass = isFullWidth ? 'col-span-12' : 'col-span-12 lg:col-span-6';
              const imgHeightClass = isFullWidth
                ? 'h-[320px] sm:h-[420px] md:max-h-[576px] xl:h-[576px]'
                : 'h-[300px] sm:h-[360px] md:max-h-[280px] lg:max-h-[400px] xl:h-[576px]';

              return (
                <div key={project.id} className={colSpanClass}>
                  <RevealAnimation delay={0.2 + (index % 3) * 0.1}>
                    <figure className="space-y-4">
                      {/* Website/Globe icon link positioned above the project content */}
                      <div className="flex items-center justify-between px-1">
                        <span className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium tracking-wide uppercase">
                          {project.category}
                        </span>
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.name} website`}
                          title={`Visit ${project.name} website`}
                          className="group/link flex items-center gap-1.5 rounded-full border border-stroke-2 dark:border-stroke-6 bg-white/80 dark:bg-background-8/80 px-3 py-1 text-tagline-2 text-secondary dark:text-accent transition-all duration-300 hover:border-secondary dark:hover:border-accent hover:shadow-sm">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-3.5 transition-transform duration-300 group-hover/link:scale-110"
                            aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                          <span className="text-xs font-normal">Live Site</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="size-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                            aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </div>

                      {/* Project Thumbnail */}
                      <div className={`group relative w-full overflow-hidden rounded-[20px] ${imgHeightClass}`}>
                        <Image
                          src={project.thumbnail}
                          className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          alt={project.name}
                          fill
                          priority={index < 2}
                          unoptimized
                        />
                      </div>

                      {/* Project Name and Description */}
                      <div className="flex flex-col justify-start gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4 px-1">
                        <h3 className="text-heading-6 sm:text-heading-5">{project.name}</h3>
                        <p className="line-clamp-2 max-w-[380px] text-left sm:text-right text-secondary/70 dark:text-accent/70">
                          {project.description}
                        </p>
                      </div>
                    </figure>
                  </RevealAnimation>
                </div>
              );
            })}
          </div>
        </div>
        <RevealAnimation delay={0.6}>
          <div className="text-center">
            <LinkButton
              href="/projects"
              className="btn btn-primary btn-xl w-[90%] md:w-auto shadow-md">
              See all projects
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Projects;
