
import React, { useRef } from 'react';
import styles from './TextInput.module.css'


export type TextInputProps = React.HTMLProps<HTMLInputElement> & {
    extraClass?: string;
}


const TextInput = React.forwardRef((
    { id, name, label, extraClass, ...props }: TextInputProps,
     ref: React.ForwardedRef<HTMLInputElement>) => {

    // const inputRef = useRef<HTMLInputElement>(null);
    // const [validationMsg, setVal]

    // const onChange = () => {
    //     if (inputRef.current?.validity.patternMismatch) {
    //         inputRef.current?.setCustomValidity('только так')
    //     } 
    //     else {
    //         inputRef.current?.setCustomValidity('')
    //     }
    //     console.log(inputRef.current?.validity.valid);
    //     console.log(inputRef.current?.validationMessage);
    // }

    

    return (
        <div className={extraClass}>
            {label && <label className={styles.label} htmlFor={id} >{label}:</label>}
            {/* <input id={id} ref={ref} type='text' name={name} onChange={onChange} minLength={2} maxLength={11} pattern='^\d{10}$' className={styles.input}  {...props} ></input> */}
            <input id={id} ref={ref} type='text' name={name} className={styles.input}  {...props} ></input>
        </div>
    )
});

TextInput.displayName = "TextInput";

export default TextInput;