import { Database } from '../../lib/database.types';
import { NoteFormType } from './notes-types';

export const formatCreateNoteData = (
  data: NoteFormType
): Database['public']['Tables']['notes']['Insert'] => {
  const dataFormatted: Database['public']['Tables']['notes']['Insert'] = {
    general_state: data.general_state,
    anemic_state: data.anemic_state,
    deposition: data.depositionBool ? data.deposition : null,
    falls: data.fallBool ? data.falls : null,
    dieresis: data.dieresis ? data.dieresis : null,
    emesis: data.emesis,
    wandering: data.wandering,
    sleep: data.sleep,
    food: data.food,
    prosthesis: data.prosthesis,
    medicines: data.medicines,
    skin: data.skin,
    news: data.news
  };
  return dataFormatted;
};
