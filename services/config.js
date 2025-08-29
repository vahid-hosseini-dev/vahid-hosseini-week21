import axios from "axios";
import { deleteCookie, getCookie } from "../utils/cookie";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({ baseURL: apiUrl });

api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use((response) => response);
(error) => {
  if (error.response) {
    const status = error.response.status;

    if (status === 400 || status === 401 || status === 403) {
      deleteCookie("token");
      window.location.href = "login";
    }
    return Promise.reject(error);
  }
};
export default api;
