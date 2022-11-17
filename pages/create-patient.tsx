import type { NextPage } from 'next';
import { Box } from '@mui/system';
import CreatePatientForm from '../components/CreatePatients/CreatePatientForm';
import { useSessionContext } from '@supabase/auth-helpers-react';

const CreatePatientPage: NextPage = () => {
  const { session } = useSessionContext();

  if (!session) return <div>Loading</div>;

  return (
    <Box m={3}>
      <CreatePatientForm />
    </Box>
  );
};

export default CreatePatientPage;
