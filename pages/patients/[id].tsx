import type { NextPage } from 'next';
import { Suspense } from 'react';
import { useRouter } from 'next/router';
import { useDetailPatient } from '../../hooks/useDetailPatient';
import DetailPatient from '../../components/DetailPatient/DetailPatient';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';
import NavBar from '../../components/SideBar/NavBar';

const NoteDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useDetailPatient({ id });
  return (
    <NavBar>
      <Suspense fallback={<CardSkeleton />}>
        <DetailPatient data={data} loading={loading} />
      </Suspense>
    </NavBar>
  );
};

export default NoteDetail;
