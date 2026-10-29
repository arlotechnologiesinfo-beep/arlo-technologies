import { Suspense } from 'react';
import RevealAnimation from '../animation/RevealAnimation';
import AuthForm from './AuthForm';
import SocialAuth from './SocialAuth';

const LoginHero = () => {
  return (
    <section className="pt-[120px] pb-[70px] lg:pt-[180px] lg:pb-[100px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="bg-background-1 dark:bg-background-6 mx-auto max-w-[400px] rounded-[20px] px-8 py-14">
            <Suspense>
              <AuthForm mode="login" />
            </Suspense>
            <div>
              <div className="pb-6 text-center">
                <p className="text-tagline-2 text-secondary dark:text-accent font-normal">Or</p>
              </div>
              <SocialAuth />
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default LoginHero;
