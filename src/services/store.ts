import { configureStore } from "@reduxjs/toolkit";
import currenciesReducer, { ICurrenciesState } from './currencies-service';
import { useDispatch } from "react-redux";

export interface IStoreState {
    currencies: ICurrenciesState
}

export const store = configureStore({
    reducer: {
        currencies: currenciesReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();