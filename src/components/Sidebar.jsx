import React from "react";
import SideBarGroup from "./SideBarGroup";

const test = [
  {
    name: "Dashboard",
    link: "/dashboard",
    iconSrc: "https://mysmart-menu.s3.amazonaws.com/web-assets/Home-white.svg",
  },

  {
    name: "Orders",
    link: "/dashboard/orders",
    iconSrc: "https://mysmart-menu.s3.amazonaws.com/web-assets/Buy-white.svg",
    notifications: 5,
  },
  {
    name: "Products",
    link: "/dashboard/products",
    iconSrc:
      "https://mysmart-menu.s3.amazonaws.com/web-assets/3+User-white.svg",
  },
];

const SideBar = () => {
  return (
    <div
      className={`sidebar box-border bg-white min-w-[18rem] flex flex-col h-screen overflow-y-auto pt-20 pb-8 items-center justify-between`}
    >
      <SideBarGroup items={test} key={0} />
    </div>
  );
};

export default SideBar;
