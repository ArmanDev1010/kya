import React from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/logo.png";

const TeamMate = (props) => {
  const { t } = useTranslation();

  return (
    <a href={`https://www.linkedin.com/in/${t(`team.${props.name}.social`)}`}>
      <li className="mate relative flex flex-col items-end transition-all ease-in-out duration-200 hover:-translate-y-2">
        <div className="bg-[#f4f4f5] rounded-xl relative w-full h-full">
          <div
            className="w-full h-[300px] bg-no-repeat bg-cover bg-center relative rounded-xl z-[2]"
            style={{
              backgroundImage: `url(/src/assets/team/teammembers/${props.name}.png)`,
            }}
          ></div>
          <img
            src={logo}
            className="c absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] z-[1]"
            alt=""
          />
        </div>
        <div className="relative z-[99] w-full text-center text-black mt-4">
          <h2 className="text-2xl font-medium mb-1">
            {t(`team.${props.name}.name`)}
          </h2>
          <p className="text-base">{t(`team.${props.name}.position`)}</p>
        </div>
      </li>
    </a>
  );
};

export default TeamMate;
