import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';

export type useFetchPatientsResponse = {
  data: Database['public']['Tables']['patient']['Row'][];
  error?: PostgrestError;
  loading: boolean;
};

export function useDetailPatient({ id }): useFetchPatientsResponse {
  const [error, setError] = useState<useFetchPatientsResponse['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useFetchPatientsResponse['data']>([]);
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const { error: patientsError, data: patientsData } = await supabaseClient
        .from('patient')
        .select('*')
        .eq('id', id);
      if (patientsError) {
        setError(patientsError);
      }
      if (patientsData) {
        setData(patientsData);
      }
      setLoading(false);
    }

    loadData();
  }, []);
  return { error, loading, data };
}
