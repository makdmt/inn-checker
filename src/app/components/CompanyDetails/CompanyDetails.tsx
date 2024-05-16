import { OrganizationInfo } from "@/app/services/inn-api";

export const CompanyDetails = ({value: orgName, data }: OrganizationInfo) => {

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
            <p>Адрес: {data.address.value}</p>
        </div>
    )

}