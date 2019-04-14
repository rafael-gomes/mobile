import axios from 'axios';

const api = axios.create({
    baseURL: 'https://rocketseat-project-backend.herokuapp.com',
});

export default api;