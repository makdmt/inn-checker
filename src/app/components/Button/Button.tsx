import React, { FC } from "react";
import { useFormStatus } from "react-dom";

import styles from './Button.module.css'

type Button = {
    type: 'submit' | 'reset' | 'button' | undefined,
    extraClass?: string,
} & React.HTMLProps<HTMLButtonElement>

export const Button: FC<Button> = ({ title, extraClass, children, ...props }) => {

    const { pending } = useFormStatus()

    if (pending) props = { ...props, disabled: pending }

    return (
        <button title={title} className={`${styles.button} ${extraClass}`} {...props} >
            {pending ? 'Loading...' : children}
        </button>
    )
}