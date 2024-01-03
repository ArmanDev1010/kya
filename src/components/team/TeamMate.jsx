import React from "react";
import { useTranslation } from "react-i18next";

const TeamMate = (props) => {
  const { t } = useTranslation();

  return (
    <a href={`https://www.linkedin.com/in/${t(`team.${props.name}.social`)}`}>
      <li
        className="teammember bg-[#f4f4f5] w-full h-[400px] bg-no-repeat bg-cover bg-center relative rounded-xl flex items-end text-white transition-all ease-in-out duration-200 hover:-translate-y-2"
        style={{
          backgroundImage: `url(/src/assets/team/teammembers/${props.name}.png)`,
        }}
      >
        <div className="relative z-[99] pb-5 px-4">
          <h2 className="text-2xl font-medium mb-1">{t(`team.${props.name}.name`)}</h2>
          <p className="text-[#f4f4f5] text-[15px]">{t(`team.${props.name}.position`)}</p>
        </div>
      </li>
    </a>
  );
};

export default TeamMate;
