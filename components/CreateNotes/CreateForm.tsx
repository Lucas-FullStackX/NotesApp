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
  Typography
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
import { useContext } from 'react';
import { Context } from '../../src/store/Context';

export default function CreateForm(): JSX.Element {
  const router = useRouter();
  const { success } = useContext(Context);
  const { register, handleSubmit, watch, setValue } = useCreateNoteForm();
  const { loading: loadingPatients, data: Patients } = useFetchPatients();
  const [insertNote, { data: insertNoteData }] = useInsertNote({
    onComplete: () => {
      router.push('/dashboard');
      success('Nota Creada');
    }
  });
  console.log(insertNoteData);
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
      <Typography variant="h5" sx={{ gridColumn: 'span 2' }}>
        Crear Paciente
      </Typography>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
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
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Estado General</InputLabel>
        <Select label="Estado General" {...register('general_state')}>
          {STATES.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <InputLabel>Estado Animico</InputLabel>
        <Select label="Estado Animico" {...register('anemic_state')}>
          {ANEMIC_STATUS.map(state => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
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
      <Button variant="outlined" href="dashboard">
        Cancelar
      </Button>
      <Button type="submit" variant="contained">
        CREAR
      </Button>
    </Box>
  );
}
