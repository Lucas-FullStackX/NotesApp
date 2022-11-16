import { TextField, FormControl, Box, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';

export function Auth() {
  const supabaseClient = useSupabaseClient<Database>();
  const { register, handleSubmit } = useForm();
  return (
    <Box>
      <form
        onSubmit={handleSubmit(async data => {
          const { error } = await supabaseClient.auth.signInWithPassword({
            email: data.email,
            password: data.password
          });
          console.log(error);
        })}
      >
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField
            label="Email"
            multiline
            minRows={3}
            {...register('email')}
          />
        </FormControl>
        <FormControl fullWidth sx={{ gridColumn: 'span 2' }}>
          <TextField label="Password" multiline {...register('password')} />
        </FormControl>
        <Button type="submit">SEND</Button>
      </form>
    </Box>
  );
}
