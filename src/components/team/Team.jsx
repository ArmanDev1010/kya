import React from "react";
import TeamMate from "./TeamMate";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-24 flex flex-col items-center max-tablet:px-4" id="team">
      <div className="text-center">
        <h2 className="text-5xl font-semibold text-[#222] mb-6 max-tablet:text-4xl">
          {t("team.title")}
        </h2>
        <p className="text-xl text-[#666666] mb-16 max-tablet:text-base">
          {t("team.pretitle")}
        </p>
      </div>
      <ul className="grid grid-cols-[repeat(4,300px)] justify-center gap-8 max-desktop:grid-cols-[repeat(3,300px)] max-medium:grid-cols-[repeat(2,300px)] max-stablet:grid-cols-[repeat(1,1fr)]">
        <TeamMate name="lilit" />
        <TeamMate name="garegin" />
        <TeamMate name="arman" />
        <TeamMate name="samvel" />
        <TeamMate name="armans" />
        <TeamMate name="armanm" />
        <TeamMate name="mari" />
        <TeamMate name="ani" />
        <TeamMate name="mane" />
      </ul>
    </div>
  );
};

export default Team;
