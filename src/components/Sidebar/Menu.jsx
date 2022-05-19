import React from "react";
import { NavLink, useLocation, useMatch } from "react-router-dom";

const Menu = ({ menuInfo }) => {
  const location = useLocation();
  const navPosition = (str) => {
    return location.pathname.endsWith(str);
  };
  const isActive = navPosition(menuInfo.link);
  return (
    <NavLink
      to={menuInfo.link}
      className={`w-full flex pr-8 justify-start transition-all cursor-pointer items-center ${
        isActive ? "bg-primary-200" : ""
      } group hover:bg-primary-200`}
    >
      <div
        className={`self-stretch w-[5px] bg-transparent rounded-r-full ${
          isActive ? "bg-primary" : ""
        }`}
      ></div>
      <div
        className={`w-full flex pl-6 salmon items-center ${
          menuInfo.notifications
            ? "justify-between"
            : menuInfo.dropdownItems
            ? "justify-between"
            : "justify-start"
        }`}
      >
        <img
          src={menuInfo.iconSrc}
          className={`w-5 ${
            menuInfo.notifications ? "" : menuInfo.dropdownItems ? "" : "mr-1"
          } ${isActive ? "filter-orange" : "filter-gray"}`}
        />
        <p
          className={`flex-1 py-4 text-left ml-3 font-medium ${
            isActive ? "text-primary" : "text-gray-400"
          } group-hover:text-primary`}
        >
          {menuInfo.name}
        </p>
        {menuInfo.notifications && (
          <div className="bg-primary w-5 h-5 p-3 flex justify-center items-center rounded-full">
            <p className="text-xs text-white">
              {menuInfo.notifications > 50 ? 50 + "+" : menuInfo.notifications}
            </p>
          </div>
        )}
      </div>
    </NavLink>
  );
};

export default Menu;
