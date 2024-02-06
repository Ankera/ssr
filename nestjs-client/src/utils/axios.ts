import axios from 'axios';

const instance = axios.create({
  baseURL: '/api/v1',
  timeout: 600000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
    if(response.status === 200){
      return response.data;
    }
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default instance;
