import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { MyContext } from "../../context/MyContext";
import Partner from "./Partner";

const SwiperPartners = () => {
  const { isDesktop } = useContext(MyContext);

  return (
    <div className="mt-12 flex flex-col items-end justify-end max-phone:mt-6 min-w-0">
      <div
        className="w-full pl-12 pr-8 rounded-l-full bg-[#f4f4f5] 
      max-medium:w-full max-medium:pl-28 max-medium:pr-16 max-tablet:rounded-l-none max-tablet:pl-0 max-tablet:pr-0"
        id="reviews"
      >
        <Swiper
          slidesPerView={
            isDesktop >= 1451
              ? 4
              : isDesktop >= 1351
              ? 3
              : isDesktop >= 1025
              ? 2
              : isDesktop >= 701
              ? 3
              : 2
          }
          spaceBetween={0}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay]}
          className="myMainSwiperP relative w-full h-full py-8"
        >
          <SwiperSlide>
            <Partner name="digitain" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="ucom" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="yerevanpark" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="cocacola" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="brandon" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="mindcenter" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="vivacell" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="bp" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="centralbank" />
          </SwiperSlide>
          <SwiperSlide>
            <Partner name="stamina" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperPartners;
