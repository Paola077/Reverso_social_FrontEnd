
export const BASE_URL = "http://localhost:3001/api/";

// USER URL
export const USER_REGISTER = BASE_URL + "auth/register";

export const USER_LOGIN = BASE_URL + "auth/login";

// EVENT URL
export const EVENT_URL = BASE_URL + "events"

export const EVENT_URL_ID = (id) => `${EVENT_URL}/${id}`;

//SERVICES URL  

export const SERVICES_URL = BASE_URL + "services"

export const SERVICES_URL_ID = (id) => `${SERVICES_URL}/${id}`;

// EMPLOYS URL

export const EMPLOY_URL = BASE_URL + "employs"

export const EMPLOY_URL_ID = (id) => `${EMPLOY_URL}/${id}`;