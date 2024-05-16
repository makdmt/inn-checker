import React, { FC } from "react";
import { useFormStatus } from "react-dom";

import styles from './Button.module.css'

interface IButton extends React.HTMLProps<HTMLButtonElement> {
    type: 'submit' | 'reset' | 'button' | undefined,
    // design: 'accept' | 'decline',
    // title: string,
    extraClass?: string,
}

export const Button: FC<IButton> = ({ title, extraClass, children, ...props }) => {

    const { pending } = useFormStatus()

    // const typeClassname = design === 'accept' ? styles.yesButton : styles.noButton;


    return (
        <button title={title} className={`${styles.button} ${extraClass}`} disabled={pending} {...props} >
            {pending ? 'Loading...' : children}
        </button>
    )
}