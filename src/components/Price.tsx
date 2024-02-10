"use client";
import { addCartToDB } from "@/redux/actions/cartAction";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  price: number;
  id: number;
  item: any;
};

const Price = ({ price, id, item }: Props) => {
  const dispatch = useDispatch();

  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(Number(quantity * price));
  }, [quantity, price]);

  const addToCartItem = () => {
    // dispatch(addToCart({ item, total, quantity }));
    const payload = {
      product: item._id,
      quantity
    }
    dispatch(addCartToDB(payload))
  };
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total}</h2>
      {/* Options Container */}
      {/* <div className="flex gap-4">
        {options &&
          options.map((option, index) => (
            <button
              key={option.title}
              className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-md"
              style={{
                background: selected == index ? "rgb(248 113 113)" : "white",
                color: selected == index ? "white" : "rgb(248 113 113)",
              }}
              onClick={() => setSelected(index)}
            >
              {option.title}
            </button>
          ))}
      </div> */}
      {/* Quantity and Add button Container */}
      <div className="flex justify-between items-center">
        {/* Quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* Cart Button */}
        <button
          className="bg-red-500 w-56  uppercase text-white p-3 ring-1 ring-red-500"
          onClick={addToCartItem}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
