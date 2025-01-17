import axios, { AxiosInstance, isAxiosError } from "axios";
import { API_URL } from "../lib/constants";

interface ApiClientOptions {
  baseURL: string;
}

/**
 * Create an Axios instance with baseURL
 *
 * @param {{ baseURL: string }} param0
 * @param {string} param0.baseURL
 * @returns {AxiosInstance}
 */ /**
 *
 *
 * @param {*} error
 */
const ApiClient = (options: ApiClientOptions): AxiosInstance => {
  const instance = axios.create({
    baseURL: options.baseURL,
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      // if unauthorized auto logout
      if (401 === error?.response?.status) {
        throw error;
      }

      // skip login error logging
      if (
        isAxiosError(error) &&
        error.response?.status === 400 &&
        error.config?.method === "post" &&
        error.config?.url?.includes("login")
      ) {
        throw error;
      }

      if (isAxiosError(error) && error.response?.status !== 401) {
        // skip cancelled error logging
        if (error.message === "Query was cancelled by React Query") {
          throw error;
        }

        throw error;
      }

      console.error(error);

      throw error;
    }
  );

  return instance;
};

const setClientToken = (instance: AxiosInstance, token: string) => {
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const removeClientToken = (instance: AxiosInstance) => {
  delete instance.defaults.headers.common["Authorization"];
};

const apiClient = ApiClient({
  baseURL: API_URL ?? "",
});

export { apiClient, removeClientToken, setClientToken };
