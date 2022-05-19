import React, { useState } from "react";
import Collapsible from "./Collapsible";
import Menu from "./Menu";

const SideBarGroup = ({ title, items }) => {
  const activeState = Array.from({ length: items ? items?.length : 0 }).fill({
    active: false,
  });
  return (
    <div className={`w-full pb-3`}>
      <ul className={`w-full flex flex-col justify-center items-center`}>
        {title && (
          <div className={`w-full px-5 py-3`}>
            <h2 className="text-left text-xs text-gray-400 self-start">
              {title}
            </h2>
            <hr className="text-black-400 w-full" />
          </div>
        )}

        {items &&
          items.map((i, k) => (
            <React.Fragment key={k}>
              {i.dropdownItems ? (
                <Collapsible menuInfo={i} />
              ) : (
                <Menu menuInfo={i} />
              )}
            </React.Fragment>
          ))}
      </ul>
    </div>
  );
};

export default SideBarGroup;
