import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HistoryPart = (props) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-end max-stablet:flex-col-reverse">
      <div
        className="bg-[#f4f4f5] w-[570px] 
      min-h-[250px] h-[300px] rounded-tl-[100px] grid place-content-center max-stablet:block text-left p-8 max-medium:flex-1 max-stablet:rounded-tl-none max-stablet:w-full max-stablet:flex-1 max-tablet:py-6"
      >
        <p className={props.part !== "balt" ? "elipp" : null}>
          {t(`about.${props.part}.paragraph`)}
        </p>
        {props.part !== "balt" ? (
          <Link to={`about`}>
            <button className="absolute bg-secondary text-white font-medium py-2 px-6 mt-8 rounded-lg transition-all ease-in-out duration-200 hover:opacity-75">
              {t("history.btn_")}
            </button>
          </Link>
        ) : null}
      </div>
      <div
        style={{
          backgroundImage: `url(./src/assets/about/${
            props.part == "two" || props.part == "conn"
              ? props.part + ".png"
              : props.part + ".jpg"
          })`,
        }}
        className="flex-1 h-[350px] bg-gray-600 bg-no-repeat bg-cover bg-center max-medium:!h-[300px] max-stablet:!flex-none max-stablet:w-full max-stablet:!h-[200px]"
      ></div>
    </div>
  );
};

export default HistoryPart;
