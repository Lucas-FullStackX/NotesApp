import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Database } from '../../../lib/database.types';

export default function NoteCard({
  note
}: {
  note: Database['public']['Tables']['notes']['Row'];
}): JSX.Element {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Note #{note.id}
        </Typography>
      </CardContent>
    </Card>
  );
}
