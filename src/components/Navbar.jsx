import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants/data";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="bg-background py-5 w-full flex justify-center items-center sticky top-0 z-20">
      <div className="flex justify-between w-full max-w-7xl items-center mx-auto ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scroll(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Muditha Batuwangala
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((navItem) => (
            <li
              key={navItem.id}
              className={`${
                active === navItem.title ? "text-white" : "text-txtPrimary"
              } hover:text-white cursor-pointer text-[14px] font-medium`}
              onClick={() => {
                setActive(navItem.title);
              }}
            >
              <a href={`#${navItem.id}`}>{navItem.title}</a>
            </li>
          ))}
        </ul>
        <div>
          <button></button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
