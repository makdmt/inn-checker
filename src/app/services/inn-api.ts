const URL: string = 'http://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';

type ResponseBody = {
  suggestions: OrganizationInfo[]
}

type OrganizationInfo = {
  value: string;
  inn: string;
  ogrn: string;
  okpo: string;
  okato: string;
  address: AddressDetails[];
  managers: ManagerDetails[];
}

type AddressDetails = {
  value: string;
}

type ManagerDetails = {
  fio: {
    source: string;
    gender: string;
  }
}


const checkResponse = (res: Response): Promise<ResponseBody | unknown> => {
  return res.ok ? res.json() : res.json().then((err: unknown) => Promise.reject(err));
};

export async function findByInn(inn: string) {
  return fetch(`${URL}/orders`, {
    method: 'POST',
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      query: inn
    }),
  })
    .then(res => checkResponse(res))
}

