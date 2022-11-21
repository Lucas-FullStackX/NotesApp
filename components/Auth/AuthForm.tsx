import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from '@mui/material';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../../lib/database.types';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { AuthFormType, useAuthForm } from './hooks/useAuthForm';
import { AuthError } from '@supabase/supabase-js';

enum AuthType {
  SIGN_IN,
  SIGN_UP
}
export default function AuthForm() {
  const supabaseClient = useSupabaseClient<Database>();
  const { register, handleSubmit, formState } = useAuthForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
  const [options, setOptions] = useState<{
    type: AuthType;
    showPassword: boolean;
  }>({
    type: AuthType.SIGN_IN,
    showPassword: false
  });
  const handleAuth = async (data: AuthFormType) => {
    if (options.type === AuthType.SIGN_IN) {
      setLoading(true);
      const { error: signInError } =
        await supabaseClient.auth.signInWithPassword({
          email: data.email,
          password: data.password
        });
      if (signInError) {
        setError(signInError);
      }
    } else {
      setLoading(true);
      const { error: signUpError } = await supabaseClient.auth.signUp({
        email: data.email,
        password: data.password
      });
      if (signUpError) {
        setError(signUpError);
      }
    }
    setLoading(false);
  };
  return (
    <Box
      component="form"
      display="grid"
      flexDirection="column"
      gap={2}
      onSubmit={handleSubmit(data => {
        handleAuth(data);
      })}
    >
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        sx={{ gridColumn: 'span 2' }}
      >
        {options.type === AuthType.SIGN_IN ? 'Iniciar Sesion' : 'Registrate'}
      </Typography>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <TextField
          label="E-mail"
          helperText={formState.errors?.email?.message}
          error={Boolean(formState.errors?.email?.message)}
          {...register('email')}
        />
      </FormControl>
      <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
        <TextField
          label="Contraseña"
          type={options.showPassword ? 'text' : 'password'}
          helperText={formState.errors?.password?.message}
          error={Boolean(formState.errors?.password?.message)}
          {...register('password')}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setOptions({
                      ...options,
                      showPassword: !options.showPassword
                    })
                  }
                  edge="end"
                >
                  {options.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        {error && (
          <Typography color="error" textAlign="center">
            Datos incorrectos
          </Typography>
        )}
      </FormControl>
      <Button
        variant="outlined"
        onClick={() =>
          setOptions({
            ...options,
            type:
              options.type === AuthType.SIGN_IN
                ? AuthType.SIGN_UP
                : AuthType.SIGN_IN
          })
        }
      >
        {options.type === AuthType.SIGN_UP ? 'Iniciar Sesion' : 'Registrarse'}
      </Button>
      <LoadingButton type="submit" variant="contained" loading={loading}>
        {options.type === AuthType.SIGN_UP ? 'Registrarse' : 'Iniciar Sesion'}
      </LoadingButton>
    </Box>
  );
}
