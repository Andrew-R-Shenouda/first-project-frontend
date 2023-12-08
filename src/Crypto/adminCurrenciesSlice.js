import { createSlice } from "@reduxjs/toolkit";

const adminCurrenciesSlice = createSlice({
  name: "adminCurrencies",
  initialState: {
    list: [],
  },
  reducers: {
    setAdminCurrencies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setAdminCurrencies } = adminCurrenciesSlice.actions;
export const selectAdminCurrencies = (state) => state.adminCurrencies.list; 
export default adminCurrenciesSlice.reducer;
