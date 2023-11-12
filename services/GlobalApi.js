// api.js

import Axios from 'axios';

// Create an instance of Axios with custom configurations
const axiosInstance = Axios.create({
  baseURL: 'https://shark-app-fxz4g.ondigitalocean.app/api', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json', 
    // 'Authorization': 'Bearer '+process.env.STRAPI_TOKEN
  },
});

export default axiosInstance;
