import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { pointing, booking } from "../../assets/images";

const Advantages = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div
      className="mb-24 px-12 font-[sans-serif] flex justify-center items-center gap-[150px] max-desktop:flex-col max-desktop:gap-[40px] max-stablet:px-8"
      id="advantages"
    >
      <img src={isDesktop >= 1351 ? pointing : booking} alt="pointing" />
      <div className="">
        <h1
          className="text-[55px] font-[600] relative"
          style={isDesktop <= 701 ? { fontSize: "max(3vw, 7.5vw)" } : null}
          dangerouslySetInnerHTML={{ __html: t(`advantages.title`) }}
        ></h1>
        <ul className="mt-6 flex flex-col gap-4 max-stablet:gap-6">
          {["knowledge", "surrounding", "expert", "visit", "guest"].map(
            (text, key) => (
              <li key={key} className="flex gap-4">
                <p className="text-[23px] font-[600] text-secondary max-stablet:text-[20px]">
                  {key + 1}
                </p>
                <div className="">
                  <h2 className="text-[20px] uppercase font-[500] max-stablet:text-[19px]">
                    {t(`advantages.${text}.title`)}
                  </h2>
                  <p className="text-[17px] mt-2 text-[#7d7d7d] max-stablet:text-4">
                    {t(`advantages.${text}.paragraph`)}
                  </p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
