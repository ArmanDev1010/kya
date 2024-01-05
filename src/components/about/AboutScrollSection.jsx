import React from "react";
import { useTranslation } from "react-i18next";

const AboutScrollSection = (props) => {
  const { t } = useTranslation();
  return (
    <div className="grid items-center grid-rows-auto grid-cols-[1fr_5rem_1fr] auto-cols-[1fr] py-4 max-tablet:flex max-tablet:flex-col-reverse max-tablet:!p-0 max-tablet:relative max-tablet:mt-8">
      <div className="max-w-[400px] mt-5">
        <h2 className="text-6xl mb-6 font-semibold max-tablet:text-5xl">
          {t(`about.${props.time}.year`)}
        </h2>
        <p className="">
        {t(`about.${props.time}.paragraph`)}
        </p>
      </div>
      <div className="line">
        <div className="circle"></div>
      </div>
      <img
        src={`./src/assets/about/${
          props.time == "two" || props.time == "conn"
            ? props.time + ".png"
            : props.time + ".jpg"
        }`}
        className="w-full max-w-[350px]"
        alt={props.time}
      />
    </div>
  );
};

export default AboutScrollSection;
