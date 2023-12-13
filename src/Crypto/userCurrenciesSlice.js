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
    addCurrencyData: (state, action) => {
      const currencyData = action.payload;
      let product_id = currencyData["product_id"];

      if (product_id) {
        let inboundValue = product_id.slice(0, -4);

        var index = -1;
        for (var i = 0; i < state.list.length; i++) {
          if (state.list[i].value === inboundValue) {
            index = i;
          }
        }

        if (index > -1) {
          state.list[index] = {
            ...state.list[index],
            ...currencyData,
          };
        }
      }
    },
  },
});

export const { setUserCurrencies, addCurrencyData } =
  userCurrenciesSlice.actions;
export const selectUserCurrencies = (state) => state.userCurrencies.list;
export default userCurrenciesSlice.reducer;
