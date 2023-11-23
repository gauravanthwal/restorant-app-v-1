import axios from "axios";
import { getFromStorage } from "./storageConfig";

const BASE_URL = "http://localhost:5000/api/v1";
// const BASE_URL = "http://localhost:5000/api/v1";

export const axiosClient = axios.create({
    baseURL: BASE_URL, 
    // headers: {
    //     Authorization: `Bearer ${'token'}`
    // }
})


export const axiosClientWithHeaders = axios.create({
    baseURL: BASE_URL, 
    headers: {
        Authorization: `Bearer ${getFromStorage("accessToken")}`
    }
})