import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useEffect, useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { Overwrite } from '../src/types';

export type PatientDetailType = Overwrite<
  Database['public']['Tables']['patient']['Row'],
  {
    notes:
      | Database['public']['Tables']['notes']['Row'][]
      | Database['public']['Tables']['notes']['Row'];
  }
>;
export type useDetailPatientResponse = {
  data: PatientDetailType;
  error?: PostgrestError;
  loading: boolean;
};

export function useDetailPatient({ id }): useDetailPatientResponse {
  const [error, setError] = useState<useDetailPatientResponse['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useDetailPatientResponse['data']>();
  const supabaseClient = useSupabaseClient<Database>();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const { error: patientsError, data: patientsData } = await supabaseClient
        .from('patient')
        .select(`*,notes!inner(*)`)
        .eq('id', id);
      if (patientsError) {
        setError(patientsError);
      }
      if (patientsData) {
        setData(patientsData[0]);
      }
      setLoading(false);
    }
    if (id) {
      loadData();
    }
  }, [id]);
  return { error, loading, data };
}
