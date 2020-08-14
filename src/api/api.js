import axios from 'axios';

// Api base config
export default axios.create({
  baseURL: 'http://localhost:5000',
});