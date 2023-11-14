import React, { useEffect, useState } from "react";
import { logo } from "../assets/images";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { MenuBtn } from "./index";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) { 
        console.log("bottom")
    }
 }

  return (
    <div className="py-6" onScroll={() => handleScroll}>
      <div className="max-w-[1480px] w-full px-12 flex items-center justify-between mx-auto my-0 max-desktop:px-7 max-phone:px-6">
        <img src={logo} alt="logo" className="w-[70px] h-[70px]" />
        <ul className="flex gap-12 text-[17px] max-btablet:gap-8 max-btablet:text-base max-stablet:hidden">
          {["about", "courses", "contact"].map((text, key) => (
            <li
              key={key}
              onClick={() => {
                navigate("/", { state: { targetId: `${text}` } });
              }}
              className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold"
            >
              {t(`navbar.${text}`)}
            </li>
          ))}
        </ul>
        <button
          className="text-[17px] bg-secondary text-white py-3 px-12 z rounded-full font-semibold transition-bg transition-text ease-in-out duration-200 hover:bg-primary hover:text-white 
          max-btablet:text-base max-btablet:px-8 max-stablet:hidden"
        >
          <a href="">{t(`navbar.sign`)}</a>
        </button>
        <MenuBtn where="nav" />
      </div>
    </div>
  );
};

export default Navbar;
