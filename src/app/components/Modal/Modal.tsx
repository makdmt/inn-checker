import React, { FC, ReactPortal, ReactElement } from "react";
import ReactDOM from 'react-dom'

import { ModalOverlay } from "../ModalOverlay/ModalOverlay";

import styles from './Modal.module.css'
// import { CloseButton } from "../CloseButton/CloseButton";


type Modal = {
  closeFunc: Function,
  children: ReactElement,
}

export const Modal = ({ closeFunc, children }: Modal): ReactPortal => {

  const closeByEscHandler = React.useCallback((evt: KeyboardEvent) => {
    evt.stopPropagation();
    evt.key === 'Escape' && closeFunc();
  }, [closeFunc])

  const closeByClickHandler = React.useCallback((evt: React.MouseEvent<HTMLElement>) => {
    evt.stopPropagation();
    closeFunc();
  }, [closeFunc])

  React.useEffect(() => {
    document.addEventListener("keydown", closeByEscHandler);
    return () => document.removeEventListener("keydown", closeByEscHandler);
  }, [closeByEscHandler])

  const rootHtml = document.getElementById('modalRoot') as HTMLElement;

  return ReactDOM.createPortal(
    (
      <div className={styles.modalScreen} onClick={(evt) => { evt.stopPropagation(); }} >
        <ModalOverlay onClick={closeByClickHandler} />
        <div className={styles.popupContainer} >
          {children}
        </div>
      </div >
    )
    , rootHtml);
}
