import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

import { SwiperImgs } from "../../index";

import { armanbus, samvelrig, star, gradientbg } from "../../../assets/images";

const Course = (props) => {
  const { t } = useTranslation();

  const [isDesktop, setIsDesktop] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 901) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  return (
    <div
      className="relative w-full h-full text-white text-left overflow-x-hidden bg-no-repeat bg-cover max-[1300px]:bg-center max-tablet:text-center"
      style={
        (props.course === "right" && isDesktop) ||
        (props.course === "right" && window.innerWidth >= 901)
          ? {
              backgroundImage: `url('${samvelrig}')`,
              backgroundColor: "#F36967",
            }
          : (props.course === "business" && isDesktop) ||
            (props.course === "business" && window.innerWidth >= 901)
          ? {
              backgroundImage: `url('${armanbus}')`,
              backgroundColor: "#1FBDAF",
            }
          : (props.course === "business" && !isDesktop) ||
            (props.course === "business" && window.innerWidth <= 901)
          ? {
              backgroundImage: `url('${gradientbg}')`,
              backgroundColor: "#1FBDAF",
            }
          : (props.course === "right" && !isDesktop) ||
            (props.course === "right" && window.innerWidth <= 901)
          ? {
              backgroundImage: `url('${gradientbg}')`,
              backgroundColor: "#F36967",
            }
          : null
      }
    >
      <div className="h-full w-full" id="course">
        <SwiperImgs course={props.course} whaswa="top" />
        <div className="relative z-[99] px-20 py-20">
          <h1 className="text-6xl font-semibold uppercase mb-16 max-[1300px]:text-5xl">
            {t(`top_box.${props.course}.title`)}
          </h1>
          <div className="mb-6 flex items-center max-tablet:justify-center">
            <span className="flex items-center gap-2">
              <img src={star} alt="star" className="!w-7 !h-7" />
              <p className="text-lg">4.9 / 5</p>
            </span>
            <p className="text-xl text-gray-300 mx-4">•</p>
            <span>{t(`top_box.${props.course}.duration`)}</span>
            <p className="text-xl text-gray-300 mx-4">•</p>
            <span>{t(`top_box.${props.course}.age`)}</span>
          </div>
          <h2 className="text-xl mb-8">
            {t(`top_box.${props.course}.subtitle_`)}
            <br></br>
            {t(`top_box.${props.course}.subtitle__`)}
          </h2>
          <div className="flex items-center gap-4 max-tablet:justify-center">
            <a href="./" target="_blank">
              <button className="bg-white text-black font-medium py-3 px-5 text-lg rounded-lg transition-all ease-in-out duration-200 hover:bg-secondary hover:text-white">
                {t(`top_box.${props.course}.signup`)}
              </button>
            </a>
            <a href="./" target="_blank">
              <button className="bg-transparent text-white border font-medium py-3 px-5 text-lg rounded-lg transition-all ease-in-out duration-200 hover:opacity-75">
                {t(`top_box.${props.course}.learnmore`)}
              </button>
            </a>
          </div>
          <SwiperImgs course={props.course} whaswa="bottom" />
        </div>
      </div>
    </div>
  );
};

export default Course;
