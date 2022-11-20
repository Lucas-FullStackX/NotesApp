import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export type NoteData = Overwrite<
  Database['public']['Tables']['notes']['Row'],
  {
    patient:
      | Database['public']['Tables']['patient']['Row'][]
      | Database['public']['Tables']['patient']['Row'];
    signs?:
      | Database['public']['Tables']['vital_signs']['Row'][]
      | Database['public']['Tables']['vital_signs']['Row'];
  }
>;
type useFetchNotesResponse = {
  data: NoteData;
  error?: PostgrestError;
  loading: boolean;
};

export function useDetailNote({ id }): useFetchNotesResponse {
  const [error, setError] = useState<useFetchNotesResponse['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useFetchNotesResponse['data']>();
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const { error: notesError, data: notesData } = await supabaseClient
        .from('notes')
        .select(
          `id,
        created_at,
        general_state,
        anemic_state,
        skin,
        emesis,
        prosthesis,
        medicines,
        wandering,
        falls,
        deposition,
        dieresis,
        food,
        news,
        sleep,
        assistant,
        created_by,
        vital_signs(
          id,
          created_at,
          sanguine_pressure,
          cardiac_frequency,
          saturation,
          temperature,
          news
        ),
        code,
        patient(
          id,
          created_at,
          name,
          date_of_birth
        )`
        )
        .eq('id', id);
      if (notesError) {
        setError(notesError);
      }
      if (notesData) {
        setData(notesData[0]);
      }
      setLoading(false);
    }

    loadData();
  }, [id]);
  return { error, loading, data };
}
