import axios from 'axios';

const instance = axios.create({
    baseURL: "https://nameless-river-96118.herokuapp.com",
});

export default instance;