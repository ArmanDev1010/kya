import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const navigate = useNavigate();

  const { t } = useTranslation();

  return (
    <ul
      className="flex gap-4 text-[14px] max-desktop:text-[13px] font-semibold 
    max-tablet:flex-col max-tablet:text-2xl max-tablet:gap-0 max-phone:text-xl"
    >
      {["about", "courses", "contact"].map((text, key) => (
        <li
          key={key}
          onClick={() => {
            navigate("/", { state: { targetId: `${text}` } });
          }}
          className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer font-semibold max-tablet:border-b max-tablet:px-10 max-tablet:py-5"
        >
          {t(`navbar.${text}`)}
        </li>
      ))}
      {["media", "reviews", "advantages"].map(
        (text, key) => (
          <li
            key={key}
            onClick={() => navigate("/", { state: { targetId: `${text}` } })}
            className="transition-opacity ease-in-out duration-200 hover:opacity-75 cursor-pointer 
            max-tablet:border-b max-tablet:px-10 max-tablet:py-5"
          >
            {t(`top_box.${text}`)}
          </li>
        )
      )}
    </ul>
  );
};

export default Links;
