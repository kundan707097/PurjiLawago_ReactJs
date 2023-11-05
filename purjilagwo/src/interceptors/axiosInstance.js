import axios from 'axios';

// Define the base URL from your environment variable or configuration
const BASE_URL = process.env.REACT_APP_BASE_URL; // Make sure you have REACT_APP_BASE_URL set in your .env file

// Create an Axios instance with a custom configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Accept': 'application/json',
  },
});

// Request interceptor to handle authentication or other custom logic
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;