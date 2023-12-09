import { createSlice } from "@reduxjs/toolkit";

const userCurrenciesSlice = createSlice({
  name: "userCurrencies",
  initialState: {
    list: [],
  },
  reducers: {
    setUserCurrencies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addUserCurrency, deleteUserCurrency, setUserCurrencies } =
  userCurrenciesSlice.actions;
export const selectUserCurrencies = (state) => state.userCurrencies.list;
export default userCurrenciesSlice.reducer;
