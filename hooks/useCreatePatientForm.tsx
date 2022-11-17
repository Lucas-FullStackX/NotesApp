import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  PatientFormType,
  PATIENT_FORM_VALIDATOR_SCHEMA
} from '../components/CreatePatients/notes-types';

export function useCreatePatientForm() {
  const data = useForm<PatientFormType>({
    resolver: yupResolver(PATIENT_FORM_VALIDATOR_SCHEMA, {})
  });

  return data;
}
