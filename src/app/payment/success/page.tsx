"use client";
import { useRouter } from "next/navigation";
import React from "react";

const PaymentSuccess = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="bg-white p-8 rounded shadow-md max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
          className="w-16 h-16 mx-auto mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h2 className="text-2xl font-semibold text-emerald-600 mb-2 text-center">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          Thank you for your purchase. Your payment was successful.
        </p>
        <div className="flex justify-center">
          <button onClick={()=>router.push("/")} className="bg-emerald-500 text-white px-4 py-2 rounded-full hover:bg-emerald-600 focus:outline-none focus:shadow-outline-emerald active:bg-emerald-700">
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
