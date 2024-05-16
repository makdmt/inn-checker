'use server'

import { findByInn } from '@/app/services/inn-api';
import { SearchBar } from './components/SearchBar/SearchBar';
import styles from './page.module.css';
import { redirect } from 'next/navigation';
import { INN_INPUT_PROPS } from '@/app/components/SearchByInnForm/SearchByInnForm';

type Props = {
  params: {
    inn: string;
  }
}


export default async function CompanyDetailsPage({ params }: Props) {

  if (!params.inn.match(new RegExp(INN_INPUT_PROPS.pattern))) return (
    <>
    <h2>Произошла ошибка</h2>
    <p>Неверный ИНН</p>
  </>
  )

  const companyDetails = await findByInn(params.inn);


  if ('message' in companyDetails) return (
    <>
      <h2>Произошла ошибка</h2>
      <p>{companyDetails.message}</p>
    </>
  )

  return (
    <main className={styles.main}>
      <p>Детали</p>
    </main>
  );
}
