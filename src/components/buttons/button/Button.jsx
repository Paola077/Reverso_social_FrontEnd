import React from "react";
import "./_Button.scss";

export const Button = ({
  textButton,
  onClick,
  backgroundColor,
  border,
  color,
  type,
  width,
  height,
}) => {
  return (
    <button
      className="aceptCancel"
      style={{
        backgroundColor: backgroundColor,
        border: border,
        color: color,
        width: width,
        height: height,
      }}
      onClick={onClick}
      type={type}
    >
      {textButton}
    </button>
  );
};
