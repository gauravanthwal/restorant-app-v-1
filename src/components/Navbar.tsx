"use client";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/features/authSlice";
import { resetCartItems } from "@/redux/features/cartSlice";
import { resetOrders } from "@/redux/features/orderSlice";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state: any) => state?.auth && state.auth);
  const { cartItems } = useSelector((state: any) => state?.cart && state.cart);

  const logoutUser = () => {
    dispatch(logout());
    dispatch(resetCartItems());
    dispatch(resetOrders());
    router.push("/login");
  };
  return (
    <div className="h-12 md:h-24 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase lg:px-10 xl:px-20">
      {/* LOGO*/}
      <div className="text-xl md:font-bold ">
        <Link href={"/"}>Restorent</Link>
      </div>

      {/* MOBILE MENU*/}
      <div className="md:hidden">
        <Menu />
      </div>

      {/* LEFT LINKS
      <div className="hidden md:flex gap-4 flex-1">
        <Link href={"/"}>Home</Link>
        <Link href={"/menu"}>Menu</Link>
        <Link href={"/"}>Contact</Link>
      </div> */}

      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src={"/phone.png"} alt="" width={20} height={20} />
          <span>123 456 7890</span>
        </div>
        {!isAuth ? (
          <>
            <Link href={"/login"}>Login</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
          </>
        ) : (
          <>
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            {cartItems && <CartIcon cartLength={cartItems?.length} />}
            <ProfileDropdown logoutUser={logoutUser} />
          </>
        )}
      </div>
    </div>
  );
};

const ProfileDropdown = ({ logoutUser }: any) => {
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <div className="relative">
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? XBar : MenuBar}
      </button>

      {showMenu && (
        <div className="absolute flex flex-col bg-gray-800 text-white p-4 w-[160px] justify-center right-0 z-50">
          <Link
            href={"/orders"}
            className="my-2 hover:underline  text-center"
            onClick={closeMenu}
          >
            Orders
          </Link>
          <button
            onClick={logoutUser}
            className="uppercase my-2 hover:underline"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const MenuBar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
      clipRule="evenodd"
    />
  </svg>
);

const XBar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6"
  >
    <path
      fillRule="evenodd"
      d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export default Navbar;
