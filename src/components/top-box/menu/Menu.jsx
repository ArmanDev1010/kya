import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../../context/MyContext";

import {
  business_thumbnail,
  whitelogo,
  rights_thumbnail,
  self_knowledge_thumbnail,
} from "../../../assets";

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
import Links from "../Links";
import { Link } from "react-router-dom";

const Menu = (props) => {
  const { is_MenuActive, setIs_MenuActive, isDesktop } = useContext(MyContext);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const menuSlide = () => {
    setIs_MenuActive((current) => !current);
  };

  return (
    <div
      className="fixed z-[999999999999] h-[100vh] w-full bg-thirdly top-0 right-[-100%] transition-all ease-in-out duration-1000"
      style={is_MenuActive ? { right: "0" } : null}
    >
      {isDesktop >= 801 ? (
        <div className="h-[100vh] w-full">
          <Swiper
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={isDesktop <= 1351 ? true : false}
            modules={[Autoplay, Thumbs, Pagination]}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            className="mySwp !w-full !h-full mx-auto"
          >
            <SwiperSlide>
              <Course course="business" color="thirdly" about={props.about} />
            </SwiperSlide>
            <SwiperSlide>
              <Course course="rights" color="primary" about={props.about} />
            </SwiperSlide>
            <SwiperSlide>
              <Course
                course="self_knowledge"
                color="thirdly"
                about={props.about}
              />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            slidesPerView={3}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwi tablet:w-full tablet:h-full mx-auto max-desktop:hidden"
          >
            <SwiperSlide>
              <img src={business_thumbnail} alt="business_thumbnail" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={rights_thumbnail} alt="rights_thumbnail" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={self_knowledge_thumbnail}
                alt="self_knowledge_thumbnail"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      ) : (
        <div className="h-[100vh] w-full bg-primary text-white pt-10 overflow-y-auto">
          <div className="w-[65px] h-[65px] ml-10">
            <Link to={!props.about ? "/" : `../`}>
              <img src={whitelogo} alt="logo" />
            </Link>
          </div>
          <ul className="pt-10 text-2xl">
            <Links about={props.about} />
          </ul>
        </div>
      )}
      <button
        className="absolute top-10 right-10 z-[9999999]"
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
