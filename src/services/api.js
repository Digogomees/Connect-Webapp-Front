import axios from 'axios';
// baseURL: 'http://localhost:5555'
const api = axios.create({
    baseURL: 'https://connect-app-db.herokuapp.com'
})

export default api;