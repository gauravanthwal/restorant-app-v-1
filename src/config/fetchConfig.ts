import axios from "axios";
import { getFromStorage } from "./storageConfig";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;

const getHeaders = () =>{
    if(getFromStorage("accessToken")){
        return getFromStorage("accessToken")
    }
}

export const axiosClient = axios.create({
    baseURL: BASE_URL, 
    // headers: {
    //     Authorization: `Bearer ${'token'}`
    // }
})


export const axiosClientWithHeaders = axios.create({
    baseURL: BASE_URL, 
    headers: {
        Authorization: `Bearer ${getHeaders()}`
    }
})
