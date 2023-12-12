import axios from "axios";
import { getFromStorage } from "./storageConfig";
import Cookie from 'js-cookie'

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;



export const axiosClient = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //     Authorization: `Bearer ${'token'}`
  // }
});


export const axiosClientWithHeaders = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${Cookie.get('token')}`,
  },
});
