"use client"
import React, { useState } from 'react';
import logo from "../../../public/assets/logo.svg";
import close from "../../../public/assets/close.svg";
import menu from "../../../public/assets/menu.svg";
import { navLinks } from "../../constant/page";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={logo} alt="hoobank" width={124} height={32} />
      <ul className="text-white list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-normal text-[16px] ${
              i === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div className={`${toggle?"flex":"hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar `}>
        <ul className="text-white list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((nav, i) => (
          <li
            key={nav.id}
            className={`font-normal text-[16px] mb-5 `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
