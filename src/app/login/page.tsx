"use client";
import { loginUser } from "@/redux/features/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuth } = useSelector((state: any) => state.auth);
  const [formValue, setFormValue] = useState({ email: "", password: "" });
  const { email, password } = formValue;

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e: any) => {
    e.preventDefault();
    try {
      dispatch(loginUser(formValue));
    } catch (err) {}
  };

  useEffect(() => {
    if (isAuth) {
      router.push("/");
    }
  }, [isAuth, router]);

  return (
    <div className="p-4 h-[100vh] flex items-center justify-center">
      {/* Box  */}
      <div className="h-full md:w-[70%] shadow-2xl flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative h-full w-full md:h-full md:w-1/2">
          <Image src={"/loginBg.png"} alt="" fill className="object-cover" />
        </div>
        {/* Form Container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
          <p>Log into your account or create a new one using social buttons</p>

          <button className="flex ring-1 ring-orange-100 border border-black">
            <div className="flex justify-center items-center h-full py-2 px-4">
              <Image
                src={"/google.png"}
                alt=""
                width={30}
                height={30}
                className="object-contain"
              />
            </div>
            <div className="bg-blue-500 hover:opacity-90 text-gray-100 w-full p-4">
              Sign in with Google
            </div>
          </button>

          <div className="">
            <p className="text-center">
              <span className="border-gray-300 border-b">
                Or Sign in with Email
              </span>
            </p>
          </div>

          <form onSubmit={onsubmit}>
            <div className="my-2">
              <label htmlFor="email">Email</label>
              <input
                className="border block w-full px-6 py-4 border-black outline-none"
                type="text"
                value={email}
                id="email"
                name="email"
                placeholder="john.doe@gmail.com"
                onChange={onChange}
              />
            </div>
            <div className="my-4">
              <label htmlFor="password">Password</label>
              <input
                className="border block w-full px-6 py-4 border-black outline-none"
                type="password"
                value={password}
                id="password"
                name="password"
                placeholder="password"
                onChange={onChange}
              />
            </div>
            <button
              type="submit"
              className="flex w-full gap-4 p-4 bg-gray-800 hover:bg-gray-700 transition-all ease-in-out  justify-center"
            >
              <span className="text-white font-bold">Sign in</span>
            </button>
          </form>

          <p className="text-sm text-right hover:text-blue-500">
            <Link className="underline" href="/register">
              Create Account
            </Link>
          </p>
          <p className="text-sm">
            Have a problem?
            <Link className="underline" href="/">
              {" "}
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
