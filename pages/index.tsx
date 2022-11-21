import { useEffect } from 'react';
import { useSessionContext } from '@supabase/auth-helpers-react';
import type { NextPage } from 'next';
import CircularProgress from '@mui/material/CircularProgress';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import AuthForm from '../components/Auth/AuthForm';
import Image from 'next/image';

const LoginPage: NextPage = () => {
  const { session } = useSessionContext();
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
      <Box m={3}>
        <Image
          src="/img/login.png"
          alt="login"
          width={500}
          height={300}
          objectFit="contain"
        />
        <AuthForm />
      </Box>
    );

  return <CircularProgress />;
};

export default LoginPage;
