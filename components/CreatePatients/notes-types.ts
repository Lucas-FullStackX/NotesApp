import * as yup from 'yup';
export const PATIENT_FORM_VALIDATOR_SCHEMA = yup
  .object({
    name: yup.string().required(),
    date_of_birth: yup.string()
  })
  .required();
export type PatientFormType =
  typeof PATIENT_FORM_VALIDATOR_SCHEMA['__outputType'];
