import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    // baseURL: 'https://burguerappbackend.up.railway.app/api',
    withCredentials: true
});

export default instance
