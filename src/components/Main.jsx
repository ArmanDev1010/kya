import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import MainSlides from "./main/MainSlides";

const Main = () => {
  return (
    <div className="w-full h-[600px] max-big:!h-[500px] mb-24 max-medium:mb-16 overflow-hidden bg-primary rounded-bl-[200px] relative max-btablet:!h-[450px] max-btablet:rounded-bl-[100px] max-tablet:!h-[600px]">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={true}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
        className="myMainSwiper w-full h-full"
      >
        <SwiperSlide>
          <MainSlides color="primary" course="business" />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlides color="secondary" course="rights" />
        </SwiperSlide>
        <SwiperSlide>
          <MainSlides color="thirdly" course="self_knowledge" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Main;
