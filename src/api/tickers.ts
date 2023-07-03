import Axios from './axios';

const Service = {
  getTopSecurities: data => Axios.get('https://tradernet.ru/api/', {
    params: {
      'q': JSON.stringify(data)
    }
  }),
  getTickerLogo: data => Axios.get(`https://tradernet.ru/logos/get-logo-by-ticker?ticker=${ data }`, {
    responseType: 'arraybuffer'
  }),
};

export default Service;
