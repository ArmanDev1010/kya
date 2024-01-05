import React from "react";
import { ytlogo } from "../../assets";
import { useTranslation } from "react-i18next";

const MediaLink = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-full relative">
        <a href={`https://www.youtube.com/watch?v=${props.yt}`} target="_blank">
          <div
            style={{
              backgroundImage: `url(${
                props.ima
                  ? `./src/assets/about/${props.ima}.jpg`
                  : `https://img.youtube.com/vi/${props.yt}/maxresdefault.jpg`
              })`,
            }}
            className="w-full h-full relative bg-no-repeat bg-cover bg-center w-full h-full rounded-3xl pointer-events-none max-phone:rounded-none"
          >
            <div className="absolute top-5 left-5 flex items-center gap-4 overflow-hidden max-w-full">
              <img
                src={t(`media.${props.yt}.img`)}
                className="bg-white w-[40px] h-[40px] rounded-full"
                alt=""
              />
              <p className="ey text-white text-[19px]">
                {t(`media.${props.yt}.title`)}
              </p>
            </div>
            <img
              src={ytlogo}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px]"
              alt="YouTube_logo"
            />
          </div>
        </a>
      </div>
    </>
  );
};

export default MediaLink;
