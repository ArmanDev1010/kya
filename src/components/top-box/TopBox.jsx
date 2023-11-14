import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { LanguageSwitcher, MenuBtn, SocialMedia } from "../index";
import { useNavigate } from "react-router-dom";

const TopBox = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  const contactDrop = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="h-[46px] border border-solid" id="top-box">
      <div className="max-w-[1480px] h-full mx-auto my-0 flex items-center justify-between px-12 max-desktop:px-7 max-phone:px-[20px]">
        <ul className="flex gap-4 text-[14px] max-desktop:text-[13px] font-semibold">
          {["media", "reviews", "story", "advantages", "partners", "team"].map(
            (text, key) => (
              <li
                key={key}
                id={text}
                onClick={() =>
                  navigate("/", { state: { targetId: `${text}` } })
                }
                className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer"
              >
                {t(`top_box.${text}`)}
              </li>
            )
          )}
        </ul>
        <div className="flex gap-6 max-desktop:gap-5 relative max-small:gap-3">
          <div className="hidden max-small:block relative">
            <button
              className="bg-white text-[14px] font-semibold p-1 cursor-pointer flex gap-1 items-center transition-opacity ease-in-out duration-200 hover:opacity-75"
              onClick={contactDrop}
            >
              <span>{t("top_box.contact")}</span>
              <MdOutlineKeyboardArrowDown size="1.3rem" />
            </button>
            <ul className={isActive ? "menu menu_active" : "menu"}>
              <li className="transition-opacity ease-in-out duration-200 hover:opacity-75">
                <a href="tel:+37455500533">+374 55 50 05 33</a>
              </li>
              <li className="transition-opacity ease-in-out duration-200 hover:opacity-75">
                <SocialMedia id="" />
              </li>
            </ul>
          </div>
          <ul className="flex gap-7 items-center relative text-sm max-desktop:text-[13px] max-desktop:gap-3 max-small:text-[14px]">
            <li className="max-small:hidden transition-opacity ease-in-out duration-200 hover:opacity-75">
              <a href="tel:+37455500533" className="flex items-center gap-2">
                <FiPhone size="1.6em" />
                <span className="max-small:hidden">+374 55 50 05 33</span>
              </a>
            </li>
            <li className="transition-opacity ease-in-out duration-200 hover:opacity-75">
              <a
                href="https://maps.app.goo.gl/LZdzFtPiL1nAsfPNA"
                className="flex items-center gap-2"
              >
                <GrLocation size="1.8em" />
                <span className="max-small:hidden">Ազատության 24/15</span>
              </a>
            </li>
          </ul>
          <SocialMedia id="nomenu" />
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <MenuBtn where="topbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
