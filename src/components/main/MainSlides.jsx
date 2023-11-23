import React from "react";
import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import lilit from "../../assets/images/team/lilittest.png";
import mane from "../../assets/images/team/manetest.png";
import mari from "../../assets/images/team/maritest.png";

const MainSlides = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`w-full h-full bg-${props.color}`}>
      <div className="h-full w-full max-w-[1480px] my-0 mx-auto flex items-center justify-between px-[50px] max-big:justify-center max-desktop:justify-between max-desktop:pl-[70px] max-desktop:pr-[30px] max-medium:pl-[50px] max-tablet:flex-col max-tablet:pl-0 max-tablet:!px-6 max-tablet:!pt-10 overflow-hidden">
        <div
          style={
            props.color == "primary"
              ? { color: "#ffff" }
              : props.color == "secondary" || props.color == "thirdly"
              ? { color: "#222" }
              : null
          }
        >
          <h1 className="text-5xl font-semibold mb-10 !leading-[3.5rem] max-medium:text-4xl max-tablet:!leading-[3.2rem]  max-tablet:mb-6">
            {t(`top_box.${props.course}.title`)}
          </h1>
          <p className="text-xl max-w-[700px] mb-10 leading-[2rem] max-medium:text-base max-tablet:mb-7">
            {t(`top_box.${props.course}.subtitle`)}
          </p>
          <Link to={`courses/${props.course}`}>
            <button
              className="relative cursor-pointer text-[17px] text-white py-3 px-10 rounded-full font-semibold transition-all ease-in-out duration-200 hover:opacity-80 max-medium:py-3 max-medium:px-8 max-medium:text-base"
              style={
                props.color == "primary"
                  ? { background: "#FED501" }
                  : props.color == "secondary"
                  ? { background: "#F36967" }
                  : props.color == "thirdly"
                  ? { background: "#ffff", color: "#222" }
                  : null
              }
            >
              {t(`top_box.${props.course}.learnmore`)}
            </button>
          </Link>
        </div>
        <img
          src={
            props.color == "primary"
              ? mane
              : props.color == "secondary"
              ? lilit
              : props.color == "thirdly"
              ? mari
              : null
          }
          alt="right_img"
          className="h-full overflow-hidden min-w-[430px] max-btablet:!min-w-[390px] max-tablet:max-w-[390px] max-tablet:min-h-[450px]"
        />
      </div>
    </div>
  );
};

export default MainSlides;
