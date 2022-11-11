import React from 'react';
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
  InputAdornment
} from '@mui/material';
import { useForm } from 'react-hook-form';
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

export default function CreateForm(): JSX.Element {
  const { register, handleSubmit } = useForm();
  return (
    <Box>
      <form
        onSubmit={handleSubmit(data => {
          console.log(data);
        })}
      >
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Paciente" {...register('user')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="edad" {...register('password')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Estado General</InputLabel>
          <Select label="Estado General" {...register('status')}>
            {STATES.map(state => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Estado Animico</InputLabel>
          <Select label="Estado General" {...register('status')}>
            {ANEMIC_STATUS.map(state => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Piel</InputLabel>
          <Select label="Piel" {...register('status')}>
            {SKIN_TYPES.map(skin => (
              <MenuItem key={skin} value={skin}>
                {skin}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Deambulacion</InputLabel>
          <Select label="Deambulacion" {...register('status')}>
            {WANDERING_TYPES.map(wandering => (
              <MenuItem key={wandering} value={wandering}>
                {wandering}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            control={<Checkbox {...register('notification')} />}
            label="Caidas"
          />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Observaciones" {...register('password')} />
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            control={<Checkbox {...register('notification')} />}
            label="Deposicion"
          />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Deposicion</InputLabel>
          <Select label="Deambulacion" {...register('status')}>
            {DEPOSITION_TYPES.map(deposition => (
              <MenuItem key={deposition} value={deposition}>
                {deposition}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <FormControlLabel
            control={<Checkbox {...register('notification')} />}
            label="Diuresis"
          />

          <Select label="Deambulacion" {...register('status')}>
            {DIURESIS_TYPES.map(diuresis => (
              <MenuItem key={diuresis} value={diuresis}>
                {diuresis}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            control={<Checkbox {...register('notification')} />}
            label="Emesis"
          />
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            control={<Checkbox {...register('notification')} />}
            label="Alimentacion"
          />
        </FormControl>
        <FormControl fullWidth>
          <FormControlLabel
            control={<Checkbox {...register('notification')} />}
            label="Protesis"
          />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Novedades" {...register('password')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Medicamentos</InputLabel>
          <Select label="Deambulacion" {...register('status')}>
            {MEDICATIONS_TYPES.map(medication => (
              <MenuItem key={medication} value={medication}>
                {medication}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <InputLabel>Patron de Sueño</InputLabel>
          <Select label="Deambulacion" {...register('status')}>
            {SLEEP_TYPES.map(sleep => (
              <MenuItem key={sleep} value={sleep}>
                {sleep}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Tension Arterial" {...register('password')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Frecuencia Cardiaca" {...register('password')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Saturacion" {...register('password')} />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField
            label="Temperatura"
            {...register('password')}
            InputProps={{
              endAdornment: <InputAdornment position="end">ºC</InputAdornment>
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Novedades" {...register('password')} />
        </FormControl>
        <Button type="submit">SEND</Button>
      </form>
    </Box>
  );
}
