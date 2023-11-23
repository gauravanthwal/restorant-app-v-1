import { axiosClient, axiosClientWithHeaders } from "@/config/fetchConfig";


export const fetchCartService = async () => {
  try {
    const res = await axiosClientWithHeaders.get(`/cart/getByUser`);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};

export const registerService = async (userInfo: any) => {
  try {
    const res = await axiosClient.post(`/user/register`, userInfo);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};
