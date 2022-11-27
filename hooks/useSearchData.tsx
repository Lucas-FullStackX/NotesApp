import { debounce } from 'lodash';
import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useState, useEffect } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import { Overwrite } from '../src/types';

export type NoteData = Overwrite<
  Database['public']['Tables']['notes']['Row'],
  {
    patient:
      | Database['public']['Tables']['patient']['Row'][]
      | Database['public']['Tables']['patient']['Row'];
  }
>;
type useSearchDataResponse = [
  onSearchData: (name: string) => Promise<void>,
  response: {
    data: {
      patients: Database['public']['Tables']['patient']['Row'][];
      notes: NoteData[];
    };
    error?: PostgrestError;
    loading: boolean;
  }
];

export function useSearchDataNotes(): useSearchDataResponse {
  const [error, setError] = useState<useSearchDataResponse[1]['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useSearchDataResponse[1]['data']>({
    notes: [],
    patients: []
  });
  const supabaseClient = useSupabaseClient<Database>();
  useEffect(() => {
    setData({
      notes: [],
      patients: []
    });
  }, []);
  const onSearchData = debounce(async (name: string) => {
    setLoading(true);
    const { error: notesError, data: notesData } = await supabaseClient
      .from('notes')
      .select(`*,patient(*)`)
      .like('patient.name', `%${name}%`);
    if (notesError) {
      setError(notesError);
    }
    const { error: patientsError, data: patientsData } = await supabaseClient
      .from('patient')
      .select()
      .like('name', `%${name}%`);
    if (patientsError) {
      setError(patientsError);
    }
    if (patientsData || notesData) {
      const filterNotes = notesData.filter(note => note.patient != null);
      setData({ notes: filterNotes, patients: patientsData });
    }
    setLoading(false);
  }, 800);
  return [onSearchData, { error, loading, data }];
}
