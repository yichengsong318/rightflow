const PROTOCOL = "http";
const RFL_API_BASE_DOMAIN_PROD = "betarflapi.rightcom.co";
const RFL_API_BASE_DOMAIN_DEV = "betarflapi.right-com.com";
const RFL_API_BASE_DOMAIN_LOCAL = "localhost:4001";
const RFL_API_SERVICE_PATH_PROD = "/api/v1";
const RFL_API_SERVICE_PATH_DEV = "/api/v1";
const RFL_API_SERVICE_PATH_LOCAL = "/api/v1";
const RFL_SOCKET_BASE_DOMAIN_PROD = "betarflapi-socket.rightcom.co";
const RFL_SOCKET_BASE_DOMAIN_DEV = "betarflapi-socket.right-com.com";
const RFL_SOCKET_BASE_DOMAIN_LOCAL = "localhost:4001";
const RFL_SOCKET_SERVICE_PATH_PROD = "/myrfl";
const RFL_SOCKET_SERVICE_PATH_DEV = "/myrfl";
const RFL_SOCKET_SERVICE_PATH_LOCAL = "/myrfl";

export const APP_ENV = "LOCAL"; // DEV, PROD, LOCAL
export const DEBUG = true;
export const TIMEOUT_HTTP_REQUEST = 3000;
export const TIMEOUT_SOCKET_RESPONSE = 5000;

export const NAVIGATION = {
  HOME: "/",
  LOGIN: "/login",
  ONBOARDING: "/onboarding",
  APP: "/app",
  DASHBOARD: "/app/dashboard",
  APP_ONBOARDING: "/app/onboarding",
  NOT_FOUND: "/404",
  FORBIDDEN: "/403",
  INTERNAL_ERROR: "/500"
};

export const LOCAL_STORAGE_LANG_KEY = "RFL_LKEY";

export const LANGUAGES = [
  {
    key: "en",
    name: "english"
  },
  {
    key: "fr",
    name: "french"
  }
];

export const API = {
  BASE_URL:
    APP_ENV === "DEV"
      ? `${PROTOCOL}://${RFL_API_BASE_DOMAIN_DEV}${RFL_API_SERVICE_PATH_DEV}`
      : APP_ENV === "PROD"
      ? `${PROTOCOL}://${RFL_API_BASE_DOMAIN_PROD}${RFL_API_SERVICE_PATH_PROD}`
      : APP_ENV === "LOCAL"
      ? `${PROTOCOL}://${RFL_API_BASE_DOMAIN_LOCAL}${RFL_API_SERVICE_PATH_LOCAL}`
      : "",
  SIGNIN: "/signin",
  CHECK_SESSION: "/decoder"
};

export const SOCKET = {
  BASE_URL:
    APP_ENV === "DEV"
      ? `${RFL_SOCKET_BASE_DOMAIN_DEV}${RFL_SOCKET_SERVICE_PATH_DEV}`
      : APP_ENV === "PROD"
      ? `${RFL_SOCKET_BASE_DOMAIN_PROD}${RFL_SOCKET_SERVICE_PATH_PROD}`
      : APP_ENV === "LOCAL"
      ? `${RFL_SOCKET_BASE_DOMAIN_LOCAL}${RFL_SOCKET_SERVICE_PATH_LOCAL}`
      : ""
};
