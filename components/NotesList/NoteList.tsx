import { Stack, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/router';
import Card, { TYPE_CARD } from '../Card/BaseCard';
import { NoteData } from '../../hooks/useSearchData';
import DownloadPDF from '../PDF/DownloadPDF';

type NotesListProps = {
  notes: NoteData[];
};

export default function NotesList({ notes }: NotesListProps) {
  const router = useRouter();
  return (
    <Stack spacing={1} m={1} sx={{ position: 'relative' }}>
      {notes &&
        notes.map(note => (
          <Card type={TYPE_CARD.NOTE} key={note.id} info={note} />
        ))}
      <DownloadPDF data={notes[0]}>
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            router.push('/create-notes');
          }}
        >
          <AddIcon fontSize="large" />
        </Fab>
      </DownloadPDF>
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
