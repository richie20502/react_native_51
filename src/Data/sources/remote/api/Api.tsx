import axios from "axios";

const Api  = axios.create({
    baseURL: "http://192.168.0.142:3001/api/",
    headers: {
        'Content-Type' :"application/json"
    }
});

export {
    Api
}