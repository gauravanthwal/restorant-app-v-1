"use client";
import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/authSlice";

const Navbar = () => {
  const { isAuth } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-10 xl:px-20">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      {/* LOGO*/}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Restorent</Link>
      </div>
      {/* MOBILE MENU*/}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={"/phone.png"} alt="" width={20} height={20} />
          <span>123 456 7890</span>
        </div>
        {!isAuth ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <>
            <Link href={"/orders"}>Orders</Link>
            <button onClick={logoutUser} className="uppercase">Logout</button>
          </>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
