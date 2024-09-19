import React, { FunctionComponent, useState } from "react";

import Image from "next/image";

import viewEye from "../../../public/images/eye-view.png";

import offEye from "../../../public/images/eye-off.png";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type: string;
  resigter?: any;
  error?: any;
  name?: string;
  inputFieldClass?: string;
  labelClass?: string;
  passwordIconClass?: string;
}

const InputField: FunctionComponent<InputFieldProps> = ({
  label,
  placeholder,
  type,
  resigter,
  error,
  name,
  inputFieldClass,
  labelClass,
  passwordIconClass,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [typeField, setTypeField] = useState(type);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    if (typeField === "password") {
      setTypeField("text");
    } else {
      setTypeField("password");
    }
  };
  return (
    <div className="flex flex-col">
      <label className={` ${labelClass} `}>{label}</label>
      <div className="relative w-full">
        <input
          type={typeField}
          placeholder={placeholder}
          className={`${inputFieldClass}`}
          {...resigter}
          name={name}
          required
        />
        <div
          className={`absolute z-10 right-5 top-3 cursor-pointer ${passwordIconClass}`}
          onClick={() => handleTogglePassword()}
        >
          {type === "password" &&
            (showPassword ? (
              <Image
                src={offEye}
                className=""
                width={20}
                height={20}
                alt="Show"
              />
            ) : (
              <Image
                src={viewEye}
                className=""
                width={20}
                height={20}
                alt="Hide"
              />
            ))}
        </div>
      </div>
      {error && (
        <div className="w-40">
          <p className="text-red-400 text-[10px] flex flex-wrap font-light mt-1 w-full">
            {error?.message || error}
          </p>
        </div>
      )}
    </div>
  );
};

export default InputField;
