import React, { useEffect, useRef } from "react";
import CloseIcon from "assets/svgs/CloseIcon.svg";
import { motion } from "framer-motion";
import { FadeIn } from "../Animate";

const Modal = ({ title, children, onClose, large }) => {
  const modalRef = useRef(null);

  return (
    <>
      <motion.div
        role="dialog"
        variants={FadeIn}
        animate="visible"
        exit="hidden"
        initial="hidden"
        transition={{ duration: 0.5 }}
        tabIndex={-1}
        className="h-screen w-screen inset-0 bg-opacity-50 z-40 bg-black fixed flex items-center justify-center overflow-auto p-[1rem]"
      >
        <div
          role="document"
          tabIndex={0}
          ref={modalRef}
          className={`w-screen m-4 bg-white p-6 rounded-[5px]  ${
            large ? "w-[47rem]" : "max-w-lg"
          }`}
        >
          <div className="flex justify-between items-center">
            <h3 className="font-[500] text-[1em] sm:text-[1.625em] text-[#1d1c1d]">
              {title}
            </h3>
            <div className="flex justify-end text-2xl mb-3">
              <img
                src={CloseIcon}
                alt="close button icon"
                className="cursor-pointer text-white"
                onClick={onClose}
              />
            </div>
          </div>
          {children}
        </div>
      </motion.div>
    </>
  );
};

export default Modal;
