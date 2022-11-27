import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { Overwrite } from '../src/types';

export type NoteDetailType = Overwrite<
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
  data: NoteDetailType;
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
        .select(`*,signs:vital_signs(*),patient(*)`)
        .eq('id', id);
      if (notesError) {
        setError(notesError);
      }
      if (notesData) {
        if (notesData[0]?.assistant?.length > 0) {
          const { data: ImgData } = supabaseClient.storage
            .from('store')
            .getPublicUrl(notesData[0].assistant);
          setData({ ...notesData[0], assistant: ImgData.publicUrl });
        } else {
          setData(notesData[0]);
        }
      }
      setLoading(false);
    }
    if (id) {
      loadData();
    }
  }, [id]);
  return { error, loading, data };
}
