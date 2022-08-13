import axios from "axios";

const $api = axios.create({
  baseURL: "http://localhost:7000/api/",
  headers: {
    "Content-type": "application/json",
  },
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default $api;
