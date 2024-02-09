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
    <div className="h-screen bg-[url('/food2.avif')] bg-cover">
      <div className="flex justify-center items-center h-screen shadow-xl">
        <div className="p-10 flex flex-col gap-8 bg-white max-w-[600px] rounded-lg">
          <h1 className="font-bold text-2xl text-center">Sign Up</h1>
          {/* <p>Register new account using social buttons</p> */}

          <form onSubmit={onsubmit}>
            <div className="my-4 flex flex-col md:flex-row justify-between gap-2">
              <div className="flex-1">
                <label htmlFor="first_name">First Name</label>
                <input
                  className="border block w-full px-6 py-4 border-black outline-none rounded-md"
                  type="text"
                  value={first_name}
                  id="first_name"
                  name="first_name"
                  placeholder="John"
                  onChange={onChange}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="last_name">Last Name</label>
                <input
                  className="border block w-full px-6 py-4 border-black outline-none rounded-md"
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
              <div className="flex-1">
                <label htmlFor="phone">
                  Mobile{" "}
                  <span className="italic text-gray-400 text-sm">
                    (optional)
                  </span>
                </label>
                <input
                  className="border block w-full px-6 py-4 border-black outline-none rounded-md"
                  type="text"
                  value={phone}
                  id="phone"
                  name="phone"
                  placeholder="Mobile"
                  onChange={onChange}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="profile_photo">
                  Profile Photo{" "}
                  <span className="italic text-gray-400 text-sm">
                    (optional)
                  </span>
                </label>
                <input
                  className="border block w-full px-6 py-3 border-black outline-none rounded-md"
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
                className="border block w-full px-6 py-4 border-black outline-none rounded-lg"
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
                className="border block w-full px-6 py-4 border-black outline-none rounded-lg"
                type="password"
                value={password}
                id="password"
                name="password"
                placeholder="password"
                onChange={onChange}
              />
            </div>
            <button className="flex w-full gap-4 p-4 bg-gray-800 hover:bg-gray-700 transition-all ease-in-out border-black outline-none justify-center rounded-lg">
              <span className="text-white font-bold">Register</span>
            </button>
          </form>

          <div className="flex justify-between items-center">
            <p className="text-sm">
              Have a problem?
              <Link className="underline" href="/">
                {" "}
                Contact us
              </Link>
            </p>

            <p className="text-sm text-right hover:text-blue-500">
              <Link className="underline" href="/login">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
