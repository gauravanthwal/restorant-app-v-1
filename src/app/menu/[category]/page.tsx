"use client";
import { pizzas } from "@/data/data";
import { addToCart } from "@/redux/features/cartSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {

  return (
    <div className="flex flex-wrap text-red-500">
      {pizzas.map((item) => (
        <Link
          href={`/product/${item.id}`}
          key={item.id}
          className="w-full flex flex-col justify-between p-4 sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 group even:bg-fuchsia-50"
        >
          {/* Image Container */}
          <div className="relative h-[80%]">
            {item.img && (
              <Image src={item.img} alt="" fill className="object-contain" />
            )}
          </div>
          {/* Text Container */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            {/* <p className="group-hover:hidden text-xl">${item.price}</p> */}
            <p className="text-xl">${item.price}</p>
            {/* <button
              onClick={() => addToCartItem(item)}
              className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md"
            >
              Add to Cart
            </button> */}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
