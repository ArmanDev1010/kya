import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

import Swiper_Slides from "./Swiper_Slides";

const SwiperImgs = (props) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth);

  const isDesktoph = window.innerHeight;

  useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <div id="bottom">
      <Swiper
        slidesPerView={isDesktop <= 601 ? 1 : 2}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Grid]}
        className="mySwiper w-full h-full mx-auto !max-w-full"
        style={
          isDesktoph <= 601 && isDesktop >= 601 ? { display: "none" } : null
        }
      >
        <SwiperSlide>
          <Swiper_Slides course={props.course} num="1" yt="XoqNVOFVeJo" />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper_Slides course={props.course} num="2" yt="mlv_omOvjzc" />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper_Slides course={props.course} num="3" yt="RqC72nuN3d4" />
        </SwiperSlide>
        <SwiperSlide>
          <Swiper_Slides course={props.course} num="4" yt="Y8BUPgKt1b8" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImgs;
