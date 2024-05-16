'use client'

import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import { ConfirmForm } from "../ConfirmForm/ConfirmForm";
import { OrganizationInfo } from "@/app/services/inn-api";
import { useRouter } from "next/navigation";

export const CompanyDetails = ({value: orgName, data }: OrganizationInfo) => {

    const [modalOpened, setmodalOpened] = useState<boolean>(false);
    const router = useRouter()

    const closeModal = React.useCallback(() => {
        setmodalOpened(false);
    }, [])

    const redirectToMap = () => {
        router.push(`https://yandex.ru/maps/?text=${data.address.value}`)
    }

    return (
        <div>
            <h2>{orgName}</h2>
            <h3>Руководство:</h3>
            <p>{data.management.post}: {data.management.name}</p>
            <h3>Реквизиты:</h3>
            <ul>
                <li>ИНН: {data.inn}</li>
                <li>ОГРН: {data.ogrn}</li>
                <li>ОКПО: {data.okpo}</li>
                <li>ОКАТО: {data.okato}</li>
            </ul>
            <p>Адрес: <a onClick={() => setmodalOpened(true)}>{data.address.value}</a></p>
            {modalOpened && <Modal closeFunc={closeModal}>
                    <ConfirmForm
                        heading="Переход на сторонний сайт"
                        ask="Вы действительно хотите перейти на внешний ресурс?"
                        yesBtnFunc={redirectToMap}
                        noBtnFunc={closeModal}
                    />
                </Modal>}
        </div>
    )

}