import React from "react";
import { useTranslation } from "react-i18next";

const HistoryPart = (props) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-end max-stablet:flex-col-reverse">
      <div
        className="bg-[#f4f4f5] w-[570px] 
      min-h-[250px] h-[300px] rounded-tl-[100px] grid place-content-center text-left p-8 max-medium:flex-1 max-stablet:rounded-tl-none max-stablet:w-full max-stablet:flex-1 max-tablet:py-6"
      >
        <p className="elip">{t(`about.${props.part}.paragraph`)}</p>
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
