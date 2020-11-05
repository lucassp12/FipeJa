import axios from 'axios';

const api = axios.create({
  baseURL: 'http://fipeapi.appspot.com/',
});

export default api;