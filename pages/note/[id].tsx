import type { NextPage } from 'next';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useDetailNote } from '../../hooks/useDetailNote';

const NoteDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useDetailNote({ id });
  console.log(data, 'id');
  return <Box m={3}>{id}</Box>;
};

export default NoteDetail;
