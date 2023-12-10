import React from "react";

const MediaLink = (props) => {
  return (
    <>
      <div className="w-full h-full relative">
        <a href={`https://www.youtube.com/watch?v=${props.yt}`}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${props.yt}?si=21QTzR4dzckCZ4Ys`}
            title="YouTube video player"
            className="pointer-events-none rounded-3xl max-phone:rounded-none"
          ></iframe>
        </a>
      </div>
    </>
  );
};

export default MediaLink;
