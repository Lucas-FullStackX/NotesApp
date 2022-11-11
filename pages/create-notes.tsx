import React, { useEffect, useState } from 'react';
import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Database } from '../lib/database.types';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import CreateForm from '../components/CreateNotes/CreateForm';
import { Box } from '@mui/system';

const LoginPage: NextPage = () => {
  const { isLoading, session, error } = useSessionContext();
  const supabaseClient = useSupabaseClient<Database>();

  const [data, setData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const { data } = await supabaseClient.from('users').select('*').single();
      setData(data);
    }

    loadData();
  }, [supabaseClient]);
  console.log(session);
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
    <Box m={10}>
      <CreateForm />
    </Box>
  );
};

export default LoginPage;
