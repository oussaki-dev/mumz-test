import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://storage.googleapis.com/mumzrn',
  timeout: 1000,
});

export default apiClient;
