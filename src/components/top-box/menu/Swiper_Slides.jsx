import React from "react";

const Swiper_Slides = (props) => {
  return (
    <>
      {props.course === "business" ? (
        <a href={`https://www.youtube.com/watch?v=${props.yt}`} target="_blank">
          <div
            className="w-full h-full fade bus_fade aspect-video"
            style={{
              background: `url(/src/assets/images/academy/bus/vid${props.num}.jpg)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="80"
              height="80"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              ></path>
              <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
            </svg>
          </div>
        </a>
      ) : props.course === "rights" ? (
        <a href="https://www.facebook.com/kyacademyerevan" target="_blank">
          <div
            className="w-full h-full fade rig_fade"
            style={{
              background: `url(/src/assets/images/academy/rig/rig${props.num}.jpg)`,
              backgroundPosition: props.num == 2 ? "top" : "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </a>
      ) : null}
    </>
  );
};

export default Swiper_Slides;
