'use client'

import React, { useRef, useState } from 'react';
import TextInput, { TextInputProps } from '../TextInput/TextInput';
import styles from './SearchBar.module.css'
import { SearchIcon } from '../Icons/SearchIcon';
import { useFormStatus } from 'react-dom';
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
            <TextInput ref={inputRef} {...inputProps} />
            <p>{validationMsg}</p>
            7731639557
            <Button type='submit' title='отправить запрос' extraClass={`${styles.searchBtn}`} >
                <SearchIcon />
            </Button>
        </form>
    )
})
