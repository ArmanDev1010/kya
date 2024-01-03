import React from "react";
import { useTranslation } from "react-i18next";
import SwiperPartners from "./SwiperPartners";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <div
      className="mb-32 pl-36 box-border max-desktop:pl-16 max-tablet:pl-0 medium:flex medium:gap-16 medium:justify-center medium:items-center"
      id="partners"
    >
      <div className="min-w-[450px] w-[450px] max-medium:pl-0 max-medium:w-[500px] max-tablet:pl-8 max-phone:p-6 max-phone:min-w-full max-phone:w-full">
        <h2 className="text-4xl font-bold text-[#222] mb-9 max-phone:text-3xl max-phone:mb-7">
          {t("partners.title")}
        </h2>
        <p className="text-base text-lg mb-8 max-tablet:text-base max-phone:text-[14px]">
          {t("partners.paragraph")}
        </p>
        <a href="mailto:info.kyacademy@gmail.com">
          <button className="bg-[rgba(243,105,103,.2)] text-primary font-bold px-10 py-3 rounded-full max-stablet:text-[14px] max-stablet:px-8 max-stablet:py-2 transition-all ease-in-out duration-200 hover:opacity-75">
            {t("partners.btn")}
          </button>
        </a>
      </div>
      <SwiperPartners />
    </div>
  );
};

export default Partners;
