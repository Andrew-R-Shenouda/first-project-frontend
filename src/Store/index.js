import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import supportedCurrenciesReducer from "../Crypto/supportedCurrenciesSlice";
import userCurrenciesReducer from "../Crypto/userCurrenciesSlice";

const rootReducer = combineReducers({
  supportedCurrencies: supportedCurrenciesReducer,
  userCurrencies: userCurrenciesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
