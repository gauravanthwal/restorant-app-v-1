import Price from "@/components/Price";
import { singleProduct } from "@/data/data";
import Image from "next/image";
import React from "react";

const SingleProduct = () => {
  return (
    <div className="p-4 lg:px-10 xl:px-20 flex h-screen flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {/* Image Container */}
      <div className="relative w-full h-1/2 md:h-[70%]">
        {singleProduct.img && (
          <Image
            src={singleProduct.img}
            alt=""
            fill
            className="object-contain"
          />
        )}
      </div>
      {/* Text Container */}
      <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
        <h1 className="text-3xl xl:text-4xl font-bold uppercase ">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price price={singleProduct.price} id={singleProduct.id} options={singleProduct.options} item={singleProduct}/>
        <button></button>
      </div>
    </div>
  );
};

export default SingleProduct;
