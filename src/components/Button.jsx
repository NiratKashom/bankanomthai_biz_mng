import React from "react";

const Button = ({
  text = "Placeholder",
  onClick,
  type = "button",
  disabled = false,
  color = "blue",
  isOutlinedStyle = false,
  className,
}) => {
  const getButtonStyle = (color) => {
    const bgStyle = isOutlinedStyle ? "bg-white" : `bg-${color}-500`;
    const textStyle = isOutlinedStyle ? `text-${color}-500` : "text-white";
    const hoverBgStyle = isOutlinedStyle ? `hover:bg-${color}-500` : `hover:bg-${color}-700`;
    const hoverTextStyle = isOutlinedStyle ? "hover:text-white" : "";

    return `${bgStyle} ${textStyle} ${hoverBgStyle} ${hoverTextStyle} border-2 border-${color}-500`;
  };
  const btnStyle = getButtonStyle(color)

  return (
    <button
      type={type}
      className={`font-bold py-1 px-2 rounded ${btnStyle} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
