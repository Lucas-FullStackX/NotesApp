import {
  useSessionContext,
  useSupabaseClient
} from '@supabase/auth-helpers-react';
import type { NextPage } from 'next';
import { Database } from '../lib/database.types';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';
import CreateForm from '../components/CreateNotes/CreateForm';
import { Box } from '@mui/system';
import NavBar from '../components/SideBar/NavBar';

const CreateNotes: NextPage = () => {
  const { isLoading, session, error } = useSessionContext();
  const supabaseClient = useSupabaseClient<Database>();

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
    <NavBar>
      <Box m={3}>
        <CreateForm />
      </Box>
    </NavBar>
  );
};

export default CreateNotes;
