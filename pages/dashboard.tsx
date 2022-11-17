import { Suspense } from 'react';
import type { NextPage } from 'next';
import { useFetchNotes } from '../hooks/useFetchNotes';
import NotesList from '../components/NotesList/NoteList';

const Dashboard: NextPage = () => {
  const { data } = useFetchNotes();
  console.log(data);

  return (
    <Suspense fallback={<div>loading</div>}>
      <NotesList notes={data} />
    </Suspense>
  );
};

export default Dashboard;
