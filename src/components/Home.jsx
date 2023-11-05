import React, { useState } from "react";

import { MyContext } from "../context/MyContext";

import { TopBox, Menu } from "./index";

const Home = () => {
  const [is_MenuActive, setIs_MenuActive] = useState(false);

  return (
    <>
      <MyContext.Provider value={{ is_MenuActive, setIs_MenuActive }}>
        <TopBox />
        <Menu />
      </MyContext.Provider>
    </>
  );
};

export default Home;
