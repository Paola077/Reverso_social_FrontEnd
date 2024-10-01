import React from "react";
import { Link } from "react-router-dom";
import "./_Button.scss";

export const Button = ({
  textButton,
  onClick,
  backgroundColor,
  border,
  color,
  type,
  height,
  width,
  boxShadow,
  to,
  margin
}) => {
  if (to) {
    return (
      <Link
        to={to}
        className="button"
        style={{
          backgroundColor: backgroundColor,
          border: border,
          color: color,
          height: height,
          width: width,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textDecoration: "none",
          margin: margin,
          boxShadow: boxShadow,
        }}
      >
        {textButton}
      </Link>
    );
  }

  return (
    <button
      className="button"
      style={{ backgroundColor, border, color, height, width, boxShadow, margin }}
      onClick={onClick}
      type={type}
    >
      {textButton}
    </button>
  );
};
