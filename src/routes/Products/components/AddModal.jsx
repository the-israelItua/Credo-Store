import React, { useState } from "react";
import Modal from "components/Modal";
import Button from "components/Button";
import Switch from "components/Switch";

const AddProduct = ({ onClose, fetch }) => {
  const [name, setName] = useState("");
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);

  return (
    <Modal
      title="Create new product"
      onClose={() => {
        if (onClose) onClose();
      }}
    >
      <p className="mt-[1.25rem] text-[#8b8b8b] text-[0.9375em] font-[400] w-[90%]">
        Add a new product to be displayed on your store.
      </p>
      <h4 className="mt-[1.25rem] font-[500] text-[1.125em] text-[#1d1c1d]">
        Name
      </h4>
      <div className=" mt-[0.9375rem]">
        <input
          className="border border-[#a1a1a1] w-[100%] rounded-[5px] outline-0 pl-[1.0625rem] ml-[0.5625rem]"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {/* 
      <div className="flex justify-between my-[1.9375rem] items-center">
        <p className="text-[#1D1C1D] text-[1.125em] font-[500]">Status</p>
        <Switch active={active} setActive={setActive} />
      </div> */}

      <div className="ml-[9.1875rem] flex justify-between items-center mb-[5.94rem]">
        <button className="font-[600] text-[0.9375em] text-orange">
          Discard
        </button>
        <Button
          value={loading ? "Please wait..." : "Add New"}
          className="px-[3.44rem] py-[0.75rem] bg-orange border-0"
          disabled={loading}
        />
      </div>
    </Modal>
  );
};

export default AddProduct;
