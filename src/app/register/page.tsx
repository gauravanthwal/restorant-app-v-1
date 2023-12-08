"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    profile_photo: "",
  });
  const { email, password, first_name, last_name, phone, profile_photo } =
    formValue;

  const onChange = (e: any) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const onsubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className="p-4 h-[100vh] flex items-center justify-center">
      {/* Box  */}
      <div className="h-full md:w-[70%] shadow-2xl rounded-md flex flex-col md:flex-row">
        {/* Image Container */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src={"/register.jpg"} alt="" fill className="object-cover" />
        </div>
        {/* Form Container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-xl xl:text-3xl">Sign Up</h1>
          <p>Register new account using social buttons</p>

          <form onSubmit={onsubmit}>
            <div className="my-4 flex flex-col md:flex-row justify-between gap-2">
              <div className="">
                <label htmlFor="first_name">First Name</label>
                <input
                  className="border block w-full px-6 py-4 border-black outline-none"
                  type="text"
                  value={first_name}
                  id="first_name"
                  name="first_name"
                  placeholder="John"
                  onChange={onChange}
                />
              </div>
              <div className="">
                <label htmlFor="last_name">Last Name</label>
                <input
                  className="border block w-full px-6 py-4 border-black outline-none"
                  type="text"
                  value={last_name}
                  id="last_name"
                  name="last_name"
                  placeholder="Doe"
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="my-4 flex flex-col md:flex-row justify-between gap-2">
              <div className="">
                <label htmlFor="phone">
                  Mobile{" "}
                  <span className="italic text-gray-400 text-sm">
                    (optional)
                  </span>
                </label>
                <input
                  className="border block w-full px-6 py-4 border-black outline-none"
                  type="text"
                  value={phone}
                  id="phone"
                  name="phone"
                  placeholder="Mobile"
                  onChange={onChange}
                />
              </div>
              <div className="">
                <label htmlFor="profile_photo">
                  Profile Photo{" "}
                  <span className="italic text-gray-400 text-sm">
                    (optional)
                  </span>
                </label>
                <input
                  className="border block w-full px-6 py-3 border-black outline-none"
                  type="file"
                  value={profile_photo}
                  id="profile_photo"
                  name="profile_photo"
                  placeholder="Doe"
                  onChange={onChange}
                />
              </div>
            </div>
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
            <button className="flex w-full gap-4 p-4 bg-gray-800 hover:bg-gray-700 transition-all ease-in-out border-black outline-none justify-center">
              <span className="text-white font-bold">Register</span>
            </button>
          </form>

          <p className="text-sm text-right hover:text-blue-500">
            <Link className="underline" href="/login">
              Sign In
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

export default RegisterPage;
