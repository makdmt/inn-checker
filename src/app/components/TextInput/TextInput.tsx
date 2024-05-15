import React from 'react';
import styles from './TextInput.module.css'


type Props = React.HTMLProps<HTMLInputElement> & {
    extraClass?: string;
}


export const TextInput = (({ name, label, extraClass, onChange, ...props }: Props) => {

    return (
        <div className={extraClass}>
            {label && <label className={styles.label} htmlFor={label} >{label}:</label>}
            <input type='text' name={name} onChange={onChange} className={styles.input}  {...props} ></input>
        </div>
    )
})
