"use client";
import React, { FC, ReactNode, MouseEvent } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FloatingButton: FC<FloatingButtonProps> = ({
  children,
  onClick,
  position = "top-left",
  size = "medium",
  className = "",
}) => {
  const align = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-10 left-5";
      case "top-right":
        return "top-10 right-5";
      case "bottom-left":
        return "bottom-10 left-5";
      case "bottom-right":
        return "bottom-10 right-5";
      default:
        return "top-10 left-5";
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

  const sizeClass = getSizeClass(size);
  const alignButtonStyle = align(position);
  const styleButton = `absolute bg-blue-500 hover:bg-blue-800 text-black rounded-lg shadow-lg transition-all duration-300 ${alignButtonStyle} ${className} ${sizeClass}`;

  return (
    <div>
      <button className={styleButton} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export { FloatingButton };
