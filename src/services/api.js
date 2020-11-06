import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fipeapi.appspot.com/',
});

export default api;