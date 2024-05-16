import React, { FC } from "react";
import { LayoutCommonBlock } from "../LayoutCommonBlock/LayoutCommonBlock";
import { Button } from "../Button/Button";

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
                <Button type='button' onClick={yesBtnFunc} extraClass={styles.yesButton}>{yesBtnLabel}</Button>
                <Button type='button' onClick={noBtnFunc} extraClass={styles.noButton}>{noBtnLabel}</Button>
            </div>
        </LayoutCommonBlock>
    )
}