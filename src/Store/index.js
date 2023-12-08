import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import adminCurrenciesReducer from "../Crypto/adminCurrenciesSlice";
import userCurrenciesReducer from "../Crypto/userCurrenciesSlice";

const rootReducer = combineReducers({
  adminCurrencies: adminCurrenciesReducer,
  userCurrencies: userCurrenciesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
