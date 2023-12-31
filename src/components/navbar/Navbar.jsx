import React, { useContext, useEffect, useState } from "react";
import { logo } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { MenuBtn } from "../index";
import { MyContext } from "../../context/MyContext";

const Navbar = (props) => {
  const { setIs_Click } = useContext(MyContext);
  const navigate = useNavigate();

  const { t } = useTranslation();

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_Click(true);
  };

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  });

  return (
    <div
      className={`headerMain ${scroll ? "sticky bg-white" : "py-4 bg-white"}`}
    >
      <div className="max-w-[1480px] w-full px-12 flex items-center justify-between mx-auto my-0 max-desktop:px-7 max-phone:px-6">
        <Link to={props.coursepage ? "../../" : props.about ? "../" : "./"}>
          <img
            src={logo}
            alt="logo"
            className={`headerMain ${
              scroll ? "w-[65px] h-[65px]" : "w-[70px] h-[70px]"
            }`}
          />
        </Link>
        <ul className="flex gap-12 text-[17px] max-btablet:gap-8 max-btablet:text-base max-stablet:hidden">
          <li className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold">
            <Link
              to={
                props.coursepage ? "../../about" : !props.about ? "./about" : ""
              }
            >
              {t(`navbar.about`)}
            </Link>
          </li>
          {["courses", "contact"].map((text, key) => (
            <li
              key={key}
              onClick={() => linkClick(text)}
              className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold"
            >
              {t(`navbar.${text}`)}
            </li>
          ))}
        </ul>
        <button
          className="cursor-pointer text-[17px] bg-secondary text-white py-3 px-12 z rounded-full font-semibold transition-bg transition-text ease-in-out duration-200 hover:bg-[#e6c000] 
          max-btablet:text-base max-btablet:px-8 max-stablet:hidden"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc_W2RqT7SljMwJrkuRo0iQuL9ys3I8UM711BBBfgmclVZFJA/viewform"
            target="_blank"
          >
            {t(`navbar.sign`)}
          </a>
        </button>
        <MenuBtn where="nav" />
      </div>
    </div>
  );
};

export default Navbar;
