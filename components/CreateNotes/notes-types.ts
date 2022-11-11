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
    general_state: yup.string().required(),
    anemic_state: yup.string().required(),
    skin: yup.string(),
    emesis: yup.boolean(),
    prosthesis: yup.boolean(),
    medicines: yup.string(),
    wandering: yup.string(),
    falls: yup.string(),
    deposition: yup.string(),
    dieresis: yup.string(),
    food: yup.boolean(),
    news: yup.string(),
    sleep: yup.string(),
    assistant: yup.string()
  })
  .required();
