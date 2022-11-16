import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';

type useFetchNotesResponse = {
  data: Database['public']['Tables']['notes']['Row'][];
  error?: PostgrestError;
  loading: boolean;
};

export function useFetchNotes(): useFetchNotesResponse {
  const [error, setError] = useState<useFetchNotesResponse['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useFetchNotesResponse['data']>([]);
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const { error: notesError, data: notesData } = await supabaseClient
        .from('notes')
        .select('*')
        .order('created_at', { ascending: false });
      if (notesError) {
        setError(notesError);
      }
      if (notesData) {
        setData(notesData);
      }
      setLoading(false);
    }

    loadData();
  }, []);
  return { error, loading, data };
}
