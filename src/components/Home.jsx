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
      </MyContext.Provider>
    </>
  );
};

export default Home;
