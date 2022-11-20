import { Box, Paper, Stack, Typography } from '@mui/material';
import { Database } from '../../lib/database.types';
import { humanizeDate } from '../../src/utils';

export default function DetailNote({
  data
}: {
  data: Database['public']['Tables']['notes']['Row'];
}): JSX.Element {
  return (
    <Paper
      sx={{
        m: 2
      }}
      elevation={2}
    >
      <Stack spacing={1} p={2}>
        <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
          Informacion
        </Typography>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Estado
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {data?.general_state ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Creado
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {humanizeDate(data?.created_at) ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Estado anémico
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.anemic_state ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Deposición
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.deposition ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Diéresis
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {data?.dieresis ?? ''}
        </Typography>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Emesis
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.emesis ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Caidas
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.falls ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Alimentacion
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.food ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Medicinas
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.medicines ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Observaciones
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.news ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Paciente
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.patient ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Protesis
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.prosthesis ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Sueño
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.sleep ?? ''}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
            Deambulación
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            {data?.wandering ?? ''}
          </Typography>
        </Box>
      </Stack>
    </Paper>
  );
}
