import React from "react";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import HistoryPart from "./HistoryPart";

const History = () => {
  return (
    <div className="mb-32 px-12 max-stablet:px-8 max-stablet:mb-16">
      <div className="relative max-w-[1080px] w-full my-0 mx-auto">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiperE"
        >
          <SwiperSlide>
            <HistoryPart part="balt" />
          </SwiperSlide>
          <SwiperSlide>
            <HistoryPart part="balttw" />
          </SwiperSlide>
          <SwiperSlide>
            <HistoryPart part="open" />
          </SwiperSlide>
          <SwiperSlide>
            <HistoryPart part="two" />
          </SwiperSlide>
          <SwiperSlide>
            <HistoryPart part="conn" />
          </SwiperSlide>
        </Swiper>
        <div className={`ci before:!content-['2017']`}></div>
        <div className={`ci before:!content-['2019']`}></div>
        <div className={`ci before:!content-['2019']`}></div>
        <div className={`ci before:!content-['2024']`}></div>
        <div className={`ci before:!content-['2016']`}></div>
      </div>
    </div>
  );
};

export default History;
