import React, { useContext } from "react";
import { MyContext } from "../../../context/MyContext";

const MenuBtn = () => {
  const { setIs_MenuActive } = useContext(MyContext);

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  return (
    <div className="">
      <div className="h-5">
        <button onClick={menuSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
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
