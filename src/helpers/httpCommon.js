import axios from "axios";

const $api = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:7000/api/",
  async:true,
  dataType : 'jsonp',   //you may use jsonp for cross origin request
  crossDomain:true
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
  )}`;
  return config;
});

export default $api;
