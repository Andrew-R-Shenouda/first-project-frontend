import axios from "axios";
export const BASE_API = process.env.REACT_APP_BASE_API_URL;
export const USERS_API = `${BASE_API}/users`;

const request = axios.create({
  withCredentials: true,
});

export const signin = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};
export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  console.log("account response:", response.data);
  return response.data;
};
export const updateUser = async (user) => {
  const response = await request.put(`${USERS_API}/${user._id}`, user);
  return response.data;
};
export const findAllUsers = async () => {
  const response = await request.get(`${USERS_API}`);
  return response.data;
};
export const createUser = async (user) => {
  const response = await request.post(`${USERS_API}`, user);
  return response.data;
};
export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};
export const deleteUser = async (user) => {
  const response = await request.delete(`${USERS_API}/${user._id}`);
  return response.data;
};
export const signup = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};
export const signout = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};

export const getUserCurrenciesBackend = async (id) => {
  const response = await findUserById(id);
  return response.currencies;
};

export const addUserCurrenciesBackend = async (currency, user) => {
  const updatedCurrencies = [...user.currencies, currency];
  const updatedUser = { ...user, currencies: updatedCurrencies };
  console.log("updated user", updatedUser);
  const response = updateUser(updatedUser);
  return response;
};

export const deleteUserCurrenciesBackend = async (currencyId, user) => {
  user["currencies"] = user["currencies"].filter((c) => c._id !== currencyId);
  const response = updateUser(user);
  return response;
};
