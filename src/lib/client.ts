import axios from "axios";

export const BASE_URL = "https://lldev.thespacedevs.com/2.2.0";

export const axiosClient = axios.create({
  baseURL: BASE_URL,
});
