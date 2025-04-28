// src/api/apiClient.jsx
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_URL || "";

const apiClient = axios.create({
  baseURL: BASE_URL,
});
export default apiClient;
