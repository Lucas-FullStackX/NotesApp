import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  NoteFormType,
  NOTE_FORM_VALIDATOR_SCHEMA
} from '../components/CreateNotes/notes-types';

export function useCreateNoteForm() {
  const data = useForm<NoteFormType>({
    resolver: yupResolver(NOTE_FORM_VALIDATOR_SCHEMA, {}),
    defaultValues: {
      saturation: null,
      cardiac_frequency: null,
      temperature: null
    }
  });

  return data;
}
