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
import { Box } from '@mui/material';

const LoginPage: NextPage = () => {
  const { isLoading, session, error } = useSessionContext();
  const supabaseClient = useSupabaseClient<Database>();
  const router = useRouter();

  useEffect(() => {
    async function redirect() {
      if (session) {
        router.push('/notes');
      }
    }

    redirect();
  }, [session]);

  if (!session)
    return (
      <Box m={3}>
        {error && <p>{error.message}</p>}
        {isLoading ? <h1>Loading...</h1> : <h1>Inicia Sesion!</h1>}
        <Auth
          supabaseClient={supabaseClient}
          appearance={{ theme: ThemeSupa }}
          theme="light"
        />
      </Box>
    );

  return (
    <>
      <Link href="/create-notes">GO TO FORM</Link>
    </>
  );
};

export default LoginPage;
