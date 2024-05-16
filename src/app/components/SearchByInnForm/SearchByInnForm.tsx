import { SearchBar } from "../SearchBar/SearchBar"
import { navigateToInfoPage } from "./SearchByInnForm.actions";

export const INN_INPUT_PROPS = {
    name: 'inn',
    label: 'Поиск по ИНН',
    pattern: '^[0-9]{10}$',
    maxLength: 10
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