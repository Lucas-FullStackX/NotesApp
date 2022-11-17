import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';

type useInsertPatientResponse = [
  createNote: (
    info: Database['public']['Tables']['patient']['Insert']
  ) => Promise<void>,
  response: {
    data: Database['public']['Tables']['patient']['Row'][];
    error?: PostgrestError;
    loading: boolean;
  }
];

export function useInsertPatient(): useInsertPatientResponse {
  const [error, setError] = useState<useInsertPatientResponse[1]['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useInsertPatientResponse[1]['data']>([]);
  const supabaseClient = useSupabaseClient<Database>();
  const createPatient: useInsertPatientResponse[0] = async info => {
    setLoading(true);
    const { error: PatientError, data: PatientData } = await supabaseClient
      .from('patient')
      .insert(info)
      .select();
    if (PatientData && !PatientError) {
      setData(PatientData);
    }
    if (PatientError) {
      setError(PatientError);
    }
    setLoading(false);
  };
  return [createPatient, { error, loading, data }];
}
