import React, { FC, ReactNode } from "react";

interface FloatingButtonProps {
  children: ReactNode;
  className?: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const FloatingButton: FC<FloatingButtonProps> = ({
  children,
  onClick,
  position = "top-left",
  className,
}) => {
  const align = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-5 left-5";
      case "top-right":
        return "top-5 right-5";
      case "bottom-left":
        return "bottom-5 left-5";
      case "bottom-right":
        return "bottom-5 right-5";
      default:
        return "top-5 left-5";
    }
  };

  const alignButtonStyle = align(position);
  const styleButton = `fixed bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 ease-in-out
             ${alignButtonStyle} ${className}`

  return <div>
    <button className={styleButton} onClick={onclick}>
        {children}
    </button>
  </div>;
};

export { FloatingButton };
