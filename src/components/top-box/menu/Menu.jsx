import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";

import { armanthumbnail, samvelthumbnail } from "../../../assets/images";

import Course from "./Course";

import { GrClose } from "react-icons/gr";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Thumbs,
  FreeMode,
  Navigation,
  Pagination,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Menu = () => {
  const { is_MenuActive, setIs_MenuActive } = useContext(MyContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div
      className="fixed z-[99999] h-[100vh] w-full bg-thirdly top-0 right-[-100%] transition-all ease-in-out duration-1000"
      style={is_MenuActive ? { right: "0" } : null}
    >
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={isDesktop <= 801 ? true : false}
        modules={[Autoplay, Thumbs, Pagination]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className="mySwp !w-full !h-full mx-auto"
      >
        <SwiperSlide>
          <Course course="business" color="thirdly" />
        </SwiperSlide>
        <SwiperSlide>
          <Course course="rights" color="primary" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        slidesPerView={1}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwi tablet:w-full tablet:h-full mx-auto max-tablet:hidden"
      >
        <SwiperSlide>
          <img src={armanthumbnail} alt="rigthumbnail" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={samvelthumbnail} alt="rigthumbnail" />
        </SwiperSlide>
      </Swiper>
      <button
        className="absolute top-10 right-10 z-[9999999] max-stablet:top-4 max-stablet:right-4"
        onClick={menuSlide}
        id="menu_btn_icons"
      >
        {isDesktop <= 801 ? (
          <GrClose color="white" size="2em" />
        ) : (
          <GrClose color="black" size="2.4em" />
        )}
      </button>
    </div>
  );
};

export default Menu;
