import axios from 'axios';

const baseURL = '';

const instance = axios.create();

instance.defaults.timeout = 30000;

instance.interceptors.request.use(async config => {
  if (config.url && config.url.charAt(0) === '/') {
    config.url = `${ baseURL }${ config.url }`;
  }

  // config.headers.authorization = `Bearer ${ token }`;

  return config;
}, error => Promise.reject(error));

instance.interceptors.response.use(response => {
  if (response.status === 200) {
    return response;
  }
  return Promise.reject(response);
}, error => {
  if (error) {
    let msg = '';
    if (error.response && error.response.status === 401) {
      msg = error.response.data.msg;
      return;
    }
    msg = 'Error network';
    console.log('\'Error network\':', );
  } else {
    console.log('Something went wrong');
  }
  return Promise.reject(error);
});

export default instance;
