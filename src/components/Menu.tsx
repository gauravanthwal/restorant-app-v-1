"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Menu", url: "/menu" },
  { id: 3, title: "Working Hours", url: "/" },
  { id: 4, title: "Contact", url: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

  //   Temporary
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src={"/open.png"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(!open)}
        />
      ) : (
        <Image
          src={"/close.png"}
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(!open)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full z-10 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-3xl">
          {links.map((link) => (
            <Link key={link.id} href={link.url} onClick={() => setOpen(!open)}>
              {link.title}
            </Link>
          ))}
          {user ? (
            <Link href={"/orders"} onClick={() => setOpen(!open)}>
              Orders
            </Link>
          ) : (
            <Link onClick={() => setOpen(!open)} href={"/login"}>
              Login
            </Link>
          )}
          <Link href={"/cart"} onClick={() => setOpen(!open)}></Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
