import axios from "axios";

const $api = axios.create({
  baseURL: "http://localhost:7000/api/",
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export default $api;
