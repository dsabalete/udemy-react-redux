import axios from 'axios';

const KEY = 'AIzaSyAI3bcUjE3G1a2MXStf0cpmHsqy14GQW-0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    } 
})