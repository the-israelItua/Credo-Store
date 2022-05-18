import React, { useEffect, useState } from "react";
import InputField from "./Input";
import PasswordInputField from "./Input/password";
import Button from "./Button";
import { Formik, Form } from "formik";
import { Dialog, Transition } from "@headlessui/react";

const SignUp = ({ show, onClose }) => {
  return (
    <Transition appear show={show} as={React.Fragment}>
      <Dialog
        onClose={onClose}
        as="div"
        className={`fixed inset-0 w-screen bg-opacity-50 py-5 z-30 bg-black overflow-y-auto top-0 left-0 bottom-0 right-0 flex items-center justify-center`}
      >
        <div className="px-4">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={"absolute inset-0 -z-0"} />
          </Transition.Child>

          <div className="relative bg-white z-50 p-6 py-7 rounded-3xl max-w-lg">
            <Dialog.Title className="font-semibold text-center text-2xl">
              Hello, Sign Up
            </Dialog.Title>
            <Dialog.Description className="text-base font-normal mt-3 mb-1 text-center text-gray-600">
              Kindly register your details to get started
            </Dialog.Description>

            <div className="flex flex-col my-4 w-full">
              <Formik
                initialValues={{
                  full_name: "",
                  restaurantName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                onSubmit={(values) => console.log(values)}
              >
                {(formik) => (
                  <Form>
                    <div className="flex flex-col md:flex-row">
                      <InputField
                        name="full_name"
                        type="text"
                        label="Name"
                        placeholder="Enter your full name"
                      />
                      <div className="mx-2 hidden md:block"></div>
                      <InputField
                        name="businessName"
                        type="text"
                        label="Business Name"
                        placeholder="Enter Business Name"
                      />
                    </div>

                    <InputField
                      name="email"
                      type="email"
                      label="Email Address"
                      placeholder="Enter your email address"
                    />
                    {/* <SelectField
                      label="business type"
                      placeholder="Select business type"
                      items={items}
                      onSelect={(val) => setRestaurantType(val)}
                    /> */}
                    <PasswordInputField
                      name="password"
                      label="Enter your Password"
                      placeholder="Enter a password"
                    />

                    <p className="text-gray-500 text-sm mb-2">
                      Password should contain 8 characters, atleast one
                      uppercase, one lowercase, numbers and symbols
                    </p>
                    <Button value="Sign Up" className="w-full" />
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SignUp;
