import axios from 'axios';

const baseUrl = "https://api.hnpwa.com/v0"

function fetchNewsList() {
    return axios.get(`${baseUrl}/news/1.json`);
}


export {
    fetchNewsList,
}