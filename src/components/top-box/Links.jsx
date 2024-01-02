import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const Links = () => {
  const { setIs_MenuActive, isDesktop } = useContext(MyContext);

  const navigate = useNavigate();

  const { t } = useTranslation();

  const linkClick = (text) => {
    navigate("/", { state: { targetId: `${text}` } });
    setIs_MenuActive((current) => (current === true ? false : null));
  };

  return (
    <ul
      className="flex gap-4 text-[14px] max-desktop:text-[13px] font-semibold 
    max-tablet:flex-col max-tablet:text-2xl max-tablet:gap-0 max-phone:text-xl"
    >
      <li
        className="hidden transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold 
          max-tablet:block max-tablet:border-b max-tablet:px-10 max-tablet:py-5"
      >
        <Link to={`about`}>{t(`navbar.about`)}</Link>
      </li>
      {["courses", "contact"].map((text, key) => (
        <li
          key={key}
          onClick={() => linkClick(text)}
          className="hidden transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold 
          max-tablet:block max-tablet:border-b max-tablet:px-10 max-tablet:py-5"
        >
          {t(`navbar.${text}`)}
        </li>
      ))}
      {["media", "reviews", "story", "advantages", "partners", "team"]
        .slice(0, isDesktop >= 801 ? 6 : 4)
        .map((text, key) => (
          <li
            key={key}
            onClick={() => linkClick(text)}
            className={`${text} transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer 
            max-tablet:border-b max-tablet:px-10 max-tablet:py-5`}
          >
            {t(`top_box.${text}`)}
          </li>
        ))}
    </ul>
  );
};

export default Links;
