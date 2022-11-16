import { useEffect } from 'react';
import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Database } from '../lib/database.types';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import { useRouter } from 'next/router';

const LoginPage: NextPage = () => {
  const { isLoading, session, error } = useSessionContext();
  const supabaseClient = useSupabaseClient<Database>();
  const router = useRouter();

  useEffect(() => {
    async function redirect() {
      if (session) {
        router.push('/dashboard');
      }
    }

    redirect();
  }, [session]);

  if (!session)
    return (
      <>
        {error && <p>{error.message}</p>}
        {isLoading ? <h1>Loading...</h1> : <h1>Loaded!</h1>}
        <Auth
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          theme="dark"
        />
      </>
    );

  return (
    <>
      <Link href="/create-notes">GO TO FORM</Link>
    </>
  );
};

export default LoginPage;
