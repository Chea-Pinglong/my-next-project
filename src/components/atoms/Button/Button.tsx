"use client";

import React, { ReactNode, MouseEvent } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  colorScheme?: "primary" | "secondary" | "danger" | "success" | "warning";
  size?: "small" | "medium" | "large";               
  isDisabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  colorScheme = "primary",
  size = "medium",
  isDisabled = false,
  onClick,
}) => {
  const getColorSchemeClass = (scheme: string) => {
    switch (scheme) {
      case "primary":
        return "bg-blue-500 hover:bg-blue-400 text-white";
      case "secondary":
        return "bg-gray-500 hover:bg-gray-400 text-white";
      case "danger":
        return "bg-red-500 hover:bg-red-400 text-white";
      case "success":
        return "bg-green-500 hover:bg-green-400 text-white";
      case "warning":
        return "bg-yellow-500 hover:bg-yellow-400 text-white"
      default:
        return "bg-blue-500 hover:bg-blue-400 text-white";
    }
  };

  const getSizeClass = (size: string) => {
    switch (size) {
      case "small":
        return "text-sm px-2 py-1";
      case "medium":
        return "text-md px-4 py-2";
      case "large":
        return "text-lg px-6 py-3";
      default:
        return "text-md px-4 py-2";
    }
  };

  const colorSchemeClass = getColorSchemeClass(colorScheme);
  const sizeClass = getSizeClass(size);
  const disableStyle = isDisabled
    ? "cursor-not-allowed opacity-50"
    : "cursor-pointer";
  const combinedClassName = `rounded-lg ${disableStyle} ${colorSchemeClass} ${sizeClass} ${className}`;

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && onClick) {
      onClick(event);
    }
  };

  return (
    <button
      disabled={isDisabled}
      className={combinedClassName}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export { Button };