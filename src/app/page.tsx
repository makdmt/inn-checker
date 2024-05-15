'use server'

import { SearchBar } from './components/SearchBar/SearchBar';
import styles from './page.module.css';
import { redirect } from 'next/navigation';

export async function navigateToInfoPage(formData: FormData) {
  const innValue = formData.get('inn');
  redirect(`/info/${innValue}`);
}

export default async function Home() {

  return (
    <main className={styles.main}>
      <SearchBar searchFunc={navigateToInfoPage} />
    </main>
  );
}
