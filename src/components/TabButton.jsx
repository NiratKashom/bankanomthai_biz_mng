import React from "react";

function TabButton({ activeTab, handleClick, text,selfIdx }) {
  const activeTabClass = "text-blue-500 font-bold  border-b-4 border-blue-500";

  return (
    <button
      className={`py-2 px-4 ${
        activeTab === selfIdx ? activeTabClass : " text-gray-700"
      }`}
      onClick={() => handleClick()}
    >
      {text}
    </button>
  );
}

export default TabButton;
