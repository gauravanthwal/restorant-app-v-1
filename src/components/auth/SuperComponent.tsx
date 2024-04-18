"use client";
import { getFromStorage } from "@/config/storageConfig";
import { getTokenFromStorage } from "@/redux/actions/authAction";
import React, { useEffect } from "react";
import Cookie from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../Notification";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { usePathname, useRouter } from "next/navigation";
import { isNavBarShowing } from "@/config/routeConfig";
import { Toaster } from "react-hot-toast";

const SuperComponent = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const pathName = usePathname();
  const router = useRouter();

  // const { isLoading } = useSelector((state: any) => state?.auth);
  // const { isLoadingCart } = useSelector((state: any) => state?.cart);
  // const { isLoadingOrder } = useSelector((state: any) => state?.order);
  const accessToken = Cookie.get("token");

  useEffect(() => {
    if (accessToken) {
      dispatch(getTokenFromStorage(accessToken));
    }
  }, []);

  return (
    <main>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        gutter={8}
        toastOptions={{
          duration: 5000,
          success: {
            style: {
              background: "#16a34a",
              color: "white",
              padding: "22px",
              minWidth: "300px",
            },
          },
          error: {
            style: {
              background: "#ef4444",
              color: "white",
              padding: "22px",
              minWidth: "300px",
            },
          },
        }}
      />
      {isNavBarShowing(pathName) && <Navbar />}
      {isNavBarShowing(pathName) && <Notification />}

      {children}

      {isNavBarShowing(pathName) && <Footer />}
    </main>
  );
};

export default SuperComponent;
