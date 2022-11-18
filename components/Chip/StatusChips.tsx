import { Chip } from '@mui/material';
import { AnemicStatusType } from '../CreateNotes/notes-types';

// ...
type StatusChipProps = { type: string | AnemicStatusType; label: string };
export function StatusChip({ type, label }: StatusChipProps) {
  if (type === 'Tranquilo') {
    return <Chip color="primary" label={label} />;
  }
  if (type === 'Agresivo') {
    return <Chip color="error" label={label} />;
  }
  return <Chip label={label} />;
}
