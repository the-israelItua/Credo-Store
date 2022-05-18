import React, { HTMLAttributes, ReactNode } from "react";
import { Field, ErrorMessage } from "formik";

const InputField = ({
  name,
  label,
  icon,
  type = "text",
  placeholder,
  extraStyles,
  parentClassName,
  labelClassName,
  className,
  disabled,
  ...otherProps
}) => {
  return (
    <div className={`my-2 ${parentClassName}`}>
      <label className={`${labelClassName} text-sm font-semibold `}>
        {label}
      </label>
      <div
        className={`inline-flex items-center mt-1 space-x-2 w-full rounded-md p-3 bg-white border border-gray-300 focus-within:border-blue-500 ${
          disabled && "bg-[#FAFAFA] border-[#FAFAFA]"
        } ${extraStyles}`}
      >
        {/* inserting icon before textbox */}
        {icon ? icon : null}
        <Field
          name={name}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`peer focus:outline-none text-sm w-full text-gray-900 disabled:bg-[#FAFAFA] disabled:text-[#979797] ${className}`}
          {...otherProps}
        />
      </div>
      <ErrorMessage
        name={name}
        render={(err) => <p className="text-red-500 text-sm">{err}</p>}
      />
    </div>
  );
};

export default InputField;
