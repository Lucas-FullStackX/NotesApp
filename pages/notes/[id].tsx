import type { NextPage } from 'next';
import { Suspense } from 'react';
import { useRouter } from 'next/router';
import { useDetailNote } from '../../hooks/useDetailNote';
import DetailNote from '../../components/DetailNote/DetailNote';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';
import NavBar from '../../components/SideBar/NavBar';

const NoteDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useDetailNote({ id });
  return (
    <NavBar>
      <Suspense fallback={<CardSkeleton />}>
        <DetailNote data={data} loading={loading} />
      </Suspense>
    </NavBar>
  );
};

export default NoteDetail;
