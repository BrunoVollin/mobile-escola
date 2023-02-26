import axios from 'axios';
import TokenStorage from './storage/TokenStorage';

const api = axios.create({
    baseURL: "http://192.168.0.107:8000",

});

api.interceptors.request.use(
    async config => {
        const tokenStorage = new TokenStorage();
        const token = await tokenStorage.getToken();
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        console.log("\nERRO: ", error);
        return Promise.reject(error);
    }
);

export default api;
