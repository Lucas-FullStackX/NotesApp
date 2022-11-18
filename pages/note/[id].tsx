import type { NextPage } from 'next';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';

const NoteDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Box m={3}>{id}</Box>;
};

export default NoteDetail;
