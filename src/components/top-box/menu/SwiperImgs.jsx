import React from "react";

const SwiperImgs = (props) => {
  return (
    <div id="bottom">
      <div className="flex gap-2">
        <a
          href={`https://www.youtube.com/watch?v=${
            props.course == "business"
              ? "G9AIuLPQZ0s"
              : props.course == "rights"
              ? "ta-OQaITDN0"
              : "hiGbBS6kZcg"
          }`}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${
              props.course == "business"
                ? "G9AIuLPQZ0s"
                : props.course == "rights"
                ? "ta-OQaITDN0"
                : "hiGbBS6kZcg"
            }?si=21QTzR4dzckCZ4Ys`}
            title="YouTube video player"
            className="pointer-events-none rounded-3xl"
          ></iframe>
        </a>
        <a
          href={`https://www.youtube.com/watch?v=${
            props.course == "business"
              ? "0kqFVXG5YuI"
              : props.course == "rights"
              ? "aeAOabWLfHY"
              : "mlv_omOvjzc"
          }`}
        >
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${
              props.course == "business"
                ? "0kqFVXG5YuI"
                : props.course == "rights"
                ? "aeAOabWLfHY"
                : "mlv_omOvjzc"
            }?si=21QTzR4dzckCZ4Ys`}
            title="YouTube video player"
            className="pointer-events-none rounded-3xl"
          ></iframe>
        </a>
      </div>
    </div>
  );
};

export default SwiperImgs;
