import { useSupabaseClient } from '@supabase/auth-helpers-react';
import { Database } from '../lib/database.types';
import { useState } from 'react';
import { PostgrestError } from '@supabase/supabase-js';
import dayjs from 'dayjs';
import { InsertNoteType } from '../components/CreateNotes/notes-utils';

type useInsertNoteResponse = [
  createNote: (info: InsertNoteType) => Promise<void>,
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
    let SignaturePath = '';
    if (info?.note?.assistant?.length > 1) {
      const { data: SignatureData } = await supabaseClient.storage
        .from('store')
        .upload(
          `signature/${info.note.patient}${
            info.note.general_state
          }${dayjs()}.png`,
          info.note.assistant,
          {
            cacheControl: '3600',
            upsert: false
          }
        );
      SignaturePath = SignatureData.path;
    }
    const { error: VitalError, data: VitalData } = await supabaseClient
      .from('vital_signs')
      .insert(info.vital_signs)
      .select();
    console.log(VitalData);
    if (VitalData) {
      const { error: NoteError, data: NoteData } = await supabaseClient
        .from('notes')
        .insert({
          ...info.note,
          assistant: SignaturePath.length > 0 ? SignaturePath : null,
          signs: VitalData[0].id
        })
        .select();
      if (NoteData && !NoteError) {
        setData(NoteData);
        onComplete();
      }
      if (NoteError || VitalError) {
        setError(NoteError || VitalError);
      }
    }
    setLoading(false);
  };
  return [createNote, { error, loading, data }];
}
