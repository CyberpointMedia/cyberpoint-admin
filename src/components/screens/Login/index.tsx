import React, { useState } from "react";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginMutation } from "../../../../pages/api/api";
import { loginFormInputProps } from "@/types";
import InputField from "@/components/global/InputField";
import Button from "@/components/global/Button";

export const Login = () => {
  const router = useRouter();
  const [showloading, setShowLoading] = useState(false);
  const [adminLogin] = useLoginMutation();
  const [formError, setFormError] = useState(false);
  const [errMess, setErrMess] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm<loginFormInputProps>();

  const handleLoginForm: SubmitHandler<loginFormInputProps> = async (data) => {
    setShowLoading(true);
    localStorage.removeItem("token");
    try {
      const res = await adminLogin({
        variables: {
          email: data.email,
          password: data.password,
        },
      });
      setShowLoading(false);
      if (res?.data?.login?.token) {
        localStorage.setItem("token", res?.data?.login?.token);
        router.push("/");
      }
      if (res.errors) {
        setFormError(true);
        setErrMess(res?.errors[0].message);
      }
    } catch (err) {
      setShowLoading(false);
      console.log(err);
      // toast("Something went wrong", {
      //   type: "error",
      //   autoClose: 2000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      // });
    }
  };

  return (
    <>
      <div className="relative max-w-md p-4 mx-auto bg-center bg-cover">
        <div className="flex h-screen">
          <div className="w-full m-auto rounded-md bg-[#f6f6f6] border border-[#e9e9e9]">
            <div className="py-8 px-5">
              <a
                href="javascript:void(0);"
                className="text-center w-full mb-5 block"
              >
                <span className="font-semibold text-xl tracking-tight">
                  CyberPoint
                </span>
              </a>
              <form onSubmit={handleSubmit(handleLoginForm)}>
                <div className="form-group mb-5">
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="Enter Your Email"
                    type="email"
                    inputFieldClass="bg-white border border-[#e9e9e9] py-3 inline-block w-full px-4 text-sm focus:outline-none"
                    labelClass="w-full block text-black text-sm mb-2"
                    resigter={register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    error={errors.email}
                  />
                </div>
                <div className="form-group mb-5">
                  <InputField
                    label="Password"
                    name="password"
                    placeholder="Enter Your Password"
                    type="password"
                    inputFieldClass="bg-white border border-[#e9e9e9] py-3 inline-block w-full px-4 text-sm focus:outline-none"
                    labelClass="w-full block text-black text-sm mb-2"
                    resigter={register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must contain at least 8 characters",
                      },
                    })}
                    error={errors.password}
                  />
                </div>
                {formError && <p className="error">{errMess}</p>}
                <Button
                  text={showloading ? "" : "Sign In"}
                  type="submit"
                  btnClass="bg-white w-full border border-[#2E2F30] rounded-full uppercase text-[#2E2F30] py-3 px-4 hover:bg-[#FF561D] hover:border-[#FF561D] hover:text-white transition duration-500"
                  Icon={
                    showloading ? <div className="loader w-5 h-5"></div> : <></>
                  }
                  onClick={
                    showloading ? () => null : handleSubmit(handleLoginForm)
                  }
                  disabled={showloading}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
