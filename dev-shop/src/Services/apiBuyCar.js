import axios from "axios";

const apiBuyCar = axios.create({
    baseURL:'http://localhost:3030/'
});
export default apiBuyCar
