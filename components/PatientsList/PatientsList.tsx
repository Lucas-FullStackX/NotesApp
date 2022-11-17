import { Stack, Fab } from '@mui/material';
import { Database } from '../../lib/database.types';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import Card, { TYPE_CARD } from '../Card/BaseCard';

type PatientsListProps = {
  patients: Database['public']['Tables']['patient']['Row'][];
};

export default function PatientsList({ patients }: PatientsListProps) {
  const router = useRouter();
  return (
    <Stack spacing={1} m={1} sx={{ position: 'relative' }}>
      {patients &&
        patients.map(patient => (
          <Card type={TYPE_CARD.PATIENT} key={patient.id} info={patient} />
        ))}
      <Fab
        sx={{
          position: 'fixed',
          right: '15px',
          bottom: '15px',
          borderRadius: '15px'
        }}
        color="primary"
        aria-label="add"
        onClick={() => {
          router.push('/create-patient');
        }}
      >
        <AddIcon fontSize="large" />
      </Fab>
    </Stack>
  );
}
