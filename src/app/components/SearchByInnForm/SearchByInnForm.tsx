import { SearchBar } from "../SearchBar/SearchBar"
import { navigateToInfoPage } from "./SearchByInnForm.actions";

export const INN_INPUT_PROPS = {
    name: 'inn',
    placeholder: 'Введите ИНН',
    required: true,
    pattern: '^[0-9]{10}$',
    maxLength: 10
}

type Props = {
    extraClass?: string;
}

export const SearchByInnForm = ({ extraClass }: Props) => {
    return (
        <SearchBar
            searchFunc={navigateToInfoPage}
            enableInputValidation={true}
            customValidationMsg='в ИНН должно быть 10 цифр'
            inputProps={INN_INPUT_PROPS}
            extraClass={extraClass}
        />
    )
}