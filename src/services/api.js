import axios from 'axios';
const api = axios.create({
    // baseURL: 'https://connect-app-db.herokuapp.com'
    baseURL: 'http://localhost:5555'
})

export default api;