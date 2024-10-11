import axios from "axios";

import { RESOURCE_URL, RESOURCE_URL_ID } from "../config/url";

export const createResource = async (data, token) => {
  const formData = new FormData();
  data.title ? formData.append("title", data.title) : null;
  data.url ? formData.append("url", data.url) : null;
  data.description ? formData.append("description", data.description) : null;
  data.file ? formData.append("file", data.file) : null;

  let headers = { "Content-Type": "multipart/form-data" };
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.post(RESOURCE_URL, formData, {
    headers,
  });
  console.log(data);
  return res.data;
};

export const getResourceById = async (id) => {
  const res = await axios.get(RESOURCE_URL_ID(id));
  return res.data;
};

export const getAllResources = async () => {
  const res = await axios.get(RESOURCE_URL);
  return res.data;
};

export const updateResource = async (id, data, token) => {
  const formData = new FormData();
  data.title ? formData.append("title", data.title) : null;
  data.url ? formData.append("url", data.url) : null;
  data.description ? formData.append("description", data.description) : null;
  data.file ? formData.append("file", data.file) : null;

  let headers = { "Content-Type": "multipart/form-data" };
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.put(RESOURCE_URL_ID(id), formData, {
    headers,
  });
  return res.data;
};

export const deleteResource = async (id, token) => {
  let headers = undefined;
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.delete(RESOURCE_URL_ID(id), {
    headers,
  });
  return res.data;
};
