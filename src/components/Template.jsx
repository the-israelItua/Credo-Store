import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

const Template = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    localStorage.clear();
    return <Navigate to="/" />;
  }

  return (
    <div
      className={`bg-[#FAFAFA] w-full box-border flex flex-row-reverse overflow-x-auto overflow-y-hidden`}
    >
      <div className="w-full h-screen flex flex-col">
        <Header />
        <div className=" overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <SideBar />
    </div>
  );
};

export default Template;
