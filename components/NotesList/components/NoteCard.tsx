import { useState } from 'react';
import { Paper, Typography } from '@mui/material';
import { Database } from '../../../lib/database.types';
import { useRouter } from 'next/router';
import { humanizeDate } from '../../../src/utils';

export default function NoteCard({
  note
}: {
  note: Database['public']['Tables']['notes']['Row'];
}): JSX.Element {
  const router = useRouter();
  const [elevation, setElevation] = useState(2);
  return (
    <Paper
      onClick={() => {
        router.push(`/note/${note.id}`);
      }}
      sx={{ p: 1 }}
      elevation={elevation}
      onMouseOver={() => {
        setElevation(5);
      }}
      onMouseOut={() => {
        setElevation(2);
      }}
    >
      <Typography variant="h6" component="div">
        Note #{note.id}
      </Typography>
      <Typography variant="body1" component="div">
        <b>Fecha:</b> {humanizeDate(note.created_at ?? '')}
      </Typography>
    </Paper>
  );
}
