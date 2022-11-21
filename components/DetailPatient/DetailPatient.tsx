import { Box, Paper, Stack, Typography } from '@mui/material';
import { Database } from '../../lib/database.types';

export default function DetailPatient({
  data
}: {
  data: Database['public']['Tables']['patient']['Row'][];
}): JSX.Element {
  console.log(data);
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
        {data[0]?.name ?? ''}
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
              {data[0]?.age ?? ''}
            </Typography>
            <Typography variant="h6" component="div" fontWeight={400}>
              Notas
            </Typography>
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
}
