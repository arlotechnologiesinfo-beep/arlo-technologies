'use client';

import { IPosition } from '@/interface';
import gradient45 from '@public/images/ns-img-533.png';
import Image from 'next/image';
import { useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import ApplicationModal from './ApplicationModal';

const JobOverview = ({ data }: { data: Partial<IPosition> }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isComingSoon = data?.status === 'Coming Soon';

  return (
    <>
      <RevealAnimation delay={0.4}>
        <div className="bg-background-1 dark:bg-background-5 relative col-span-12 overflow-hidden rounded-[20px] p-8 sm:p-11 md:col-span-6">
          {/* bg gradient img  */}
          <RevealAnimation delay={0.4} duration={1.2} direction="right" offset={90}>
            <figure className="pointer-events-none absolute top-[-27%] right-[-77%] size-[500px] overflow-hidden select-none max-[377px]:right-[-90%] md:top-[-27%] md:right-[-83%] lg:top-[-49%] lg:right-[-102%] lg:size-[800px] xl:top-[-60%] xl:right-[-99%] xl:size-[1000px]">
              <Image src={gradient45} alt="career-details-bg-gradient-img" className="size-full object-cover" />
            </figure>
          </RevealAnimation>

          <div className="space-y-8 relative z-10">
            <div>
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-stroke-4 dark:border-stroke-7 pb-4">
                <div>
                  <span className="badge badge-green mb-2 !normal-case">Overview</span>
                  <h4 className="text-heading-5 font-normal">{data?.title}</h4>
                </div>
                {data?.status && (
                  <span
                    className={`badge !normal-case ${
                      data.status === 'Open' ? 'badge-green' : 'badge-yellow'
                    }`}>
                    {data.status}
                  </span>
                )}
              </div>

              {/* Job Title */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Job Title</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.title}</p>
              </div>

              {/* Date Posted */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Date Posted</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.datePosted}</p>
              </div>

              {/* Application Expiration Date */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Application Expiration Date</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.expirationDate}</p>
              </div>

              {/* Location */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Location</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.location}</p>
              </div>

              {/* Work Mode */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Work Mode</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.workMode || 'Remote'}</p>
              </div>

              {/* Employment Type */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Employment Type</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">
                  {Array.isArray(data?.employmentType)
                    ? data?.employmentType.join(' · ')
                    : data?.employmentType || 'Internship'}
                </p>
              </div>

              {/* Offered Salary */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Offered Salary</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.offeredSalary}</p>
              </div>

              {/* Experience Required */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Experience Required</p>
                <p className="text-base text-secondary/90 dark:text-accent/90">{data?.experience}</p>
              </div>

              {/* Qualification */}
              <div className="border-stroke-4 dark:border-stroke-7 border-b py-3.5">
                <p className="text-secondary dark:text-accent text-sm font-medium leading-[150%]">Qualification</p>
                <p className="text-base text-secondary/90 dark:text-accent/90 leading-relaxed">{data?.qualification}</p>
              </div>
            </div>

            {/* Job Skills */}
            <div>
              <h5 className="mb-4 text-base font-medium">Job Skills</h5>
              <div className="flex flex-wrap items-center gap-2.5">
                {data?.jobSkills?.map((skill) => (
                  <span
                    key={skill}
                    className="bg-background-1 dark:bg-background-6 border-stroke-4 dark:border-stroke-7 text-secondary dark:text-accent rounded-full border px-4 py-1.5 text-tagline-2 font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Apply Now Button / Coming Soon */}
            <div className="w-full pt-2">
              {isComingSoon ? (
                <button
                  type="button"
                  disabled
                  className="btn btn-secondary w-full opacity-60 cursor-not-allowed first-letter:uppercase">
                  Coming Soon
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="hover:btn-secondary dark:hover:btn-accent btn btn-primary btn-md w-full first-letter:uppercase before:content-none justify-center">
                  Apply Now
                </button>
              )}
            </div>
          </div>
        </div>
      </RevealAnimation>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        positionTitle={data?.title || 'Internship Position'}
      />
    </>
  );
};

JobOverview.displayName = 'JobOverview';
export default JobOverview;
