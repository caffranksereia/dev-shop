import axios from "axios";

const apiBuy = axios.create({
    baseURL:"localhost:3030"
});

export default apiBuy;