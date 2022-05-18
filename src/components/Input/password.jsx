import React, { useState } from "react";
import PasswordShowIcon from "../../assets/svgs/PasswordShowIcon.svg";
import PasswordHideIcon from "../../assets/svgs/PasswordHideIcon.svg";
import { Field, ErrorMessage } from "formik";

const PasswordInputField = ({ name, label, placeholder }) => {
  const [isHidden, setIsHidden] = useState(true);
  const togglePasswordVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="my-2">
      <label className="text-sm font-semibold">{label}</label>
      <div className="inline-flex w-full mt-1 items-center space-x-2 rounded-md p-3 bg-white border border-gray-300 focus-within:border-blue-500">
        <Field
          name={name}
          type={isHidden ? "password" : "text"}
          placeholder={placeholder}
          className="focus:outline-none text-sm w-full text-gray-900"
        />
        <button
          className="rounded-md px-1 block"
          onClick={togglePasswordVisibility}
        >
          <img
            className="w-6 h-6"
            src={isHidden ? PasswordHideIcon : PasswordShowIcon}
          />
        </button>
      </div>
      <ErrorMessage
        name={name}
        render={(err) => <p className="text-red-500 text-sm">{err}</p>}
      />
    </div>
  );
};

export default PasswordInputField;
