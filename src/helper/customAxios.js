import axios from 'axios';
const instance = axios.create({
     baseURL: 'https://mekmar-aws-service.mekmar.com',
     //baseURL: 'http://localhost:5001/',
     headers: {
          'Access-Control-Allow-Origin': '*',
     }
})
export default instance;
