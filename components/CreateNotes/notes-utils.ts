import { Database } from '../../lib/database.types';
import { NoteFormType } from './notes-types';

export type InsertNoteType = {
  vital_signs: Database['public']['Tables']['vital_signs']['Insert'];
  note: Database['public']['Tables']['notes']['Insert'];
};
export const formatCreateNoteData = (data: NoteFormType): InsertNoteType => {
  const dataFormatted: InsertNoteType = {
    note: {
      assistant: data.assistant,
      patient: Number(data.patient),
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
    },
    vital_signs: {
      cardiac_frequency: data.cardiac_frequency,
      sanguine_pressure: data.sanguine_pressure,
      saturation: data.saturation,
      temperature: data.temperature,
      news: data.SNews
    }
  };
  return dataFormatted;
};
