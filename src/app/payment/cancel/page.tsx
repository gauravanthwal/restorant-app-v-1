"use client";
import { useRouter } from 'next/navigation'
import React from 'react'

const PaymentCancel = () => {
  const router = useRouter();
  return (
    <div className=" flex items-center justify-center mt-16">
    <div className="bg-white p-8 rounded shadow-md max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="red"
        className="w-16 h-16 mx-auto mb-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <h2 className="text-2xl font-semibold text-rose-500 mb-2 text-center">
        Payment Canceled
      </h2>
      <p className="text-gray-600 mb-6 text-center">
        Your payment has been canceled. If you have any questions, please
        contact our support team.
      </p>
      <div className="flex justify-center">

      <button onClick={()=>router.push("/")} className="bg-rose-500 text-white px-4 py-2 rounded-full hover:bg-rose-600 focus:outline-none focus:shadow-outline-rose active:bg-rose-700">
        Return to Home
      </button>
      </div>
    </div>
  </div>
  )
}

export default PaymentCancel