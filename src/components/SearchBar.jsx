import React from "react";
import SearchIcon from "assets/svgs/search.svg";

const SearchBar = ({
  type,
  className,
  parentClassName,
  placeholder,
  onClick,
}) => {
  if (type == "reversed") {
    return (
      <div
        className={`flex items-center h-[2.25rem] w-[34.25rem] bg-[#FFFAF9B2] space-x-3 border border-[#FFFAF9B2] rounded-[10px] pl-[1rem] ${parentClassName}`}
      >
        <img src={SearchIcon} alt="search" className="w-5" />
        <input
          className={`h-full flex-1 text-sm bg-inherit outline-0 border-0 placeholder:text-[0.875em] placeholder:font-[400] placeholder:text-[#BEBEBE] ${className}`}
          placeholder={placeholder || "Search "}
          onClick={onClick}
        />
      </div>
    );
  }

  return (
    <div
      className={`relative h-[2.25rem] w-[34.25rem] bg-[#FFFAF9] border border-[#FFFAF9B2] rounded-[10px] pl-[1rem] ${parentClassName}`}
    >
      <input
        className={`h-[2.25rem] w-[34.25rem] bg-[#FFFAF9B2] outline-0 border-0 placeholder:text-[0.875em] placeholder:font-[400] placeholder:text-[#BEBEBE] ${className}`}
        placeholder={placeholder || "Search "}
        onClick={onClick}
      />
      <img
        src={SearchIcon}
        alt="search"
        className="absolute right-[0.2rem] top-[0.6rem] "
      />
    </div>
  );
};

export default SearchBar;
