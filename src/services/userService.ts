import { axiosClient } from "@/config/fetchConfig";


export const loginService = async (userInfo: any) => {
  try {
    const res = await axiosClient.post(`/user/login`, userInfo);
    // console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
    return err?.response;
  }
};

export const registerService = async (userInfo: any) => {
  try {
    const res = await axiosClient.post(`/user/register`, userInfo);
    // console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
    return err?.response;
  }
};
