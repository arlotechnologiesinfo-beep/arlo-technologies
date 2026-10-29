import LinkButton from '@/components/ui/button/LinkButton';
import { IPosition } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import RevealAnimation from '../animation/RevealAnimation';

const Positions = () => {
  const positions = getMarkDownData<IPosition & { [key: string]: unknown }>('src/data/career');

  return (
    <section id="open-positions" className="scroll-mt-24 py-[100px] xl:py-[160px]">
      <div className="main-container">
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5 !normal-case">Open Positions</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2>Become Part of the Dream Team</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-secondary dark:text-accent text-xl font-medium mt-3 mb-2">
              Discover your potential and grow with us.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <p className="mx-auto max-w-[720px] text-secondary/80 dark:text-accent/80">
              Explore opportunities across technology, design, research, and digital innovation. Beginners and
              candidates with zero experience are welcome to apply.
            </p>
          </RevealAnimation>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {positions?.map((singlePost, index) => (
            <RevealAnimation delay={0.2 + (index % 2) * 0.1} key={singlePost?.slug}>
              <div className="h-full">
                <div className="bg-background-1 dark:bg-background-6 flex h-full flex-col justify-between space-y-6 rounded-[20px] p-8 sm:p-11 transition-all duration-[400ms] hover:scale-[100.5%] hover:shadow-md">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {singlePost?.employmentType?.map((type) => (
                        <span className="badge badge-gray-light !normal-case" key={type}>
                          {type}
                        </span>
                      ))}
                      {singlePost?.status && (
                        <span
                          className={`badge !normal-case ${
                            singlePost.status === 'Open'
                              ? 'badge-green'
                              : 'badge-yellow'
                          }`}>
                          {singlePost.status}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-heading-5 mb-3 font-normal">{singlePost?.title}</h3>
                      <p className="text-secondary/80 dark:text-accent/80">{singlePost?.shortDescription}</p>
                    </div>
                  </div>
                  <div>
                    <LinkButton
                      href={`/career/${singlePost?.slug}`}
                      className="btn hover:btn-secondary dark:btn-transparent dark:hover:btn-accent btn-md btn-white">
                      Read more
                    </LinkButton>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;
