import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:58805/api/',
    timeout:  60000
});

export default axiosInstance