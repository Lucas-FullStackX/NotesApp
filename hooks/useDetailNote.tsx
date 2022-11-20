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
  }
>;
type useFetchNotesResponse = {
  data: Database['public']['Tables']['notes']['Row'];
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
        .select('*')
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
