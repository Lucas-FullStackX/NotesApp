import type { NextPage } from 'next';
import { Box } from '@mui/material';
import CreatePatientForm from '../../components/CreatePatients/CreatePatientForm';
import { useSessionContext } from '@supabase/auth-helpers-react';
import NavBar from '../../components/SideBar/NavBar';

const CreatePatientPage: NextPage = () => {
  const { session } = useSessionContext();

  if (!session) return <div>Loading</div>;

  return (
    <NavBar>
      <Box m={3}>
        <CreatePatientForm />
      </Box>
    </NavBar>
  );
};

export default CreatePatientPage;
