import React from "react";

const Switch = ({ small, active, setActive }) => {
  const activeClassName = !small
    ? " transform translate-x-10"
    : " transform translate-x-5";

  return (
    <div
      className={
        " flex items-center  rounded-full p-1 cursor-pointer" +
        (!active ? " bg-[#F4F4F4]" : " bg-orange") +
        (!small ? " h-[2.5rem] w-[5.125rem]" : " h-[1.5rem] w-[3rem]")
      }
      onClick={() => {
        if (setActive) setActive(!active);
      }}
    >
      <div
        className={
          "bg-white  rounded-full shadow-md  transform" +
          (!active ? null : activeClassName) +
          (!small ? " h-[2rem] w-[2.125rem]" : " h-[1.375rem] w-[1.435rem]")
        }
      ></div>
    </div>
  );
};

export default Switch;
