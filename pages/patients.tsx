import { Suspense } from 'react';
import type { NextPage } from 'next';
import PatientsList from '../components/PatientsList/PatientsList';
import { useFetchPatients } from '../hooks/useFetchPatients';

const Patients: NextPage = () => {
  const { data } = useFetchPatients();
  console.log(data);

  return (
    <Suspense fallback={<div>loading</div>}>
      <PatientsList patients={data} />
    </Suspense>
  );
};

export default Patients;
