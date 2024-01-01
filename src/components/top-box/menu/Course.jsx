import React from "react";

import { useTranslation } from "react-i18next";

import { SwiperImgs } from "../../index";

import { AiFillStar } from "react-icons/ai";

import { Link } from "react-router-dom";

const Course = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className="relative w-full h-full text-white text-left overflow-x-hidden bg-no-repeat bg-cover max-desktop:bg-center"
      style={{
        backgroundImage: `url(/src/assets/team/${props.course}.png)`,
        backgroundColor: `${
          props.course === "business"
            ? "#1FBDAF"
            : props.course === "rights"
            ? "#F36967"
            : "#3c6478"
        }`,
      }}
    >
      <div className="h-full w-full" id="course">
        <div className="relative z-[99] px-20 py-20 max-btablet:p-14 max-tablet:p-10 w-full max-btablet:!py-16">
          <h1
            className="big:text-7xl text-6xl font-semibold uppercase mb-16 !leading-[3.5rem] max-desktop:text-5xl
          max-desktop:mb-12 max-btablet:mb-8 max-btablet:!leading-[2.7rem]"
          >
            {t(`top_box.${props.course}.title`)}
          </h1>
          <div className="big:text-xl big:mb-10 mb-6 flex items-center max-btablet:text-base">
            <span className="flex items-center gap-2">
              <AiFillStar color="#FED501" className="!text-[35px]" />
              <p className="big:text-xl text-lg max-btablet:text-base max-tablet:text-[15px]">
                {props.course === "self_knowledge" ? "4.8 / 5" : "4.9 / 5"}
              </p>
            </span>
            <p className="text-xl text-gray-300 mx-4">•</p>
            <span className="">{t(`top_box.${props.course}.duration`)}</span>
            <p className="text-xl text-gray-300 mx-4">•</p>
            <span>{t(`top_box.${props.course}.age`)}</span>
          </div>
          <h2 className="max-w-[800px] big:text-2xl big:mb-12 text-xl mb-8 max-btablet:text-lg">
            {t(`top_box.${props.course}.subtitle`)}
          </h2>
          <div className="flex items-center gap-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc_W2RqT7SljMwJrkuRo0iQuL9ys3I8UM711BBBfgmclVZFJA/viewform"
              target="_blank"
            >
              <button className="big:text-[22px] big:py-4 big:px-6 bg-white text-black font-medium py-3 px-5 text-lg rounded-lg transition-all ease-in-out duration-200 hover:bg-secondary hover:text-white">
                {t(`top_box.${props.course}.signup`)}
              </button>
            </a>
            <Link to={`courses/${props.course}`}>
              <button className="big:text-[22px] big:py-4 big:px-6 bg-transparent text-white border font-medium py-3 px-5 text-lg rounded-lg transition-all ease-in-out duration-200 hover:opacity-75">
                {t(`top_box.${props.course}.learnmore`)}
              </button>
            </Link>
          </div>
          <SwiperImgs course={props.course} />
        </div>
      </div>
    </div>
  );
};

export default Course;
