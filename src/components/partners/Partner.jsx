import React from "react";

const Partner = (props) => {
  return (
    <img
      src={`./src/assets/partners/${props.name}.png`}
      alt={props.name}
      className="b"
    />
  );
};

export default Partner;
