"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import CountDown from "./CountDown";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "@/redux/actions/cartAction";
import { getFromStorage } from "@/config/storageConfig";
import Loader from "./ui/Loader";

const Offers = () => {
  const dispatch = useDispatch();
  const { isAuth, user } = useSelector((state: any) => state.auth);
  const { isLoadingCart} = useSelector((state: any) => state.cart);

  useEffect(() => {
      if (user && user?.token) {
        dispatch(fetchCartItems());
      }
  }, []);
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {isLoadingCart && <Loader/>}
      {/* TEXT CONTAINER */}
      <div className="flex-1 w-full flex flex-col justify-center items-center gap-8 p-6">
        <h1 className="text-white text-center text-5xl font-bold lg:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl text-center">
          Progressively simplify effective e-toilers and process-centric methods
          of empowerment. Quickly pontificate parallel.
        </p>
        <CountDown />
        <button className="bg-red-500 text-white rounded-md py-3 px-6">
          Order Now
        </button>
      </div>
      {/* IAMGE CONTAINER */}
      <div className="relative flex-1 w-full md:h-full">
        <Image src="/offerProduct.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offers;
