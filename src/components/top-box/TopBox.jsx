import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { phone, location } from "../../assets/images";

import { LanguageSwitcher, MenuBtn, SocialMedia } from "../index";

const TopBox = () => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(false);

  const contactDrop = () => {
    setIsActive((current) => !current);
  };

  return (
    <div className="h-[42px] border border-solid" id="top-box">
      <div className="max-w-[1480px] h-full mx-auto my-0 flex items-center justify-between px-12 max-desktop:px-4">
        <ul className="flex gap-4 text-sm max-desktop:text-[13px] font-semibold">
          {["media", "reviews", "story", "advantages", "partners", "team"].map(
            (text, key) => (
              <li key={key}>
                <a
                  href={`#${text}`}
                  className="transition-opacity ease-in-out duration-200 hover:opacity-75"
                  id={`${text}`}
                >
                  {t(`top_box.${text}`)}
                </a>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
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
              <a href="tel:+37455500533" className="flex items-center gap-1">
                <img
                  src={phone}
                  alt="phone"
                  className="w-[30px] h-[30px] relative top-[2px]"
                />
                <span className="max-small:hidden">+374 55 50 05 33</span>
              </a>
            </li>
            <li className="transition-opacity ease-in-out duration-200 hover:opacity-75">
              <a
                href="https://maps.app.goo.gl/LZdzFtPiL1nAsfPNA"
                className="flex items-center gap-1"
              >
                <img
                  src={location}
                  alt="location"
                  className="w-[26px] h-[26px] max-small:w-6 max-small:h-6"
                />
                <span className="max-small:hidden">Ազատության 24/15</span>
              </a>
            </li>
          </ul>
          <SocialMedia id="nomenu" />
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <MenuBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBox;
