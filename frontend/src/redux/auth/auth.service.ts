import axios from "axios";
const URL = process.env.REACT_APP_API_URL;
const register = (input: any) => {
  return axios.post(`${URL}/users/create`, input);
};

const login = async (input: any) => {
  const response = await axios.post(`${URL}/auth/login`, input);
  console.log(response.data);
  return response.data.result.accessToken;
};

export const AuthService = {
  register,
  login,
};
