'use server'

const URL = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
const TOKEN = '32589fa94d680272566e0a45f14fcc03b3d38fe0';
const ERR_MSG = 'Что-то пошло не так...попробуйте обновить страницу.';

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
  return Promise.resolve({errorMessage: ERR_MSG})
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
      return {errorMessage: ERR_MSG}  
})
}

