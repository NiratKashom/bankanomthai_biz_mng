import React from "react";

const Button = ({ children, color, onClick, disabled }) => {
  
  let buttonClasses = "font-semibold py-2 px-4 rounded";
  let colorClasses = "";

  switch (color) {
    case "primary":
      colorClasses = "bg-blue-500 hover:bg-blue-700 text-white";
      break;
    case "secondary":
      colorClasses = "bg-gray-500 hover:bg-gray-700 text-white";
      break;
    case "success":
      colorClasses = "bg-green-500 hover:bg-green-700 text-white";
      break;
    case "warning":
      colorClasses = "bg-yellow-500 hover:bg-yellow-700 text-white";
      break;
    case "danger":
      colorClasses = "bg-red-500 hover:bg-red-700 text-white";
      break;
    default:
      colorClasses = "bg-gray-500 hover:bg-gray-700 text-white";
  }

  if (disabled) {
    buttonClasses += " cursor-not-allowed";
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses + " " + colorClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
