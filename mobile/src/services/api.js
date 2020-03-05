import axios from 'axios';

const api = axios.create({
    baseURL: 'https://lucky-ladybug-84.tunnel.datahub.at',
})

export default api;