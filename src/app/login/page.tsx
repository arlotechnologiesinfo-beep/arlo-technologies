import AuthShell from '@/components/authentication/AuthShell';
import LoginForm from '@/components/authentication/LoginForm';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Sign in || Arlo Technologies',
};

const page = () => {
  return (
    <AuthShell mode="login">
      <Suspense>
        <LoginForm />
      </Suspense>
    </AuthShell>
  );
};
export default page;
