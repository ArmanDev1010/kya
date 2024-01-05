import React from "react";
import MediaLink from "../../medialibrary/MediaLink";

const SwiperImgs = (props) => {
  return (
    <div id="bottom">
      <div className="flex gap-2 w-full h-full">
        <MediaLink
          yt={
            props.course == "business"
              ? `G9AIuLPQZ0s`
              : props.course == "rights"
              ? "3krYDq05oRc"
              : "hiGbBS6kZcg"
          }
        />
        <MediaLink
          yt={
            props.course == "business"
              ? `RqC72nuN3d4`
              : props.course == "rights"
              ? "0kqFVXG5YuI"
              : "aeAOabWLfHY"
          }
        />
      </div>
    </div>
  );
};

export default SwiperImgs;
