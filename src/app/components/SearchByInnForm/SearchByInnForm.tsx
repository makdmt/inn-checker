import { redirect } from "next/navigation";
import { SearchBar } from "../SearchBar/SearchBar"

export const INN_INPUT_PROPS = {
    name: 'inn',
    label: 'Поиск по ИНН',
    pattern: '^[0-9]{10}$',
    maxLength: 10
}

export async function navigateToInfoPage(formData: FormData) {
    'use server'
    const innValue = formData.get(INN_INPUT_PROPS.name);
    redirect(`/info/${innValue}`);
}

export const SearchByInnForm = () => {
    return (
        <SearchBar
            searchFunc={navigateToInfoPage}
            enableInputValidation={true}
            customValidationMsg='в ИНН должно быть 10 цифр'
            inputProps={INN_INPUT_PROPS} />
    )
}