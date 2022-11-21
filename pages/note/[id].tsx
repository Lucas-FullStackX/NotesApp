import type { NextPage } from 'next';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
// Add this component into the detail note component
/* <DownloadPDF data={data}>
  <Fab
    sx={{
      position: 'fixed',
      right: '15px',
      bottom: '15px',
      borderRadius: '15px'
    }}
    color="primary"
    aria-label="add"
  >
    <SimCardDownloadIcon fontSize="large" />
  </Fab>
</DownloadPDF>; */

const NoteDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <Box m={3}>{id}</Box>;
};

export default NoteDetail;
