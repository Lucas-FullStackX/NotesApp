import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import dayjs from 'dayjs';

type useInsertNoteResponse = [
  createNote: (
    info: Database['public']['Tables']['notes']['Insert']
  ) => Promise<void>,
  response: {
    data: Database['public']['Tables']['notes']['Row'][];
    error?: PostgrestError;
    loading: boolean;
  }
];

export function useInsertNote({
  onComplete
}: {
  onComplete?: () => void;
}): useInsertNoteResponse {
  const [error, setError] = useState<useInsertNoteResponse[1]['error']>();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<useInsertNoteResponse[1]['data']>([]);
  const supabaseClient = useSupabaseClient<Database>();
  const createNote: useInsertNoteResponse[0] = async info => {
    setLoading(true);
    const { data: SignatureData, error: SignatureError } =
      await supabaseClient.storage
        .from('store')
        .upload(
          `signature/${info.patient}${info.general_state}${dayjs()}.png`,
          info.assistant,
          {
            cacheControl: '3600',
            upsert: false
          }
        );
    console.log(SignatureData, SignatureError);
    const { error: NoteError, data: NoteData } = await supabaseClient
      .from('notes')
      .insert(info)
      .select();
    if (NoteData && !NoteError) {
      setData(NoteData);
      onComplete();
    }
    if (NoteError) {
      setError(NoteError);
    }
    setLoading(false);
  };
  return [createNote, { error, loading, data }];
}
