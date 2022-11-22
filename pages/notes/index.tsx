import { Suspense } from 'react';
import type { NextPage } from 'next';
import { useFetchNotes } from '../../hooks/useFetchNotes';
// import NotesList from '../components/NotesList/NoteList';
import dynamic from 'next/dynamic';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';
import NavBar from '../../components/SideBar/NavBar';
const NotesList = dynamic(() => import('../../components/NotesList/NoteList'), {
  suspense: true
});

const Dashboard: NextPage = () => {
  const { data } = useFetchNotes();
  console.log(data);

  return (
    <NavBar>
      <Suspense fallback={<CardSkeleton />}>
        <NotesList notes={data} />
      </Suspense>
    </NavBar>
  );
};

export default Dashboard;
