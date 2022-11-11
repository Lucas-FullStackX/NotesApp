import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NOTE_FORM_VALIDATOR_SCHEMA } from '../notes-types';

export function useCreateNote() {
  const data = useForm<{
    name: string;
    email: string;
    phoneNumber: string;
    willLogin: boolean;
    customerCustomerEmailRelation: {
      email: string;
    }[];
    customerAddressRelation: {
      id?: string;
      customer?: string;
      contactName: string;
      contactPhone: string;
      city: string;
      zipCode: string;
      state: string;
      name: string;
      street_address: string;
    }[];
  }>({
    resolver: yupResolver(NOTE_FORM_VALIDATOR_SCHEMA, {})
  });

  return data;
}
