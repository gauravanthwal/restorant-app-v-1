import { axiosClient, axiosClientWithHeaders } from "@/config/fetchConfig";


export const getMyOrders = async () => {
  try {
    const res = await axiosClientWithHeaders.get(`/order/getByUserId`);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};

export const createNewOrderService = async (data: any) => {
  try {
    const res = await axiosClientWithHeaders.post(`/order/new`, data);
    console.log(res);

    return res?.data;
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};


