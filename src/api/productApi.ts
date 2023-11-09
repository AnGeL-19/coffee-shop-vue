import axios from "axios";

const productApi = axios.create({
    baseURL: 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'
})

export default productApi;


