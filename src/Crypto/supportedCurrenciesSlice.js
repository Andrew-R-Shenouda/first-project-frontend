import { createSlice } from "@reduxjs/toolkit";

const supportedCurrenciesSlice = createSlice({
  name: "supportedCurrencies",
  initialState: {
    list: [],
  },
  reducers: {
    setSupportedCurrencies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setSupportedCurrencies } = supportedCurrenciesSlice.actions;
export const selectSupportedCurrencies = (state) =>
  state.supportedCurrencies.list;
export default supportedCurrenciesSlice.reducer;
