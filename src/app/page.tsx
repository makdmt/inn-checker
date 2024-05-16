'use server'

import { SearchByInnForm } from './components/SearchByInnForm/SearchByInnForm';
import styles from './page.module.css';


export default async function Home() {

  return (
      <SearchByInnForm />
  );
}
