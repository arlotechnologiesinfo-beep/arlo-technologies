import AuthShell from '@/components/authentication/AuthShell';
import SignupForm from '@/components/authentication/SignupForm';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Create your account || Arlo Technologies',
};

const page = () => {
  return (
    <AuthShell mode="signup">
      <Suspense>
        <SignupForm />
      </Suspense>
    </AuthShell>
  );
};
export default page;
