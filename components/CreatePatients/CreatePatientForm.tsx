// import { useState } from 'react';
// import dayjs, { Dayjs } from 'dayjs';
// import es from 'dayjs/locale/es';
// import { MobileDatePicker } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, FormControl, Box, Button, Typography } from '@mui/material';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useCreatePatientForm } from '../../hooks/useCreatePatientForm';
import { useInsertPatient } from '../../hooks/useInsertPatient';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface CreatePatientForm {
  onSubmit?: () => void;
  onCancel?: () => void;
}

export default function CreatePatientForm({
  onSubmit,
  onCancel
}: CreatePatientForm): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit, formState } = useCreatePatientForm();
  const [insertPatient, { loading }] = useInsertPatient({
    onComplete: () =>
      onSubmit
        ? onSubmit()
        : () => {
            router.push('/notes');
          }
  });
  // const [value, setValue] = useState<Dayjs | null>(dayjs());
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        insertPatient(data);
      })}
    >
      <Typography variant="h5" sx={{ gridColumn: 'span 2' }}>
        Crear Paciente
      </Typography>
      <Box sx={{ gridColumn: 'span 2' }}>
        <Image
          src="/img/patient.png"
          alt="login"
          width={500}
          height={300}
          objectFit="contain"
        />
      </Box>
      <Box display="grid" flexDirection="column" gap={2}>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Nombre" {...register('name')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField
            type="number"
            helperText={formState.errors?.name?.message}
            error={Boolean(formState.errors?.name?.message)}
            label="Edad"
            {...register('age')}
            InputProps={{
              inputMode: 'numeric'
            }}
          />
        </FormControl>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs} locale={es}>
          <MobileDatePicker
            label="Fecha de Nacimiento"
            value={value}
            onChange={newValue => {
              setValue(newValue);
            }}
            renderInput={params => (
              <TextField fullWidth sx={{ gridColumn: 'span 2' }} {...params} />
            )}
          />
        </LocalizationProvider> */}
      </Box>
      <Box
        display="grid"
        justifyContent="space-between"
        pt={3}
        sx={{
          width: '100%',
          gridTemplateColumns: '47% 47%',
          backgroundColor: 'white'
        }}
      >
        <Button
          variant="outlined"
          onClick={() => {
            onCancel ? onCancel() : router.push('/patients');
          }}
        >
          Cancelar
        </Button>
        <LoadingButton type="submit" variant="contained" loading={loading}>
          CREAR
        </LoadingButton>
      </Box>
    </Box>
  );
}
