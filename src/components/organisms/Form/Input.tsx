import React, { ChangeEvent, FC } from "react";
import { ErrorMessage } from "./ErrorMessage";

interface InputProps {
  className?: string;
  placeholder?: string;
  type: string;
  name: string;
  value?: string;
  label?: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<InputProps> = ({
  className,
  placeholder,
  type,
  name,
  value,
  onChange,
  label,
  error,
}) => {
  console.log("Error: ", error);
  return (
    <>
      {label === name && (
        <label htmlFor={label} className="text-black">
          {label}
        </label>
      )}

      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        className={`${className}`}
        onChange={onChange}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export { Input };
