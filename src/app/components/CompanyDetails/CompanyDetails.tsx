'use client'

import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ConfirmForm } from "../ConfirmForm/ConfirmForm";
import { OrganizationInfo } from "@/app/services/inn-api";

import styles from "./CompanyDetails.module.css"

export const CompanyDetails = ({ value: orgName, data }: OrganizationInfo) => {

    const [modalOpened, setmodalOpened] = useState<boolean>(false);

    const closeModal = React.useCallback(() => {
        setmodalOpened(false);
    }, [])

    const openMap = (evt: React.MouseEvent<HTMLElement>) => {
        window.open(`https://yandex.ru/maps/?text=${data.address.value}`)
        closeModal();
    }

    return (
        <div className={styles.container}>
            <section>
            <h2 className={styles.heading}>{orgName}</h2>
            <h3 className="">Руководство:</h3>
            <p>{data.management.post}: {data.management.name}</p>
            </section>
            <section>
            <h3>Реквизиты:</h3>
            <ul>
                <li>ИНН: {data.inn}</li>
                <li>ОГРН: {data.ogrn}</li>
                <li>ОКПО: {data.okpo}</li>
                <li>ОКАТО: {data.okato}</li>
            </ul>
            </section>
            <p><b>Адрес:</b> <a onClick={() => setmodalOpened(true)}>{data.address.value}</a></p>
            {modalOpened && <Modal closeFunc={closeModal}>
                <ConfirmForm
                    heading="Переход на сторонний сайт"
                    ask="Вы действительно хотите перейти на внешний ресурс?"
                    yesBtnFunc={openMap}
                    noBtnFunc={closeModal}
                />
            </Modal>}
        </div>
    )

}