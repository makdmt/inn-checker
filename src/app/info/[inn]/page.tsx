'use server'

import { findByInn } from '@/app/services/inn-api';
import { INN_INPUT_PROPS, SearchByInnForm } from '@/app/components/SearchByInnForm/SearchByInnForm';
import { CompanyDetails } from '@/app/components/CompanyDetails/CompanyDetails';
import { ErrorInfo } from '@/app/components/ErrorInfo/ErrorInfo';
import styles from './page.module.css'

type Props = {
  params: {
    inn: string;
  }
}


export default async function CompanyDetailsPage({ params }: Props) {

  if (!params.inn.match(new RegExp(INN_INPUT_PROPS.pattern))) return (
    <div>
      <SearchByInnForm extraClass={styles.searchBar} />
      <ErrorInfo errMessage='Неверный ИНН' />
    </div>
  )

  const response = await findByInn(params.inn);

  if ('errorMessage' in response) return (
    <div>
      <SearchByInnForm extraClass={styles.searchBar} />
      <ErrorInfo errMessage={response.errorMessage} />
    </div>
  )

  if (!response.suggestions.length) return (
    <div>
      <SearchByInnForm extraClass={styles.searchBar} />
      <ErrorInfo errMessage='Компания с таким ИНН не найдена' />
    </div>
  )


  return (
    <div>
      <SearchByInnForm extraClass={styles.searchBar} />
      <CompanyDetails {...response.suggestions[0]} />
    </div>
  );
}
