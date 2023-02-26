import axios from 'axios';

const api = axios.create({
    baseURL: "http://192.168.0.107:8000",
});

api.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log("\nERRO: ", error); 
        return Promise.reject(error);
    }   
);

export default api;
