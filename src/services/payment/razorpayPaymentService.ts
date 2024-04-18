import { axiosClientWithHeaders } from "@/config/fetchConfig";
import { initializeRazorpay } from "@/config/razorpayConfig";


export const makePaymentWithRazorpayService = async (
  paymentDetails: any,
  setLoader: any
) => {
  const res = await initializeRazorpay();

  if (!res) {
    alert("Razorpay SDK Failed to load");
    setLoader(false);
    return;
  }


  let data;
  try {
    data = await axiosClientWithHeaders.post('/payment/pay-with-razorpay', {productDetails: paymentDetails})
  } catch (err) {
    console.log("Unable to load Razorpay");
  }
  console.log("data", data?.data);

  var options = {
    key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
    name: "Test Payment",
    currency: data?.data?.currency,
    amount: data?.data?.amount,
    order_id: data?.data?.id,
    description: "Thankyou for Buying our course",
    image: "https://manuarora.in/logo.png",
    handler: async function (response: any, err: any) {
      if (err) {
        return console.error("erro", err);
      }
      console.log("*************", response);

      //   const userDetails = getFromStorage("userDetails");
      const savePaymentPayload = {
        price: paymentDetails?.price,
        courseName: paymentDetails?.courseName,
        // userId: user?._id,
        // email: user?.email,
        // fullName: user?.fullName,
        // mobile: user?.mobile,
        razorpay_order_id: response?.razorpay_order_id,
        razorpay_payment_id: response?.razorpay_payment_id,
        razorpay_signature: response?.razorpay_signature,
      };

      await savePaymentDetailsService(savePaymentPayload);
      // Validate payment at server - using webhooks is a better idea.
    },
    prefill: {
    //   name: user?.fullName,
    //   email: user?.email,
    //   contact: user?.mobile,
    },
  };
  setLoader(false);
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};




 const savePaymentDetailsService = async (payload: any) => {
    try {
    //   const res = await axios.post(BASE_URL + "/api/payment/create", payload);
      const res = await axiosClientWithHeaders.post('/payment/savePayment', payload)
  
      console.log("********", res);
      return res;
    } catch (err: any) {
      console.log("********", err.response);
      return err.response;
    }
  };