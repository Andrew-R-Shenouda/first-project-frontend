import { configureStore } from "@reduxjs/toolkit";
import userSelectedCurrenciesReducer from "../Crypto/userSelectedCurrenciesReducer";
import adminSelectedCurrenciesReducer from "../Crypto/adminSelectedCurrienciesReducer";

const store = configureStore({
  reducer: {
    userSelectedCurrenciesReducer,
    adminSelectedCurrenciesReducer,
  },
});

export default store;
