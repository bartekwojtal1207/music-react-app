import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://music-app-e33d1.firebaseio.com/'
});

export default instance;
