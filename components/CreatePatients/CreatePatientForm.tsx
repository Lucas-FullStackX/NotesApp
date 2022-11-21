import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import es from 'dayjs/locale/es';
import { MobileDatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField, FormControl, Box, Button, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useCreatePatientForm } from '../../hooks/useCreatePatientForm';
import { useInsertPatient } from '../../hooks/useInsertPatient';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function CreatePatientForm(): JSX.Element {
  const router = useRouter();
  const { register, handleSubmit } = useCreatePatientForm();
  const [insertPatient, { data: insertNoteData, loading }] = useInsertPatient({
    onComplete: () => router.push('/notes')
  });
  const [value, setValue] = useState<Dayjs | null>(dayjs());
  console.log(insertNoteData);
  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        insertPatient({ ...data, date_of_birth: dayjs(value).toString() });
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
        <LocalizationProvider dateAdapter={AdapterDayjs} locale={es}>
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
        </LocalizationProvider>
      </Box>
      <Box
        display="grid"
        justifyContent="space-between"
        p={3}
        sx={{
          width: '100%',
          gridTemplateColumns: '47% 47%',
          position: 'absolute',
          bottom: '0',
          left: '0'
        }}
      >
        <Button variant="outlined">Cancelar</Button>
        <LoadingButton type="submit" variant="contained" loading={loading}>
          CREAR
        </LoadingButton>
      </Box>
    </Box>
  );
}
