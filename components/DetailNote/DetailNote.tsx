import { Database } from '../../lib/database.types';
import { humanizeDate } from '../../src/utils';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function DetailNote({
  data
}: {
  data: Database['public']['Tables']['notes']['Row'];
}): JSX.Element {
  const card = (
    <CardContent
      sx={{
        backgroundColor: '#ffffff',
        maxWidth: 345,
        border: '2px solid #f8f9fa',
        borderRadius: '6px',
        margin: '10px 0 10px 10px'
      }}
    >
      <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
        Informacion
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Estado
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.general_state ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Creado
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {humanizeDate(data?.created_at) ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Estado anémico{' '}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.anemic_state ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Deposición
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.deposition ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Diéresis
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.dieresis ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Vómito
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.emesis ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Caidas
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.falls ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Comida
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.food ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Medicinas
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.medicines ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Noticias
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.news ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Paciente
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.patient ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Protesis
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.prosthesis ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Signos
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.signs ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Sueño
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.sleep ?? ''}
      </Typography>
      <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
        Deambulación
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {data?.wandering ?? ''}
      </Typography>
    </CardContent>
  );
  return (
    <Box sx={{ minWidth: 275, backgroundColor: 'red' }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
