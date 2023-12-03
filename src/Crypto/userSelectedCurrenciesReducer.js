import { createSlice } from "@reduxjs/toolkit";

const userSelectedCurrenciesReducer = createSlice({
  name: "currencies",
  initialState: {
    list: [],
  },
  reducers: {
    addUserCurrency: (state, action) => {
      state.list.push(action.payload);
    },
    removeUserCurrency: (state, action) => {
      state.list = state.list.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addUserCurrency, removeUserCurrency } = userSelectedCurrenciesReducer.actions;
export const currentUserCurrencies = (state) => state.currencies;
export default userSelectedCurrenciesReducer.reducer;
