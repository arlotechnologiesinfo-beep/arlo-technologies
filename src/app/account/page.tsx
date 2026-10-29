import AccountPanel from '@/components/authentication/AccountPanel';
import { isSupabaseConfigured } from '@/lib/supabase/env';
import { createClient } from '@/lib/supabase/server';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Your Account || Arlo Technologies',
  robots: { index: false, follow: false },
};

export const dynamic = 'force-dynamic';

const AccountPage = async () => {
  if (!isSupabaseConfigured) {
    redirect('/login');
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect('/login?next=/account');
  }

  const { data: profile } = await supabase.from('profiles').select('full_name, role').eq('id', user.id).maybeSingle();

  return (
    <main className="bg-background-3 dark:bg-background-7">
      <section className="pt-[120px] pb-[100px] lg:pt-[180px]">
        <div className="main-container">
          <AccountPanel email={user.email ?? ''} name={profile?.full_name ?? ''} role={profile?.role ?? 'user'} />
        </div>
      </section>
    </main>
  );
};

export default AccountPage;
