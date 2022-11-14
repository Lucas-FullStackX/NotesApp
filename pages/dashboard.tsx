import React from 'react';
import type { NextPage } from 'next';
import { useFetchNotes } from '../hooks/useFetchNotes';
import { Link } from '../components/Buttons/Buttons';

const Dashboard: NextPage = () => {
  const { data } = useFetchNotes();
  console.log(data);

  return <Link href="/create-notes">GO TO FORM</Link>;
};

export default Dashboard;
