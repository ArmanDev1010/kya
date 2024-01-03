import React, { useEffect, useState } from "react";

import { MyContext } from "../context/MyContext";

import {
  TopBox,
  Menu,
  Navbar,
  Main,
  Media,
  Advantages,
  Testimonials,
  History,
  Partners,
  Team,
} from "./index";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [is_MenuActive, setIs_MenuActive] = useState(false);
  const { state } = useLocation();
  const { targetId } = state || {};

  const el = document.getElementById(targetId);

  if (el) {
    el.scrollIntoView({ block: "center" });
  }

  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <>
      <MyContext.Provider
        value={{ is_MenuActive, setIs_MenuActive, isDesktop }}
      >
        <TopBox />
        <Menu />
        <Navbar />
        <Main />
        <Media />
        <Advantages />
        <Testimonials />
        <History />
        <Partners />
        <Team />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.032914905432!2d44.52852287639423!3d40.2083307682963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa37cc08dd0b7%3A0x7c6f4bc122c4446f!2sKY%20Academy!5e0!3m2!1sen!2sam!4v1704294107563!5m2!1sen!2sam"
          width="100%"
          height="350"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        
      </MyContext.Provider>
    </>
  );
};

export default Home;
