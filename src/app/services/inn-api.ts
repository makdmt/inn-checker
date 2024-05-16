import { redirect } from "next/navigation";

const URL = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
const TOKEN = '32589fa94d680272566e0a45f14fcc03b3d38fe0';
// const TOKEN = '32589fa94d680272566e0afcc03b3d38fe0';

type ErrorMessage = {
  errorMessage: string;
}

type ResponseBody = {
  suggestions: OrganizationInfo[]
}

export type OrganizationInfo = {
  value: string;
  data: {
    inn: string;
    ogrn: string;
    okpo: string;
    okato: string;
    address: AddressDetails;
    management: ManagerDetails;
  }
}

type AddressDetails = {
  value: string;
}

type ManagerDetails = {
  name: string;
  post: string;
}


const checkResponse = (res: Response): Promise<ResponseBody | ErrorMessage > => {
  if (res.ok) return res.json() as unknown as Promise<ResponseBody>
    const obj = {message: 'Организация не найдена'}

  if (res.status === 404) return Promise.resolve({message: 'Организация не найдена'})
  return Promise.resolve({message: 'Организация не найдена'})
}

export async function findByInn(inn: string): Promise<ResponseBody | ErrorMessage>  {
  return fetch(`${URL}`, {
    method: 'POST',
    mode: "cors",
    next: { revalidate: 600 },
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": "Token " + TOKEN,
    },
    body: JSON.stringify({
      query: inn
    }),
  })
    .then(res => checkResponse(res))
    .catch((err: unknown) => {
      console.log(err);
      return {message: 'Во время выполнения запроса произошла ошибка, попробуйте повторить позже'}
      
})
}

