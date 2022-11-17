import { useState } from 'react';
import { Paper, Typography } from '@mui/material';

import { useRouter } from 'next/router';
import { humanizeDate } from '../../src/utils';
import { Database } from '../../lib/database.types';

export enum TYPE_CARD {
  NOTE = 'NOTE',
  PATIENT = 'PATIENT'
}

type CardProps =
  | {
      info: Database['public']['Tables']['notes']['Row'];
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
          {info.name}
        </Typography>
        <Typography variant="body1" component="div">
          <b>Fecha:</b> {humanizeDate(info.created_at ?? '')}
        </Typography>
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
      <Typography variant="h6" component="div">
        Note #{info.id}
      </Typography>
      <Typography variant="body1" component="div">
        <b>Fecha:</b> {humanizeDate(info.created_at ?? '')}
      </Typography>
    </Paper>
  );
}
