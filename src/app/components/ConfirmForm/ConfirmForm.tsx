import React, { FC } from "react";
import { LayoutCommonBlock } from "../LayoutCommonBlock/LayoutCommonBlock";

import styles from './ConfirmForm.module.css'

type ConfirmForm = {
    heading: string,
    ask: string,
    yesBtnLabel?: string,
    yesBtnFunc: (evt: any) => void,
    noBtnLabel?: string,
    noBtnFunc: (evt: any) => void,
    extraClass?: string
}



export const ConfirmForm: FC<ConfirmForm> = ({ heading, ask, yesBtnLabel = 'Да', yesBtnFunc, noBtnLabel = 'Нет', noBtnFunc, extraClass }) => {

    return (
        <LayoutCommonBlock extraClass={`${extraClass}`}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.ask}>{ask}</p>
            <div className={styles.buttonContainer}>
                <button className={`${styles.button} ${styles.yesButton}`} onClick={yesBtnFunc}>{yesBtnLabel}</button>
                <button className={`${styles.button} ${styles.noButton}`} onClick={noBtnFunc}>{noBtnLabel}</button>
            </div>
        </LayoutCommonBlock>
    )
}