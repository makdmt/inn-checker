'use server'

import { findByInn } from '@/app/services/inn-api';
import { SearchBar } from './components/SearchBar/SearchBar';
import styles from './page.module.css';
import { redirect } from 'next/navigation';
import { INN_INPUT_PROPS } from '@/app/components/SearchByInnForm/SearchByInnForm';
import { CompanyDetails } from '@/app/components/CompanyDetails/CompanyDetails';
import { useState } from 'react';

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

  const response = await findByInn(params.inn);





  if ('errorMessage' in response) return (
    <>
      <h2>Произошла ошибка</h2>
      <p>{response.errorMessage}</p>
    </>
  )


  return (
    <CompanyDetails {...response.suggestions[0]} />
  );
}
