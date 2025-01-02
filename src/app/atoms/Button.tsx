import React from "react";

interface ButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  text="button",
  onClick = () => {},
  className = "w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 transition-colors font-semibold",
  type = "button",
}) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {text}
    </button>
  );
};

export default Button;
