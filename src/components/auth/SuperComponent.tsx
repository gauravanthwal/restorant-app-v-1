"use client";
import { getFromStorage } from "@/config/storageConfig";
import { getTokenFromStorage } from "@/redux/features/authSlice";
import React, { useEffect } from "react";
import Cookie from "js-cookie";
import {useDispatch, useSelector } from "react-redux";
import Notification from "../Notification";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { usePathname, useRouter } from "next/navigation";
import { isNavBarShowing } from "@/config/routeConfig";
import Loader from "../ui/Loader";
import { store } from "@/redux/store";

const SuperComponent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const router = useRouter();

  // const { isLoading } = useSelector((state: any) => state?.auth);
  // const { isLoadingCart } = useSelector((state: any) => state?.cart);
  // const { isLoadingOrder } = useSelector((state: any) => state?.order);
  const accessToken = Cookie.get("token");

  useEffect(() => {}, []);

  if (accessToken) {
    dispatch(getTokenFromStorage(accessToken));
  }

  return (
    <main>
      {isNavBarShowing(pathName) && <Navbar />}
      {isNavBarShowing(pathName) && <Notification />}

      {children}

      {isNavBarShowing(pathName) && <Footer />}
    </main>
  );
};

export default SuperComponent;
