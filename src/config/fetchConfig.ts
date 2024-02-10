import axios from "axios";
import { getFromStorage } from "./storageConfig";
import Cookie from "js-cookie";
import { store } from "@/redux/store";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1`;

export const axiosClient = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //     Authorization: `Bearer ${'token'}`
  // }
});

export const axiosClientWithHeaders = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //   Authorization: `Bearer ${Cookie.get("token")}`,
  // },
});

// Request interceptor
axiosClientWithHeaders.interceptors.request.use(
  (config) => {
    const state:any = store.getState()
    const accessToken = state?.auth?.user?.token;
    if (accessToken) {
      if (config.headers)
        config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
