"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }: {children: React.ReactNode}) => {
  const router = useRouter();
  const { isAuth } = useSelector((state: any) => state.auth);

  useEffect(()=>{
    if(!isAuth){
      router.push('/login')
    }
  },[isAuth])

  // if (!isAuth) {
  //   router.push("/login");
  // } else {
    return children;
  // }
};

export default PrivateRoute;
