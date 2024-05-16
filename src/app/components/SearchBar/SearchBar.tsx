'use client'

import React, { useRef, useState } from 'react';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import styles from './SearchBar.module.css'
import { Button } from '../Button/Button';

type Props = React.HTMLProps<HTMLFormElement> & {
    searchFunc: (formData: FormData) => void;
    enableInputValidation?: Boolean;
    customValidationMsg?: string;
    inputProps?: TextInputProps;
    extraClass?: string;
}


export const SearchBar = (({ name, searchFunc, enableInputValidation = false, customValidationMsg, inputProps, extraClass, ...props }: Props) => {

    const inputRef = useRef<HTMLInputElement>(null);
    const [validationMsg, setValidationMsg] = useState<string | undefined>();

    const onChange = () => {
        if (inputRef.current?.validity.patternMismatch) {
            customValidationMsg && inputRef.current?.setCustomValidity(customValidationMsg);
        } else {
            inputRef.current?.setCustomValidity('');
        }
        setValidationMsg(inputRef.current?.validationMessage);
    }

    if (enableInputValidation) inputProps = { ...inputProps, onChange }


    return (
        <form name={name} action={searchFunc} className={`${styles.container} ${extraClass}`} {...props}>
            <div className={styles.searchBarContainer}>
                <TextInput ref={inputRef} {...inputProps} />
                <Button type='submit' title='отправить запрос' disabled={!!validationMsg} extraClass={`${styles.searchBtn}`} >
                    Поиск
                </Button>
            </div>
            <p>{validationMsg}</p>
        </form>
    )
})
