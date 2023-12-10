import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import MediaLink from "./MediaLink";

const Media = () => {
  return (
    <div className="flex items-center h-[500px] px-12 mb-24 flex justify-center max-big:h-[400px] max-medium:mb-16 max-medium:h-[600px] max-medium:px-6 max-stablet:h-auto max-phone:h-[300px] max-phone:px-0">
      <div className="max-w-[1480px] w-full h-full flex gap-4 max-big:max-w-[1280px] max-medium:flex-col">
        <div className="max-w-full w-[60%] max-medium:w-full h-full max-medium:min-h-[350px] max-stablet:min-h-0 max-stablet:h-[280px] max-phone:h-full">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            pagination={true}
            modules={[Autoplay, Navigation, Pagination]}
            className="myMainSwiperMedia max-w-full w-full h-full"
          >
            <SwiperSlide>
              <MediaLink yt="G9AIuLPQZ0s" />
            </SwiperSlide>
            <SwiperSlide>
              <MediaLink yt="ta-OQaITDN0" />
            </SwiperSlide>
            <SwiperSlide>
              <MediaLink yt="aeAOabWLfHY" />
            </SwiperSlide>
            <SwiperSlide>
              <MediaLink yt="0kqFVXG5YuI" />
            </SwiperSlide>
            <SwiperSlide>
              <MediaLink yt="XoqNVOFVeJo" />
            </SwiperSlide>
          </Swiper>
        </div>
        <ul className="w-[40%] h-full max-medium:w-full max-medium:flex max-medium:gap-4 max-stablet:h-[200px] max-phone:hidden">
          <li className="h-1/2 w-full pb-2 max-medium:pb-0 max-medium:h-full">
            <MediaLink yt="hiGbBS6kZcg" />
          </li>
          <li className="h-1/2 w-full pt-2 max-medium:pt-0 max-medium:h-full">
            <MediaLink yt="mlv_omOvjzc" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Media;
