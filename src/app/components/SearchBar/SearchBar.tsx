import React from 'react';
import { TextInput } from '../TextInput/TextInput';
import styles from './SearchBar.module.css'
import { SearchIcon } from '../Icons/SearchIcon';

type Props = React.HTMLProps<HTMLFormElement> & {
    searchFunc: (formData: FormData) => void;
    extraClass?: string;
}


export const SearchBar = (({ name, extraClass, searchFunc, ...props }: Props) => {

    return (
        <form name={name} action={searchFunc} className={`${styles.container} ${extraClass}`} {...props}>
            <TextInput id='inn' name='inn' label='Поиск по ИНН' />
            <button title='отправить запрос' type='submit' className={styles.searchBtn}>
                <SearchIcon />
            </button>
        </form>
    )
})
