import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://192.168.0.104:4000'
});

export default instance;