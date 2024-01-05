import React from "react";
import AboutScrollSection from "./AboutScrollSection";

const AboutScroll = () => {
  return (
    <section
      className="flex gap-10 justify-center items-center p-[50px] bg-white relative flex-col my-0 mx-auto mt-16 max-tablet:py-0 max-tablet:mt-8 max-tablet:mb-16 max-tablet:pr-[10px]
      after:content-[''] after:h-full after:w-[0.5px] after:bg-black after:absolute after:left-[50%] after:transform after:-translate-x-[50%]"
      id="ceo"
    >
        <AboutScrollSection time="balt" />
        <AboutScrollSection time="balttw" />
        <AboutScrollSection time="open" />
        <AboutScrollSection time="two" />
        <AboutScrollSection time="conn" />
    </section>
  );
};

export default AboutScroll;
