import React, { useState } from "react";
import google from "../assets/svgs/google.svg";
import Facebook from "../assets/svgs/Facebook.svg";
import apple from "../assets/svgs/apple.svg";
import SocialIcon from "./SocialIcon";

const items = [
  {
    id: 1,
    title: "Sign In with Google",
    src: google,
    activeColor: "secondary",
    textColor: "text-yellow-800",
    isActive: true,
  },
  {
    id: 2,
    title: "Sign In with Facebook",
    src: Facebook,
    activeColor: "sky-600",
    textColor: "text-white",
    isActive: false,
  },
  {
    id: 3,
    title: "Sign In with Apple",
    src: apple,
    activeColor: "white",
    textColor: "text-white",
    isActive: false,
  },
];

const SocialConnect = () => {
  const [iconDetails, setIconDetails] = useState(items);
  const HandleClick = (item) => {
    const newItems = items.map((e) => {
      if (e.title == item) {
        return {
          ...e,
          isActive: true,
        };
      } else {
        return {
          ...e,
          isActive: false,
        };
      }
    });
    setIconDetails(newItems);
  };
  return (
    <div className="flex justify-between w-full ">
      {iconDetails.map((item) => (
        <SocialIcon
          title={item.title}
          src={item.src}
          textColor={item.textColor}
          activeColor={item.activeColor}
          isActive={item.isActive}
          key={item.id}
          onClick={HandleClick}
        />
      ))}
    </div>
  );
};

export default SocialConnect;
