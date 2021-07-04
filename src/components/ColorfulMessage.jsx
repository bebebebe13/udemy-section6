import React from "react";

const ColerfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColerfulMessage;
