import React, { useContext } from "react";
import { MyContext } from "../../../context/MyContext";

import { close } from "../../../assets/images";

import Course from "./Course";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "./swiperstyles/courseswiper.css";
import "swiper/css";
import "swiper/css/pagination";

const Menu = () => {
  const { is_MenuActive, setIs_MenuActive } = useContext(MyContext);

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  return (
    <div
      className="fixed z-[99999] h-[100vh] w-full bg-thirdly top-0 right-[-100%] transition-all ease-in-out duration-1000"
      style={is_MenuActive ? { right: "0" } : null}
    >
      <Swiper
        slidesPerView={1}
        autoplay={{
          delay: 5000000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Course course="business" color="thirdly" />
        </SwiperSlide>
        <SwiperSlide>
          <Course course="right" color="primary" />
        </SwiperSlide>
      </Swiper>
      <button
        className="absolute top-10 right-10 z-[9999999]"
        onClick={menuSlide}
      >
        <img src={close} alt="close" className="w-10 h-10" />
      </button>
    </div>
  );
};

export default Menu;
