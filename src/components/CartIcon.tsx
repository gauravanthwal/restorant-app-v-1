"use clinet"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const {cartItems} = useSelector((state:any)=> state.cart)
  return (
    <Link href={"/cart"} className="flex items-center gap-4">
      <div className="relative h-8 w-8 md:w-5 md:h-5">
        <Image src={"/cart.png"} alt="" fill />
      </div>
      <span>Cart ({cartItems?.length})</span>
    </Link>
  );
};

export default CartIcon;
