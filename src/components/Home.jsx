import React, { useState } from "react";

import { MyContext } from "../context/MyContext";

import { TopBox, Menu, Navbar, Main } from "./index";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [is_MenuActive, setIs_MenuActive] = useState(false);
  const { state } = useLocation();
  const { targetId } = state || {};

  const el = document.getElementById(targetId);

  if (el) {
    el.scrollIntoView();
  }

  return (
    <>
      <MyContext.Provider value={{ is_MenuActive, setIs_MenuActive }}>
        <TopBox />
        <Menu />
        <Navbar />
        <Main />
      </MyContext.Provider>
    </>
  );
};

export default Home;
