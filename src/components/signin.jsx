import React, { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "./Input";
import PasswordInputField from "./Input/password";
import Button from "./Button";
import SocialConnect from "./SocialConnect";

// import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(8, "Username or mail should be more than 8 characters")
    .required("This field is required"),
  password: Yup.string().required(),
});

const Login = ({ show, onClose }) => {
  const [loading, setLoading] = useState(false);
  //   const navigate = useNavigate();

  return (
    <Transition appear show={show} as={React.Fragment}>
      <Dialog
        onClose={onClose}
        as="div"
        className={`fixed inset-0 flex items-center justify-center overflow-y-auto bg-opacity-70 z-40 bg-black`}
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

          <div className="relative bg-white z-50 p-6 rounded-3xl max-w-lg">
            <Dialog.Title className="font-semibold text-center text-2xl">
              Welcome back
            </Dialog.Title>
            <Dialog.Description className="text-base font-normal mt-3 mb-1 text-center text-gray-500">
              Kindly log in your details to continue
            </Dialog.Description>

            <div className="flex flex-col my-4 w-full">
              <Formik
                initialValues={{
                  username: "",
                  password: "",
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => console.log(values)}
              >
                {() => (
                  <Form>
                    <InputField
                      name="username"
                      type="text"
                      label="Enter your username or email address"
                      placeholder="Username or email address"
                    />
                    <PasswordInputField
                      name="password"
                      placeholder="Password"
                      label="Enter your Password"
                    />
                    <p className="cursor-pointer text-right text-primary text-sm my-3">
                      Forgot Password?
                    </p>
                    <Button
                      value={loading ? "Please wait..." : "Sign In"}
                      disabled={loading}
                      className="w-full"
                      type="submit"
                    />
                  </Form>
                )}
              </Formik>
              <p className="text-center text-gray-400 my-5">OR</p>
              <SocialConnect />
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Login;
