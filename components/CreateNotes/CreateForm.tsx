import {
  TextField,
  FormControl,
  Box,
  Button,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Autocomplete,
  CircularProgress,
  Typography,
  InputAdornment,
  FormHelperText
} from '@mui/material';
import {
  SKIN_TYPES,
  STATES,
  WANDERING_TYPES,
  DEPOSITION_TYPES,
  DIURESIS_TYPES,
  MEDICATIONS_TYPES,
  SLEEP_TYPES,
  ANEMIC_STATUS
} from './notes-types';
import { useCreateNoteForm } from '../../hooks/useCreateNoteForm';
import { useInsertNote } from '../../hooks/useInsertNote';
import { formatCreateNoteData } from './notes-utils';
import { useFetchPatients } from '../../hooks/useFetchPatients';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Context } from '../../src/store/Context';
import { SignatureMenu } from './components/SignatureModal';
// import AddIcon from '@mui/icons-material/Add';
import Image from 'next/image';
import { CreatePatientModal } from './components/PatientModal';
import { PatternFormat } from 'react-number-format';
import { Controller } from 'react-hook-form';

/* const AddButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: 'white',
  padding: theme.spacing(1),
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark
  }
})); */
export default function CreateForm(): JSX.Element {
  const router = useRouter();
  const { success } = useContext(Context);
  const [open, setOpen] = useState<{ signature: boolean; patient: boolean }>({
    signature: false,
    patient: false
  });
  const [image, setImage] = useState<string>('');
  const { control, register, handleSubmit, watch, setValue, formState } =
    useCreateNoteForm();
  const {
    loading: loadingPatients,
    data: Patients,
    refresh
  } = useFetchPatients();
  const [insertNote] = useInsertNote({
    onComplete: () => {
      router.push('/notes');
      success('Nota Creada');
    }
  });
  return (
    <Box
      component="form"
      display="grid"
      flexDirection="column"
      gap={2}
      autoComplete="off"
      onSubmit={handleSubmit(data => {
        const newData = formatCreateNoteData(data);
        insertNote(newData);
      })}
    >
      <CreatePatientModal
        open={open.patient}
        close={() => setOpen({ ...open, patient: false })}
        onSubmit={refresh}
      />
      <SignatureMenu
        open={open.signature}
        close={() => setOpen({ ...open, signature: false })}
        onChange={(assistant, base) => {
          setImage(base);
          setValue('assistant', assistant);
        }}
      />
      <Typography variant="h5" sx={{ gridColumn: 'span 2' }}>
        Crear Nota
      </Typography>
      <Box sx={{ gridColumn: 'span 2' }}>
        <Image
          src="/img/note.png"
          alt="login"
          width={500}
          height={300}
          objectFit="contain"
        />
      </Box>
      <FormControl
        fullWidth
        sx={{
          gridColumn: 'span 2'
          /*  display: 'grid',
          gridTemplateColumns: '80% 16%',
          justifyContent: 'space-between' */
        }}
      >
        <Autocomplete
          isOptionEqualToValue={(option, value) => option.id === value.id}
          getOptionLabel={option =>
            typeof option === 'string' ? option : option.name
          }
          options={Patients}
          filterOptions={(options, { inputValue }) =>
            options.filter(
              item =>
                item.name.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
            )
          }
          onChange={(_event, value) => {
            setValue(
              'patient',
              `${typeof value === 'string' ? value : value.id}`
            );
          }}
          renderInput={params => (
            <TextField
              {...params}
              label="Paciente"
              helperText={formState.errors?.patient?.message}
              error={Boolean(formState.errors?.patient?.message)}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loadingPatients ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                )
              }}
            />
          )}
        />
        {/*  <AddButton
          color="primary"
          onClick={() => setOpen({ ...open, patient: true })}
        >
          <AddIcon fontSize="large" />
        </AddButton> */}
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Estado General</InputLabel>
        <Select
          label="Estado General"
          {...register('general_state')}
          error={Boolean(formState.errors?.general_state?.message)}
        >
          {STATES.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>
          {formState.errors?.general_state?.message}
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Estado Animico</InputLabel>
        <Select
          label="Estado Animico"
          {...register('anemic_state')}
          error={Boolean(formState.errors?.anemic_state?.message)}
        >
          {ANEMIC_STATUS.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText error>
          {formState.errors?.anemic_state?.message}
        </FormHelperText>
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Piel</InputLabel>
        <Select label="Piel" {...register('skin')}>
          {SKIN_TYPES.map(skin => (
            <MenuItem key={skin} value={skin}>
              {skin}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Deambulacion</InputLabel>
        <Select label="Deambulacion" {...register('wandering')}>
          {WANDERING_TYPES.map(wandering => (
            <MenuItem key={wandering} value={wandering}>
              {wandering}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox {...register('fallBool')} />}
          label="Caidas"
        />
      </FormControl>
      {watch('fallBool') && (
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Observaciones" {...register('falls')} />
        </FormControl>
      )}
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox {...register('depositionBool')} />}
          label="Deposicion"
        />
      </FormControl>
      {watch('depositionBool') && (
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Deposicion</InputLabel>
          <Select label="Deposicion" {...register('deposition')}>
            {DEPOSITION_TYPES.map(deposition => (
              <MenuItem key={deposition} value={deposition}>
                {deposition}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <FormControl>
        <FormControlLabel
          control={<Checkbox {...register('dieresisBool')} />}
          label="Diuresis"
        />
      </FormControl>
      {watch('dieresisBool') && (
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Diuresis</InputLabel>
          <Select label="Diuresis" {...register('dieresis')}>
            {DIURESIS_TYPES.map(diuresis => (
              <MenuItem key={diuresis} value={diuresis}>
                {diuresis}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox {...register('emesis')} />}
          label="Emesis"
        />
      </FormControl>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox {...register('food')} />}
          label="Alimentacion"
        />
      </FormControl>
      <FormControl fullWidth>
        <FormControlLabel
          control={<Checkbox {...register('prosthesis')} />}
          label="Protesis"
        />
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <TextField label="Novedades" {...register('news')} />
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Medicamentos</InputLabel>
        <Select label="Medicamentos" {...register('medicines')}>
          {MEDICATIONS_TYPES.map(medication => (
            <MenuItem key={medication} value={medication}>
              {medication}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Patron de Sueño</InputLabel>
        <Select label="Patron de Sueño" {...register('sleep')}>
          {SLEEP_TYPES.map(sleep => (
            <MenuItem key={sleep} value={sleep}>
              {sleep}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="h5" sx={{ gridColumn: 'span 2' }}>
        Asistente
      </Typography>
      <Button
        variant="text"
        sx={{ gridColumn: 'span 2' }}
        onClick={() => setOpen({ ...open, signature: true })}
      >
        {image.length ? 'Editar' : 'Firma'}
      </Button>
      {image.length > 0 && (
        <Box
          sx={{
            gridColumn: 'span 2',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img src={image} alt="assistant" />
        </Box>
      )}
      <Typography variant="h5" sx={{ gridColumn: 'span 2' }}>
        Signos Vitales
      </Typography>
      <FormControl fullWidth>
        <Controller
          control={control}
          name="sanguine_pressure"
          render={({ field: { onChange, name, value } }) => (
            <PatternFormat
              label="Tension Arterial"
              type="tel"
              helperText={formState.errors?.sanguine_pressure?.message}
              error={Boolean(formState.errors?.sanguine_pressure?.message)}
              customInput={TextField}
              format={
                String(value).replace(/\s+/g, '').length > 5
                  ? '###/###'
                  : '##/####'
              }
              name={name}
              value={value}
              onChange={onChange}
            />
          )}
        />
      </FormControl>

      <FormControl fullWidth>
        <TextField
          type="number"
          label="Frecuencia Cardiaca"
          {...register('cardiac_frequency')}
          InputProps={{
            inputMode: 'numeric'
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Saturacion"
          type="number"
          {...register('saturation')}
          InputProps={{
            inputMode: 'numeric'
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          label="Temperatura"
          type="number"
          {...register('temperature')}
          InputProps={{
            inputMode: 'numeric',
            endAdornment: <InputAdornment position="end">°C</InputAdornment>
          }}
        />
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <TextField label="Novedades" {...register('SNews')} />
      </FormControl>
      <Button variant="outlined" href="notes">
        Cancelar
      </Button>
      <Button type="submit" variant="contained">
        CREAR
      </Button>
    </Box>
  );
}
