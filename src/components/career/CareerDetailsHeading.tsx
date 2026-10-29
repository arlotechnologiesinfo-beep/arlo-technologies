import RevealAnimation from '../animation/RevealAnimation';

interface CareerDetailsHeadingProps {
  title?: string;
}

const CareerDetailsHeading = ({ title }: CareerDetailsHeadingProps) => {
  return (
    <div className="text-center space-y-3 mb-[70px]">
      <RevealAnimation delay={0.2}>
        <span className="badge badge-green mb-3 !normal-case">Career Opportunities</span>
      </RevealAnimation>
      <RevealAnimation delay={0.3}>
        <h2>{title || 'Join Arlo Technologies'}</h2>
      </RevealAnimation>
      <RevealAnimation delay={0.4}>
        <p className="text-secondary/80 dark:text-accent/80 text-lg">
          Explore the role details, learning objectives, and program requirements below.
        </p>
      </RevealAnimation>
    </div>
  );
};

CareerDetailsHeading.displayName = 'CareerDetailsHeading';
export default CareerDetailsHeading;
