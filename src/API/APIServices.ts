import { fetchReturn } from './../entity/APIServicesInterface';
import { api_url } from './APIConnection';
import { QuotesInterface } from './../entity/quoteInterface';
import axios from 'axios';


export async function fetchData(id?: string): Promise<fetchReturn>{
  var dataFound: QuotesInterface[] = [];
  var errorFound: { 
    errorExists: boolean, 
    errorMessage: string 
  } = {
    errorExists: false,
    errorMessage: ""
    };

  await axios.get<QuotesInterface[]>(api_url, {
    headers: {
      "Content-Type": "application/json"
    },
  }).then(response => {
      dataFound = response.data;
    }).catch(ex => {
      errorFound.errorExists = true;
      errorFound.errorMessage = ex.response.status === 404  ?"Resource Not found" : "An unexpected error has occurred";
    });

    if(id){
      const dataFromId = dataFound[parseInt(id)]
      
      return {
        dataFromId,
        dataFound,
        errorFound
      }
    } else { 
      const dataFromId = dataFound[0]
      return {

        dataFromId,
        dataFound, 
        errorFound
      };
    }
}

export async function deleteData(id: string) {
  await axios.delete(`${api_url}/${id}`)
  .then(response => {
    alert(`Orçamento de número ${id} deletado!`);
    window.location.reload();
  })
}

export function postData(quote: QuotesInterface) {
  axios.post(api_url, { ...quote })
    .then(response => {
      alert(`Novo orçamento de ${quote.product} pela empresa ${quote.companyName} adicionado com sucesso!`);
      window.location.replace("listQuotes");
    })
}

export function putData(quote: QuotesInterface) {
  axios.put(`${api_url}/${quote.id}`, { ...quote })
    .then(response => {
      alert(`Orçamento do produto ${quote.product} pela empresa ${quote.companyName} alterado com sucesso!`);
      window.location.replace("listQuotes");
    })
}