import axios from "axios";

const api = axios.create({
    baseURL: "https://api.github.com/",
    client_id:"0e8bd66e4c42bf4583c8",
    client_secret:"4d13bd07fa369ec225ce29128982a4ef9f20d773"
});
export default api;