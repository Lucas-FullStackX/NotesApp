import * as yup from 'yup';
export const WANDERING_TYPES = [
  'Funcional',
  'Caminador',
  'Baston',
  'Silla de ruedas',
  'Postrado'
];
export const STATES = ['Despierto', 'Dormido'];
export const ANEMIC_STATUS = ['Tranquilo', 'Agresivo'];
export const SKIN_TYPES = ['Integra', 'Heridas', 'Hongos', 'Quemaduras'];
export const DEPOSITION_TYPES = ['Normal', 'Blanda'];
export const DIURESIS_TYPES = ['Pañal', 'Sonda', 'Baño'];
export const MEDICATIONS_TYPES = ['Mañana', 'Tarde', 'Noche'];
export const SLEEP_TYPES = ['24h', 'Dia', 'Noche'];

export const NOTE_FORM_VALIDATOR_SCHEMA = yup
  .object({
    patient: yup.string().required('El Paciente es obligatorio'),
    general_state: yup.string().required('El Estado General es obligatorio'),
    anemic_state: yup.string().required('El Estado Anemico es obligatorio'),
    skin: yup.string(),
    emesis: yup.boolean(),
    prosthesis: yup.boolean(),
    medicines: yup.string(),
    wandering: yup.string(),
    fallBool: yup.boolean(),
    falls: yup.string(),
    depositionBool: yup.boolean(),
    deposition: yup.string(),
    dieresisBool: yup.boolean(),
    dieresis: yup.string(),
    food: yup.boolean(),
    news: yup.string(),
    sleep: yup.string(),
    assistant: yup.mixed(),
    sanguine_pressure: yup.string().required('Requerido'),
    cardiac_frequency: yup.number().nullable().default(0),
    saturation: yup.number().nullable().default(0),
    temperature: yup.number().nullable().default(0),
    SNews: yup.string().nullable()
  })
  .required();
export type NoteFormType = typeof NOTE_FORM_VALIDATOR_SCHEMA['__outputType'];

export type AnemicStatusType = 'Tranquilo' | 'Agresivo';
