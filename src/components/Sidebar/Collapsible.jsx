import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const testIcon =
  "https://mysmart-menu.s3.amazonaws.com/web-assets/Arrow+-+Right+2-white.svg";
const Collapsible = ({ menuInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navPosition = (str) => {
    return location.pathname.endsWith(str);
  };
  return (
    <React.Fragment>
      <div
        className={`w-full flex pr-8 justify-start transition-all cursor-pointer items-center group hover:bg-primary-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`self-stretch w-[5px] bg-transparent rounded-r-full`}
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
            className={`w-5 filter-gray ${
              menuInfo.notifications ? "" : menuInfo.dropdownItems ? "" : "mr-1"
            }  "`}
          />
          <p
            className={`flex-1 py-4 text-left ml-3 font-medium text-gray-400
                        group-hover:text-primary`}
          >
            {menuInfo.name}
          </p>
          {menuInfo.notifications && (
            <div className="bg-primary w-5 h-5 p-3 flex justify-center items-center rounded-full">
              <p className="text-xs text-white">
                {menuInfo.notifications > 50
                  ? 50 + "+"
                  : menuInfo.notifications}
              </p>
            </div>
          )}
          {menuInfo.dropdownItems && (
            <img
              src={testIcon}
              className={`w-4 h-4 ${isOpen ? "rotate-90" : ""}`}
            />
          )}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && menuInfo.dropdownItems && (
          <motion.div
            animate={{ height: "initial" }}
            initial={{ height: 0 }}
            transition={{
              duration: 0.5,
              staggerChildren: 1,
              when: "beforeChildren",
            }}
            exit={{ height: 0 }}
            className="w-full bg-transparent"
          >
            <ul className="w-full flex flex-col justify-center items-center">
              {menuInfo.dropdownItems.map((it, index) => (
                <motion.li
                  animate={{ visibility: "visible" }}
                  initial={{ visibility: "hidden" }}
                  exit={{ visibility: "hidden" }}
                  transition={{ duration: 1 }}
                  className={`w-full pr-8 pl-4 flex justify-start transition-all cursor-pointer items-center bg-gray-200 group`}
                  tabIndex={index}
                  key={index}
                >
                  <NavLink
                    to={it.link}
                    className={`flex-1 py-4 text-sm text-center font-medium ${
                      navPosition(it.link) ? "text-primary" : "text-gray-400"
                    } group-hover:text-primary`}
                  >
                    {it.name}
                  </NavLink>
                  {it.notifications && (
                    <div className="bg-primary w-5 h-5 p-3 flex justify-center items-center rounded-full">
                      <p className="text-xs text-white">
                        {it.notifications > 50 ? 50 + "+" : it.notifications}
                      </p>
                    </div>
                  )}
                  {it.dropdownItems && (
                    <img
                      src={testIcon}
                      className={`w-3 h-3 ${
                        isOpen ? "rotate-0" : "-rotate-90"
                      }`}
                    />
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Collapsible;
