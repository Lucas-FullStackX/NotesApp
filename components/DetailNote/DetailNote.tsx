import { Box, Paper, Stack, Typography } from '@mui/material';
import { NoteDetailType } from '../../hooks/useDetailNote';
import { humanizeDate } from '../../src/utils';
// import { getImageURL } from '../../src/utils/index';

export default function DetailNote({
  data
}: {
  data: NoteDetailType;
}): JSX.Element {
  console.log(data);
  return (
    <Box>
      <Typography
        variant="h5"
        component="div"
        fontWeight="bold"
        sx={{
          m: 2
        }}
      >
        {Array.isArray(data?.patient)
          ? data?.patient[0].name
          : data?.patient?.name ?? 'Sin Paciente'}
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
              Estado
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.general_state ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Creado
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {humanizeDate(data?.created_at) ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Estado anémico
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.anemic_state ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Deposición
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.deposition ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Diéresis
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {data?.dieresis ?? ''}
          </Typography>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Emesis
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.emesis ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Caidas
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.falls ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Alimentacion
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.food ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Medicinas
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.medicines ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Observaciones
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.news ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Protesis
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.prosthesis ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Sueño
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.sleep ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Deambulación
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.wandering ?? ''}
            </Typography>
          </Box>
        </Stack>
      </Paper>
      <Paper
        sx={{
          m: 2,
          p: 2
        }}
        elevation={2}
      >
        <Box>
          <Typography variant="h6" component="div" fontWeight={700}>
            Signos Vitales
          </Typography>
          <Typography variant="body1" color="text.secondary">
            a
          </Typography>
        </Box>
      </Paper>
      <Typography
        variant="h6"
        component="div"
        fontWeight={700}
        sx={{
          m: 2
        }}
      >
        Firma del paciente:
      </Typography>
      {data?.assistant && (
        <Box>
          <img src={data?.assistant} alt="asssistente" />
        </Box>
      )}
    </Box>
  );
}
