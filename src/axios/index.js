import axios from "axios";

const appAxios = axios.create({
    baseURL: 'http://localhost:5000/imuz',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default appAxios;