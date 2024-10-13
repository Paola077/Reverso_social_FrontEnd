import axios from "axios";

import { SERVICES_URL, SERVICES_URL_ID } from "../config/url";

export const createService = async (data, token) => {
    let headers = undefined;
    if (token) {
      headers = { Authorization: `Bearer ${token}` };
    }
    const res = await axios.post(SERVICES_URL, data, {
      headers,
    });
    return res.data;
  };

  export const getService = async (id) => {
    const res = await axios.get(SERVICES_URL_ID(id));
    return res.data;
  };

  export const getAllServices = async () => {
    const res = await axios.get(SERVICES_URL);
    return res.data;
  };

  export const updateService = async (id, data, token) => {
    let headers = undefined;
    if (token) {
      headers = { Authorization: `Bearer ${token}` };
    }
    const res = await axios.put(SERVICES_URL_ID(id), data, {
      headers,
    });
    return res.data;
  };

  export const deleteService = async (id, token) => {
    let headers = undefined;
    if (token) {
      headers = { Authorization: `Bearer ${token}` };
    }
    const res = await axios.delete(SERVICES_URL_ID(id), {
      headers,
    });
    return res.data;
  };
  
