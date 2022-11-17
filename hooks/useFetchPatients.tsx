import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';

type useFetchPatientsResponse = {
  data: Database['public']['Tables']['patient']['Row'][];
  error?: PostgrestError;
  loading: boolean;
};

export function useFetchPatients(): useFetchPatientsResponse {
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
        .order('created_at', { ascending: false });
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
