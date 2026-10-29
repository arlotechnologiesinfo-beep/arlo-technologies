import gradientBorder from '@public/images/ns-img-523.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const operationCardsData = [
  {
    id: '1',
    shapeClass: 'ns-shape-19',
    title: 'Workflow Automation',
    tagline: 'Less Manual Work. More Meaningful Progress.',
    description: 'Simplify repetitive tasks, connect processes, and give your team more time to focus on what matters.',
  },
  {
    id: '2',
    shapeClass: 'ns-shape-35',
    title: 'Data & Reporting',
    tagline: 'Turn Information Into Direction.',
    description: 'Organise business information and build clearer reporting experiences to support informed decisions.',
  },
  {
    id: '3',
    shapeClass: 'ns-shape-4',
    title: 'System Integrations',
    tagline: 'Make Your Tools Work Together.',
    description: 'Connect applications and services to create smoother workflows and reduce disconnected processes.',
  },
  {
    id: '4',
    shapeClass: 'ns-shape-32',
    title: 'Operational Efficiency',
    tagline: 'Better Processes. Smoother Operations.',
    description: 'Identify workflow gaps, simplify everyday tasks, and create systems that support consistent execution.',
  },
];

const OperationCards = () => {
  return (
    <div className="grid grid-cols-12 items-stretch justify-center gap-6 md:gap-8">
      {operationCardsData.map((card, index) => (
        <RevealAnimation key={card.id} delay={0.2 + (index % 4) * 0.1}>
          <div className="dark:bg-background-7 relative col-span-12 h-full w-full overflow-hidden rounded-[20px] bg-white p-2 md:col-span-6 lg:col-span-6 xl:col-span-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            {/* border gradient img  */}
            <figure className="pointer-events-none absolute top-[-95%] left-[-85%] size-[800px] rotate-[82deg] overflow-hidden select-none">
              <Image src={gradientBorder} alt="decorative border" className="size-full" />
            </figure>
            {/* card content  */}
            <div className="bg-background-1 dark:bg-background-6 relative z-10 flex h-full flex-col justify-between space-y-6 rounded-xl p-6 sm:p-8">
              <div className="inline-block">
                <span className={`${card.shapeClass} text-secondary dark:text-accent text-[48px]`} />
              </div>
              <div className="space-y-2">
                <h4 className="text-heading-6 sm:text-heading-5 font-normal leading-snug">{card.title}</h4>
                <p className="text-secondary dark:text-accent text-sm font-medium">{card.tagline}</p>
                <p className="text-tagline-2 text-secondary/70 dark:text-accent/70 leading-relaxed pt-1">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      ))}
    </div>
  );
};

OperationCards.displayName = 'OperationCards';
export default OperationCards;
