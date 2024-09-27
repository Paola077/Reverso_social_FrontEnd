import axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "../config/url";

export const userLogin = async (data) => {
  const res = await axios.post(USER_LOGIN, data);
  return res.data;
};

export const userRegister = async (data) => {
  const res = await axios.post(USER_REGISTER, data);
  return res.data;
};
