"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewOrder } from "@/redux/features/orderSlice";
import { fetchCartItems, removeCartFromDB } from "@/redux/features/cartSlice";

const CartComponent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state?.cart?.cartItems);

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (sum: number, item: any) => sum + item.product.price * item.quantity,
      0
    );
  };

  const removeItemFromCart = (product: string) => {
    dispatch(removeCartFromDB(product));
  };

  const orderNow = () => {
    if (cartItems.length > 0) {
      cartItems.forEach((item: any) => {
        const payload = {
          product_id: item.product._id,
          quantity: item.quantity,
        };
        dispatch(createNewOrder(payload));
      });
    }
  };

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);
  return (
    <div className="flex flex-col text-red-500 lg:flex-row">
      {/* Products Container */}
      <div className="wrapper-2 p-4 flex flex-col gap-4 justify-center flex-1 lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-10 xl:px-20">
        {/* Single Item */}
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((item: any, i: number) => (
            <div
              key={item.product._id}
              className="flex items-center justify-between"
            >
              <Image
                src={`${
                  item?.product?.product_photo
                    ? item?.product?.product_photo
                    : "/temporary/p1.png"
                }`}
                alt=""
                unoptimized
                width={100}
                height={100}
                className="w-[100px] h-[100px] rounded-3xl object-cover"
              />
              <div className="">
                <h1 className="uppercase text-xl font-bold">
                  {item?.product?.product_name}
                </h1>
                <span>Qty: {item.quantity}</span>
              </div>
              <h2 className="font-bold">${item?.product?.price?.toFixed(2)}</h2>
              <button onClick={() => removeItemFromCart(item.product._id)}>
                <span className="cursor-pointer">X</span>
              </button>
            </div>
          ))}
      </div>

      {/* Payments Container */}
      {cartItems && cartItems.length > 0 && (
        <div className=" h-1/2 p-4 bg-fuchsia-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-10 xl:px-20">
          <div className="flex justify-between">
            <span>Subtotal ({cartItems.length} items)</span>
            <span>${calculateTotalPrice()?.toFixed(2)}</span>
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
            <span className="font-bold">
              ${calculateTotalPrice()?.toFixed(2)}
            </span>
          </div>
          <button
            onClick={orderNow}
            className="bg-red-500 text-white p-3 rounded-md w-1/2 self-end"
          >
            CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
};

export default CartComponent;
