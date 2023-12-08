import axios from "axios";
const Currency_Databse_URL = "http://localhost:4000/currencies";
const Market_Data_Request_URL = "http://localhost:4000/marketDataRequest";

export const getCurrencies = async () => {
  const response = await axios.get(`${Currency_Databse_URL}`);
  return response.data;
};


