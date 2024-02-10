"use client";
import Price from "@/components/Price";
import { singleProduct } from "@/data/data";
import { getProductById } from "@/redux/actions/productAction";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { currentProduct } = useSelector((state: any) => state.product);

  const { id } = params;

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div className="p-4 lg:px-10 xl:px-20 flex h-screen flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center">
      {currentProduct._id && (
        <>
          {/* Image Container */}
          <div className="relative w-full h-1/2 md:h-[70%]">
            {currentProduct.product_photo && (
              <Image
                src={currentProduct.product_photo}
                alt=""
                fill
                unoptimized
                className="object-contain"
              />
            )}
          </div>
          {/* Text Container */}
          <div className="h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8">
            <h1 className="text-3xl xl:text-4xl font-bold uppercase ">
              {currentProduct.product_name}
            </h1>

            <p>
              Ignite your taste buds with a fiery combination of spicy
              pepperoni, jalapeños, crushed red pepper flakes, and melted
              mozzarella cheese, delivering a kick with every bite.
            </p>
            {currentProduct && (
              <Price
                price={currentProduct?.price}
                id={currentProduct?._id}
                item={currentProduct}
              />
            )}
            <button></button>
          </div>
        </>
      )}
    </div>
  );
};

export default SingleProduct;
