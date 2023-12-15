import axios from "axios";
const Supported_Currencies_URL = "http://localhost:4000/supportedCurrencies";
const currencies_url = "http://localhost:4000/currency";
const User_Currencies_URL = "http://localhost:4000/userCurrencies";

export const getSupportedCurrenciesBackend = async () => {
  const response = await axios.get(`${currencies_url}`);
  return response.data;
};

// export const getUserCurrenciesBackend = async () => {
//   const response = await axios.get(`${User_Currencies_URL}`);
//   return response.data;
// };

// export const addUserCurrenciesBackend = async (currency) => {
//   const response = await axios.post(
//     `${User_Currencies_URL}/${currency.label}/${currency.value}`
//   );
//   return response.data;
// };

// export const deleteUserCurrenciesBackend = async (currency) => {
//   const response = await axios.delete(
//     `${User_Currencies_URL}/${currency.value}`
//   );
//   return response.data;
// };
