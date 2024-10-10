import axios from "axios";
import { EMPLOY_URL, EMPLOY_URL_ID } from "../config/url";

export const createEmployOffer = async (data, token) => {
  const formData = new FormData();
  formData.append("position", data.position);
  formData.append("description", data.description);
  formData.append("sector", data.sector);

  if (data.curriculum) {
    formData.append("curriculum", data.curriculum);
  }
  let headers = { "Content-Type": "multipart/form-data" };
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.post(EMPLOY_URL, formData, { headers });
  return res.data;
};

export const getEmploy = async (id) => {
  const res = await axios.get(EMPLOY_URL_ID(id));
  return res.data;
};

export const getAllEmploys = async () => {
  const res = await axios.get(EMPLOY_URL);
  return res.data;
};

export const updateEmployOffer = async (id, data, token) => {
  let headers = undefined;
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.put(EMPLOY_URL_ID(id), data, { headers });
  return res.data;
};

export const deleteEmployOffer = async (id, token) => {
  let headers = undefined;
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.delete(EMPLOY_URL_ID(id), { headers });
  return res.data;
};
