import { Suspense } from 'react';
import type { NextPage } from 'next';
import { useFetchNotes } from '../hooks/useFetchNotes';
import NotesList from '../components/NotesList/NoteList';
import NavBar from '../components/SideBar/NavBar';

const Dashboard: NextPage = () => {
  const { data } = useFetchNotes();
  console.log(data);

  return (
    <>
      <NavBar>
        <>
          <Suspense fallback={<div>loading</div>}>
            <NotesList notes={data} />
          </Suspense>
        </>
      </NavBar>
    </>
  );
};

export default Dashboard;
