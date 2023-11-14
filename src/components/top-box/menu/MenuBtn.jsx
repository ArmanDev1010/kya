import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";

const MenuBtn = (props) => {
  const { setIs_MenuActive } = useContext(MyContext);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div
      className=""
      style={
        props.where == "topbox" && isDesktop <= 700
          ? { display: "none" }
          : props.where == "nav" && isDesktop <= 700
          ? { display: "block" }
          : props.where == "nav" && isDesktop >= 700
          ? { display: "none" }
          : props.where == "topbox" && isDesktop >= 700
          ? { display: "block" }
          : null
      }
    >
      <div className="h-5">
        <button onClick={menuSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width={props.where == "topbox" ? "20" : "23"}
            height={props.where == "topbox" ? "20" : "23"}
            viewBox="0 0 50 50"
          >
            <path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuBtn;
