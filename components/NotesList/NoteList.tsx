import React from 'react';
import { Stack, Fab } from '@mui/material';
import { Database } from '../../lib/database.types';
import NoteCard from './components/NoteCard';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';

type NotesListProps = {
  notes: Database['public']['Tables']['notes']['Row'][];
};

export default function NotesList({ notes }: NotesListProps) {
  const router = useRouter();
  return (
    <Stack spacing={1} m={1} sx={{ position: 'relative' }}>
      {notes && notes.map(note => <NoteCard key={note.id} note={note} />)}
      <Fab
        sx={{
          position: 'fixed',
          right: '15px',
          bottom: '15px',
          borderRadius: '15px'
        }}
        color="primary"
        aria-label="add"
        onClick={() => {
          router.push('/create-notes');
        }}
      >
        <AddIcon fontSize="large" />
      </Fab>
    </Stack>
  );
}
