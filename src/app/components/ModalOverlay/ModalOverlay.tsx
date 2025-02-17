import React, { FC } from "react";

import styles from './ModalOverlay.module.css'


type ModalOverlay = {
  onClick?: React.MouseEventHandler<HTMLElement>,
  appearance?: 'transparent' | 'darkened'
  extraClass?: string
}

export const ModalOverlay: FC<ModalOverlay> = ({ onClick, appearance = 'darkened' }) => {

  return (
    <div className={`${styles.modalOverlay} ${appearance === 'transparent' ? styles.transparent : ''}`} onClick={onClick}></div>
  )
}
