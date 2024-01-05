import React from "react";
import { textlogo } from "../../assets";
import FooterLinks from "./FooterLinks";
import { useTranslation } from "react-i18next";
import SocialMedia from "../top-box/SocialMedia";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="max-w-[1480px] my-0 mx-auto p-14 flex">
        <div className="stablet:min-w-[350px] max-stablet:w-full">
          <Link to={"/"}>
            <img src={textlogo} alt="logo" className="w-[230px] mb-8" />
          </Link>
          <p className="font-medium mb-4">{t("footer.place")}</p>
          <div className="my-8 flex flex-col gap-4">
            <SocialMedia footer="true" />
            <a href="tel:+37455500533" className="flex items-center gap-2">
              <span className="text-[17px]">+374 55 50 05 33</span>
            </a>
          </div>
          <p className="text-xs leading-6 text-[#7f7f7f] mb-10 w-[250px]">
            {t("footer.safe")}
          </p>
          <p className="text-base leading-6 text-[#7f7f7f]">
            {t("footer.design")}
            <span className="font-medium text-black">
              <a href="https://www.linkedin.com/in/arman-manukyan-77114b265/">
                {t("footer.me")}
              </a>
            </span>
          </p>
        </div>
        <div className="w-full flex gap-24 pl-32 max-desktop:pl-24 max-desktop:flex-wrap max-desktop:gap-y-12 max-stablet:hidden">
          <FooterLinks title="courses" />
          <FooterLinks title="about" />
          <FooterLinks title="other" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
