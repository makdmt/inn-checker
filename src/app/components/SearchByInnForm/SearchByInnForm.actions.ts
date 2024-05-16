'use server'
import { redirect } from "next/navigation";
import { INN_INPUT_PROPS } from "./SearchByInnForm";

export async function navigateToInfoPage(formData: FormData) {
    const innValue = formData.get(INN_INPUT_PROPS.name);
    redirect(`/info/${innValue}`);
}