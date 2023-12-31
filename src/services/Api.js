import axios from 'axios';
import * as util from '../utilities';

const create = (baseURL = util.constants.BASEURL) => {
  const api = axios.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
    },
  });

  const userLoginApi = params => api.post('/auth/login', params);

  const getProductsApi = params => api.get(`/products?skip=${params.skip}`);

  const searchProductApi = params =>
    api.get(`/products/search?q=${params.searchQuery}&skip=${params.skip}`);

  const addProductApi = params => api.post(`/products/add`, params);

  return {
    getProductsApi,
    searchProductApi,
    addProductApi,
    userLoginApi,
  };
};

export default {
  create,
};
