import { Box, Paper, Stack, Typography, Skeleton } from '@mui/material';
import { useDetailPatientResponse } from '../../hooks/useDetailPatient';
import Card, { TYPE_CARD } from '../Card/BaseCard';

export default function DetailPatient({
  data,
  loading
}: {
  data: useDetailPatientResponse['data'];
  loading: boolean;
}): JSX.Element {
  console.log(data);
  if (loading) {
    return (
      <Box
        m={2}
        sx={{
          width: '90vw'
        }}
      >
        <Skeleton
          width="150px"
          sx={{ margin: '12px', height: '50px' }}
        ></Skeleton>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ margin: '12px', height: '20vh' }}
        ></Skeleton>
      </Box>
    );
  }
  return (
    <Box>
      <Typography
        variant="h4"
        component="div"
        fontWeight="bold"
        sx={{
          m: 2
        }}
      >
        {data?.name ?? ''}
      </Typography>
      <Paper
        sx={{
          m: 2
        }}
        elevation={2}
      >
        <Stack spacing={1} p={2}>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Edad
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.age ?? ''}
            </Typography>
            <Typography variant="h6" component="div" fontWeight={400}>
              EPS
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.eps ?? ''}
            </Typography>
          </Box>
        </Stack>
      </Paper>
      <Typography
        variant="h4"
        component="div"
        fontWeight="bold"
        sx={{
          ml: 2
        }}
      >
        Notas
      </Typography>
      <Stack spacing={1} p={2}>
        {data?.notes &&
          Array.isArray(data.notes) &&
          data.notes.map(note => (
            <Card type={TYPE_CARD.PATIENT_NOTE} info={note} key={note.id} />
          ))}
      </Stack>
    </Box>
  );
}
