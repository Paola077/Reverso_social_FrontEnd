import axios from "axios";

import { EVENT_URL, EVENT_URL_ID } from "../config/url";

export const createEvent = async (data, token) => {
  let headers = undefined;
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.post(EVENT_URL, data, {
    headers,
  });
  return res.data;
};

export const getEvent = async (id, token) => {
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  const res = await axios.get(EVENT_URL_ID(id), { headers });
  return res.data;
};

export const getAllEvents = async () => {
  const res = await axios.get(EVENT_URL);
  return res.data;
};

export const updateEvent = async (id, data, token) => {
  let headers = undefined;
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.put(EVENT_URL_ID(id), data, {
    headers,
  });
  return res.data;
};

export const deleteEvent = async (id, token) => {
  let headers = undefined;
  if (token) {
    headers = { Authorization: `Bearer ${token}` };
  }
  const res = await axios.delete(EVENT_URL_ID(id), {
    headers,
  });
  return res.data;
};
export const subscribeUserToEvent = async (eventId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  const res = await axios.post(`${EVENT_URL_ID(eventId)}/subscribe`, {}, { headers });
  return res.data;
};
export const unsubscribeUserToEvent = async (eventId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  const res = await axios.delete(`${EVENT_URL_ID(eventId)}/unsubscribe`, { headers });
  return res.data;
};