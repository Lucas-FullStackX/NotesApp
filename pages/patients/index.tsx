import { Suspense } from 'react';
import type { NextPage } from 'next';
import PatientsList from '../../components/PatientsList/PatientsList';
import { useFetchPatients } from '../../hooks/useFetchPatients';
import CardSkeleton from '../../components/Skeleton/CardSkeleton';
import NavBar from '../../components/SideBar/NavBar';

const Patients: NextPage = () => {
  const { data } = useFetchPatients();
  console.log(data);

  return (
    <NavBar>
      <Suspense fallback={<CardSkeleton />}>
        <PatientsList patients={data} />
      </Suspense>
    </NavBar>
  );
};

export default Patients;
