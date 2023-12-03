import { createSlice } from "@reduxjs/toolkit";

const adminSelectedCurrenciesReducer = createSlice({
  name: "currencies",
  initialState: {
    list: [],
  },
  reducers: {
    addAdminCurrency: (state, action) => {
      state.list.push(action.payload);
    },
    removeAdminCurrency: (state, action) => {
      state.list = state.list.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addAdminCurrency, removeAdminCurrency } = adminSelectedCurrenciesReducer.actions;
export const currentAdminCurrencies = (state) => state.currencies;
export default adminSelectedCurrenciesReducer.reducer;
