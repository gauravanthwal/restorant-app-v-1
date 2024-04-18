import { axiosClientWithHeaders } from "@/config/fetchConfig";

export const makePaymentWithStripe = async (payload: any) => {
  try {
    const res = await axiosClientWithHeaders.post(
      "/payment/stripe/create-checkout-session",
      { cartItems: payload }
    );

    if (res?.data?.url) {
      window.location.href = res?.data?.url;
    }
  } catch (err: any) {
    console.log(err.response.data.message);
  }
};
