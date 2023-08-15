import axios from 'axios';
import { Navigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT;

axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response.status === 500 && error.response.data.message === "JWT expired") {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
});

export default axios;