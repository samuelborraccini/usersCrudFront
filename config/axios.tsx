import axios, { AxiosInstance } from "axios";
const API_BASE_URL = process.env.API_BASE_URL;

const axiosClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
