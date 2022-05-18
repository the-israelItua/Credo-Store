import React from "react";

const SocialIcon = ({
  src,
  title,
  activeColor,
  textColor = "text-black",
  isActive = false,
}) => {
  return (
    <div
      className={`google flex p-2 cursor-pointer items-center rounded-md mx-1 justify-center ${
        isActive
          ? "bg-" + activeColor + " flex-grow"
          : "bg-slate-200 flex-grow-0"
      }`}
    >
      <img src={src} alt="google icon" />
      {isActive && (
        <h3 className={`text-xs md:text-sm ml-3 ${textColor}`}>{title}</h3>
      )}
    </div>
  );
};

export default SocialIcon;
