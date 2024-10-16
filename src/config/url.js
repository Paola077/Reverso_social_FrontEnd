
export const BASE_URL = "http://localhost:3001/api/";

export const USER_REGISTER = BASE_URL + "auth/register";

export const USER_LOGIN = BASE_URL + "auth/login";

export const EVENT_URL = BASE_URL + "events"

export const EVENT_URL_ID = (id) => `${EVENT_URL}/${id}`;


export const SERVICES_URL = BASE_URL + "services"

export const SERVICES_URL_ID = (id) => `${SERVICES_URL}/${id}`;


export const EMPLOY_URL = BASE_URL + "employs"

export const EMPLOY_URL_ID = (id) => `${EMPLOY_URL}/${id}`;


export const RESOURCE_URL = BASE_URL + "resources"

export const RESOURCE_URL_ID = (id) =>`${RESOURCE_URL}/${id}`;