import { useState } from 'react';
import { Paper, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { humanizeDate } from '../../src/utils';
import { Database } from '../../lib/database.types';
import { NoteData } from '../../hooks/useFetchNotes';
import { StatusChip } from '../Chip/StatusChips';

export enum TYPE_CARD {
  NOTE = 'NOTE',
  PATIENT = 'PATIENT'
}

type CardProps =
  | {
      info: NoteData;
      type: TYPE_CARD.NOTE;
    }
  | {
      info: Database['public']['Tables']['patient']['Row'];
      type: TYPE_CARD.PATIENT;
    };

export default function Card({ info, type }: CardProps): JSX.Element {
  const router = useRouter();
  const [elevation, setElevation] = useState(2);
  if (type === TYPE_CARD.PATIENT && info.name) {
    return (
      <Paper
        onClick={() => {
          router.push(`/note/${info.id}`);
        }}
        sx={{ p: 2 }}
        elevation={elevation}
        onMouseOver={() => {
          setElevation(5);
        }}
        onMouseOut={() => {
          setElevation(2);
        }}
      >
        <Typography variant="h4" component="div" fontWeight={700}>
          {info.name}
        </Typography>
        <Typography variant="body1" component="div">
          <b>Fecha:</b> {humanizeDate(info.created_at ?? '')}
        </Typography>
      </Paper>
    );
  }
  if (type === TYPE_CARD.NOTE) {
    return (
      <Paper
        onClick={() => {
          router.push(`/note/${info.id}`);
        }}
        sx={{ p: 2 }}
        elevation={elevation}
        onMouseOver={() => {
          setElevation(5);
        }}
        onMouseOut={() => {
          setElevation(2);
        }}
      >
        <Stack spacing={1}>
          <Typography variant="h4" component="div" fontWeight={700}>
            {Array.isArray(info.patient)
              ? info.patient[0].name
              : info.patient?.name ?? 'Sin Paciente'}
          </Typography>
          <Stack direction="row" spacing={1}>
            <StatusChip label={info.anemic_state} type={info.anemic_state} />
          </Stack>
          <Typography variant="body1" component="div">
            {humanizeDate(info.created_at ?? '')}
          </Typography>
        </Stack>
      </Paper>
    );
  }
  return (
    <Paper
      onClick={() => {
        router.push(`/note/${info.id}`);
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
      <Typography variant="h5" component="div" fontWeight={700}>
        Note #{info.id}
      </Typography>
      <Typography variant="body1" component="div">
        <b>Fecha:</b> {humanizeDate(info.created_at ?? '')}
      </Typography>
    </Paper>
  );
}
