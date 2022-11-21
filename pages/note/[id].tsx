import type { NextPage } from 'next';
import { Suspense } from 'react';
import { useRouter } from 'next/router';
import { useDetailNote } from '../../hooks/useDetailNote';
import DetailNote from '../../components/DetailNote/DetailNote';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';
import NavBar from '../../components/SideBar/NavBar';
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
  const { data } = useDetailNote({ id });
  return (
    <NavBar>
      <Suspense fallback={<CardSkeleton />}>
        <DetailNote data={data} />
      </Suspense>
    </NavBar>
  );
};

export default NoteDetail;
