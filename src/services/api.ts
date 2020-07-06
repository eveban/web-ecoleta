import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ecoleta.pitstopcabines.com.br',
});

export default api;
