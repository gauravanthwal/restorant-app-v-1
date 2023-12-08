"use client";
import { getProducts } from "@/redux/features/productSlice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CategoryPage = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state: any) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="flex flex-wrap text-red-500">
      {products.length > 0 &&
        products.map((item: any) => (
          <Link
            href={`/product/${item._id}`}
            key={item.id}
            className="w-full flex flex-col justify-between p-4 sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 group even:bg-fuchsia-50"
          >
            {/* Image Container */}
            <div className="relative h-[80%]">
              {item.product_photo && (
                <Image
                  src={item.product_photo}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover w-full"
                />
              )}
            </div>
            {/* Text Container */}
            <div className="flex items-center justify-between font-bold">
              <h1 className="text-2xl uppercase p-2">{item.product_name}</h1>
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
