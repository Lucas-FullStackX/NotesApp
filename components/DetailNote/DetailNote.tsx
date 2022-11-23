import dynamic from 'next/dynamic';
import {
  Box,
  Paper,
  Stack,
  Typography,
  Grid,
  Fab,
  Skeleton
} from '@mui/material';
import { NoteDetailType } from '../../hooks/useDetailNote';
import { humanizeDate } from '../../src/utils';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

const DownloadPDF = dynamic(() => import('../PDF/DownloadPDF'), { ssr: false });

// import { getImageURL } from '../../src/utils/index';

export default function DetailNote({
  data,
  loading
}: {
  data: NoteDetailType;
  loading: boolean;
}): JSX.Element {
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
          sx={{ margin: '12px', height: '70vh' }}
        ></Skeleton>
      </Box>
    );
  }
  return (
    <Box>
      {data?.id && (
        <DownloadPDF data={data}>
          <Fab
            sx={{
              position: 'fixed',
              right: '15px',
              bottom: '15px',
              borderRadius: '15px'
            }}
            color="primary"
            aria-label="add"
          >
            <SimCardDownloadIcon fontSize="large" />
          </Fab>
        </DownloadPDF>
      )}

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
              Estado General
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.general_state ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Fecha
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
              {data?.deposition?.length > 0 ? 'SI' : 'NO'}
              <br />
              {data?.deposition ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Diéresis
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary">
            {data?.dieresis?.length > 0 ? 'SI' : 'NO'}
            <br />
            {data?.dieresis ?? ''}
          </Typography>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Emesis
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.emesis ? 'SI' : 'NO'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Caidas
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.falls?.length > 0 ? 'SI' : 'NO'}
              <br />
              {data?.falls ?? ''}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Alimentacion
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data?.food ? 'SI' : 'NO'}
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
              {data?.prosthesis ? 'SI' : 'NO'}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="div" fontWeight={400}>
              Patron de Sueño
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
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={12}>
              <Typography variant="h6" component="div" fontWeight={700}>
                Signos Vitales
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" fontWeight={400}>
                Frecuencia cardiaca
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {Array.isArray(data?.signs)
                  ? data?.signs[0].cardiac_frequency
                  : data?.signs?.cardiac_frequency ?? ''}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" fontWeight={400}>
                Presion sanguinea
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {Array.isArray(data?.signs)
                  ? data?.signs[0].sanguine_pressure
                  : data?.signs?.sanguine_pressure ?? ''}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" fontWeight={400}>
                Saturacion
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {Array.isArray(data?.signs)
                  ? data?.signs[0].saturation
                  : data?.signs?.saturation ?? ''}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="div" fontWeight={400}>
                Temperatura
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {Array.isArray(data?.signs)
                  ? data?.signs[0].temperature + '°'
                  : data?.signs?.temperature + '°' ?? ''}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" component="div" fontWeight={400}>
                Observaciones
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {Array.isArray(data?.signs)
                  ? data?.signs[0].news
                  : data?.signs?.news ?? ''}
              </Typography>
            </Grid>
          </Grid>
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
        Firma del asistente
      </Typography>
      {data?.assistant && (
        <Box sx={{ paddingLeft: '15px' }}>
          {data?.assistant ? <img src={data?.assistant} alt="asistente" /> : ''}
        </Box>
      )}
    </Box>
  );
}
