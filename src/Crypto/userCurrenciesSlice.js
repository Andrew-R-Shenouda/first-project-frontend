import { createSlice } from "@reduxjs/toolkit";

const userCurrenciesSlice = createSlice({
  name: "userCurrencies",
  initialState: {
    list: [],
  },
  reducers: {
    addUserCurrency: (state, action) => {
      state.list.push(action.payload);
    },
    removeUserCurrency: (state, action) => {
      state.list = state.list.filter((currency) => currency.value !== action.payload);
    },
  },
});

export const { addUserCurrency, removeUserCurrency } = userCurrenciesSlice.actions;
export const selectUserCurrencies = (state) => state.userCurrencies.list;
export default userCurrenciesSlice.reducer;
