import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const History = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center mb-32 gap-36 max-desktop:gap-16 max-medium:mb-24 max-btablet:flex-col-reverse max-btablet:px-8 max-btablet:mb-24 max-phone:gap-12" id="story">
      <div className="text-center max-w-[580px] max-desktop:max-w-[450px]">
        <h3 className="text-4xl font-bold text-[#222] mb-9 max-phone:text-3xl max-phone:mb-6">
          {t("history.title")}
        </h3>
        <div className="">
          <p className='relative text-7xl font-bold text-[#F2F2F2] mb-4 max-phone:text-6xl after:content-["2016"] after:!h-7 after:text-2xl after:text-black after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2'>
            2016
          </p>
          <p className="text-[#666666] text-[14px] leading-6">
            {t("history.par_1")}
          </p>
        </div>
        <div className="max-phone:hidden">
          <p className='relative text-7xl font-bold text-[#F2F2F2] max-phone:text-6xl mb-4 mt-2 after:content-["2019"] after:!h-7 after:text-2xl after:text-black after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2'>
            2019
          </p>
          <p className="text-[#666666] text-[14px] leading-6">
            {t("history.par_2")}
          </p>
        </div>
        <Link to={`about`}>
          <button className="bg-secondary text-white font-medium py-2 px-6 mt-8 rounded-lg transition-all ease-in-out duration-200 hover:opacity-75">
            {t("history.btn_")}
          </button>
        </Link>
      </div>
      <img
        src="https://kya.am/images/tutors/ceo.jpeg"
        alt=""
        className="w-[400px] max-desktop:w-[350px]"
      />
    </div>
  );
};

export default History;
