import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

export interface GlossaryItem {
  id: string;
  title: string;
  description: string;
  example?: string;
}

export interface GlossarySection {
  id: string;
  letter: string;
  subtitle?: string;
  items: GlossaryItem[];
}

interface GlossaryCardProps {
  section: GlossarySection;
}

const GlossaryCard = ({ section }: GlossaryCardProps) => {
  return (
    <div
      id={`section-${section.letter.toLowerCase()}`}
      key={section.letter.toLowerCase()}
      className="scroll-mt-28 border-b-stroke-1 dark:border-b-stroke-7 border-b pb-12 last:border-b-0">
      <div className="flex flex-col md:flex-row md:items-start md:gap-x-10 lg:gap-x-12">
        <div className="mb-4 md:mb-0 md:w-[140px] lg:w-[180px] shrink-0">
          <RevealAnimation delay={0.1}>
            <div className="sticky top-28 space-y-1">
              <h2 className="text-heading-2 font-normal text-secondary dark:text-accent">
                {section.letter}
              </h2>
              {section.subtitle && (
                <p className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-medium">
                  {section.subtitle}
                </p>
              )}
            </div>
          </RevealAnimation>
        </div>

        <div className="flex-1 space-y-6">
          {section.items.map((item, itemIndex) => (
            <RevealAnimation key={item.id} delay={0.05 + (itemIndex) * 0.05}>
              <div
                className={cn(
                  'space-y-3 pb-6',
                  itemIndex !== section.items.length - 1 && 'border-b-stroke-1 dark:border-b-stroke-7 border-b',
                )}>
                <h3 className="text-heading-5 font-normal text-secondary dark:text-accent">{item.title}</h3>
                <p className="text-secondary/80 dark:text-accent/80 font-normal leading-relaxed">{item.description}</p>
                {item.example && (
                  <div className="rounded-xl bg-background-1 dark:bg-background-6/80 p-3.5 border border-stroke-1 dark:border-stroke-7 text-tagline-2 text-secondary/90 dark:text-accent/90">
                    <span className="font-semibold text-secondary dark:text-accent">Example: </span>
                    {item.example}
                  </div>
                )}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};

GlossaryCard.displayName = 'GlossaryCard';
export default GlossaryCard;
