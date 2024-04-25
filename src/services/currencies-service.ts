import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICurrency } from "../interfaces/currencies-response";
import { getCurrencies } from "../utils/api";

export const getCurrenciesThunk = createAsyncThunk<ICurrency[], void, {rejectValue: boolean}>(
    'currencies/getCurrenciesThunk',
    async (_, thunkAPI) => {
        const [data, hasError] = await getCurrencies();

        if (hasError) {
            return thunkAPI.rejectWithValue(hasError);
        }

        return data;
    }
)

export interface ICurrenciesState {
    currencies: ICurrency[],
    pending : boolean,
    hasError: boolean,
    currentCurrency: ICurrency | null
}

const initialState: ICurrenciesState = {
    currencies: [],
    pending : false,
    hasError: false,
    currentCurrency: null
}


export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        changeCurrentCurrency: (state, action: PayloadAction<ICurrency>) => {
            if (action.payload) {
               state.currentCurrency = action.payload; 
            }
            
        }
    },
    extraReducers: (builder) =>{
        builder
            .addCase(getCurrenciesThunk.pending, (state) => {
                state.pending = true;
                state.hasError = false;
            })
            .addCase(getCurrenciesThunk.fulfilled, (state, action) => {
                state.currencies = action.payload;
                state.pending = false;
                state.hasError = false;
                state.currentCurrency = action.payload[0]
            })
            .addCase(getCurrenciesThunk.rejected, (state) => {
                state.pending = false;
                state.hasError = true;
            })
    }
})

export default currenciesSlice.reducer;