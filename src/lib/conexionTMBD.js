import axios from 'axios';

const axiosBD = axios.create({
    // baseURL: process.env.API_URL_TMBD,
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        // api_key: process.env.API_KEY_TMBD,
        api_key: 'b2c9a0a0ad1419e8401d642829c2fa81'
    },
});

export default axiosBD;