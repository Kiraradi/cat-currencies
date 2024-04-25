import { ICurrenciesResponse, ICurrency } from "../interfaces/currencies-response";

const URL_SERVER = 'https://api.coinbase.com/v2/currencies';

export const getCurrencies = (): Promise<[ICurrency[], boolean]> => {
    return fetch(URL_SERVER).then(response => {
        return response.ok ? response.json() : response.json().then(err => Promise.reject(err)) ;
    }).then<[ICurrency[], boolean]>(response => {
        const res = response as ICurrenciesResponse;
        return [ res.data, false ]
    })
    .catch(error => {
        return [[], true];
    })
}