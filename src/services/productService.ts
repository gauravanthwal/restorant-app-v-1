import { axiosClient, axiosClientWithHeaders } from "@/config/fetchConfig";


export const getAllProducts = async () => {
  try {
    const res = await axiosClient.get(`/product/all`);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};
export const getProductsById = async (id: any) => {
  try {
    const res = await axiosClient.get(`/product/getById/${id}`);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};

export const getProductsByCategory = async (userInfo: any) => {
  try {
    const res = await axiosClient.post(`/user/register`, userInfo);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};
