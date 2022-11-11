import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NoteFormType, NOTE_FORM_VALIDATOR_SCHEMA } from '../notes-types';

export function useCreateNote() {
  const data = useForm<NoteFormType>({
    resolver: yupResolver(NOTE_FORM_VALIDATOR_SCHEMA, {})
  });

  return data;
}
