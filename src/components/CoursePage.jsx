import React from "react";
import { TopBox, Menu, Navbar, AboutScroll, Footer } from "./index";

const CoursePage = () => {
  return (
    <>
      <TopBox />
      <Menu coursepage={true} />
      <Navbar coursepage={true} />
    </>
  );
};

export default CoursePage;
