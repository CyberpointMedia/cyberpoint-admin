import React, { FunctionComponent } from "react";

interface ButtonProps {
  text: string;
  Icon?: JSX.Element | boolean;
  iconPosition?: "left" | "right";
  btnClass?: string;
  onClick?: (value: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({
  text,
  Icon,
  iconPosition,
  btnClass,
  onClick,
  type,
  disabled,
}) => {
  return (
    <div
      className={`${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      } rounded-lg ${btnClass} `}
      onClick={onClick}
    >
      <div
        className={`flex justify-center items-center gap-3 ${
          iconPosition === "right" && "flex-row-reverse"
        } `}
      >
        {Icon && <div>{Icon}</div>}
        <button
          type={type}
          disabled={disabled}
          className={`${disabled ? "cursor-not-allowed" : ""} font-medium`}
        >
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
