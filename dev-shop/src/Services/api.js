import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/",
    client_id:"client_id",
    client_secret:"client_secret"
});
export default api;