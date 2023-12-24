import React from "react";

import { LiaStarSolid } from "react-icons/lia";

import { useTranslation } from "react-i18next";

const Testimonial = (props) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex !h-[300px]"
      style={{ boxShadow: "rgba(0,0,0,0.05) 0px 0px 0px 1px" }}
    >
      <div
        style={{
          backgroundImage: `url(${t(`testimonial.${props.num}.mainIMG`)})`,
        }}
        className="bg-no-repeat bg-cover bg-center h-full flex-[0.4] max-small:flex-[0]"
      ></div>
      <div className="p-8 pt-4 bg-white flex-[0.6] max-small:flex-[1]">
        <div className="flex gap-4">
          <div
            style={{
              backgroundImage: `url(${t(`testimonial.${props.num}.parent`)})`,
            }}
            className="bg-no-repeat bg-cover bg-center w-12 h-12 rounded-full"
          ></div>
          <div className="">
            <h3>{t(`testimonial.${props.num}.name`)}</h3>
            <ul className="flex gap-[1px] mt-1">
              {["", "", "", "", ""].map((id, key) => (
                <li key={key}>
                  <LiaStarSolid size="1.1em" color="#FED501" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="elip mt-5">{t(`testimonial.${props.num}.paragraph`)}</p>
      </div>
    </div>
  );
};

export default Testimonial;
