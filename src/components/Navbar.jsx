import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants/data";
import { FaGithub } from "react-icons/fa";
import { CgMenuHotdog } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} bg-background py-5 w-full flex justify-center items-center sticky top-0 z-20`}
    >
      <div className="flex justify-between w-full max-w-7xl items-center mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <p className="text-txtMain text-[18px] font-bold cursor-pointer flex">
            Muditha Batuwangala
          </p>
        </Link>
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((navItem) => (
            <li
              key={navItem.id}
              className={`${
                active === navItem.title ? "text-txtMain" : "text-txtPrimary"
              } hover:text-txtMain cursor-pointer text-[14px] font-medium`}
              onClick={() => {
                setActive(navItem.title);
              }}
            >
              <a
                href={navItem?.id ? `#${navItem.id}` : navItem.url}
                target={navItem?.id ? "_self" : "_blank"}
              >
                {navItem.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex justify-end">
          <button
            className={`${styles.padding} rounded-full flex gap-2 text-[14px] font-medium items-center border-2 border-primary hover:border-background text-primary hover:text-background transition ease-in-out delay-150 hover:bg-primary hover:scale-110 duration-400`}
          >
            <span className="text-[16px]">
              <FaGithub />
            </span>
            GitHub
          </button>
        </div>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <span
            className="text-[35px] font-medium text-txtPrimary"
            onClick={() => setToggle(!toggle)}
          >
            {!toggle ? <CgMenuHotdog /> : <IoClose />}
          </span>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-black absolute sm:top-20 top-24 sm:right-16 right-[26px] my-2 min-w-[140px] z-10 rounded-xl opacity-50 `}
          >
            <ul className="list-none p-6 items-start justify-end flex flex-1 flex-col gap-4">
              {navLinks.map((navItem) => (
                <li
                  key={navItem.id}
                  className={`${
                    active === navItem.title
                      ? "text-txtMain"
                      : "text-txtPrimary"
                  } hover:text-txtMain cursor-pointer text-[14px] font-medium`}
                  onClick={() => {
                    setActive(navItem.title);
                  }}
                >
                  <a href={`#${navItem.id}`}>{navItem.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
