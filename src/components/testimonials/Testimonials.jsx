import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Testimonial from "./Testimonial";
import { MyContext } from "../../context/MyContext";

const Testimonials = () => {
  const { isDesktop } = useContext(MyContext);

  return (
    <div className="mb-24 px-12 max-desktop:px-0 max-medium:mb-16" id="reviews">
      <Swiper
        slidesPerView={isDesktop >= 1050 ? 2 : 1}
        spaceBetween={22}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="myMainSwiper w-full h-full p-4"
      >
        <SwiperSlide>
          <Testimonial num="1" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="2" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="3" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="4" />
        </SwiperSlide>
        <SwiperSlide>
          <Testimonial num="5" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
