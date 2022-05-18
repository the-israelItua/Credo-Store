import React, { ReactNode } from "react";

const Button = ({
  value = "submit",
  type,
  display = "normal",
  className,
  icon,
  reverse = false,
  style,
  onClick,
  disabled,
}) => {
  if (icon) {
    return (
      <a
        onClick={onClick}
        style={style}
        className={`flex ${
          reverse && "flex-row-reverse"
        } items-center justify-center cursor-pointer text-sm transition-all py-3 px-2 rounded-lg border-2 border-primary hover:scale-90 sm:text-xs md:text-sm ${
          display === "normal"
            ? "bg-primary text-white"
            : "bg-transparent text-primary"
        }${" " + className}`}
      >
        {icon} {value[0].toUpperCase() + value.slice(1)}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      style={style}
      className={`text-sm cursor-pointer transition-all py-3 px-4 rounded-lg hover:scale-90 sm:text-xs md:text-sm ${
        display === "normal"
          ? "bg-primary text-white"
          : "bg-transparent text-primary"
      }${" " + className}`}
      disabled={disabled}
    >
      {value[0].toUpperCase() + value.slice(1)}
    </button>
  );
};

export default Button;
