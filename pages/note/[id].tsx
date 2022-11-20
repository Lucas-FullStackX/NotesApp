import type { NextPage } from 'next';
import { Suspense } from 'react';
import { useRouter } from 'next/router';
import { useDetailNote } from '../../hooks/useDetailNote';
import DetailNote from '../../components/DetailNote/DetailNote';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';

const NoteDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useDetailNote({ id });
  console.log(data, 'id');
  return (
    <Suspense fallback={<CardSkeleton />}>
      <DetailNote data={data} />
    </Suspense>
  );
};

export default NoteDetail;
