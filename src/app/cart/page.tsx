import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="flex flex-col text-red-500 lg:flex-row">
      {/* Products Container */}
      <div className="wrapper-2 p-4 flex flex-col gap-4 justify-center flex-1 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-10 xl:px-20">
        {/* Single Item */}
        {[1, 1, 2].map((item) => (
          <div className="flex items-center justify-between">
            <Image
              src={"/temporary/p1.png"}
              alt=""
              width={100}
              height={100}
              className=""
            />
            <div className="">
              <h1 className="uppercase text-xl font-bold">sicilian</h1>
              <span>Large</span>
            </div>
            <h2 className="font-bold">$79.00</h2>
            <span className="cursor-pointer">X</span>
          </div>
        ))}
      </div>

      {/* Payments Container */}
      <div className=" h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10 xl:px-20">
        <div className="flex justify-between">
          <span>Subtotal (3 items)</span>
          <span>$81.00</span>
        </div>
        <div className="flex justify-between">
          <span>Service Cost</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Cost</span>
          <span className="text-green-500">FREE</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span>TOTAL (INC. VAT)</span>
          <span className="font-bold">$81.00</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
