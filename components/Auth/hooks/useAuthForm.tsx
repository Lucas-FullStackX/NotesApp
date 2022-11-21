import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const AUTH_FORM_VALIDATOR_SCHEMA = yup
  .object({
    email: yup
      .string()
      .email('No tiene el formato requerido')
      .required('El email es obligatorio'),
    password: yup.string().required('El la contraseña es obligatoria')
  })
  .required();
export type AuthFormType = typeof AUTH_FORM_VALIDATOR_SCHEMA['__outputType'];

export function useAuthForm() {
  const data = useForm<AuthFormType>({
    resolver: yupResolver(AUTH_FORM_VALIDATOR_SCHEMA, {})
  });

  return data;
}
