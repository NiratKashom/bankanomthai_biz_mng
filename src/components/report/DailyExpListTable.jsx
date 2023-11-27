import React from "react";

function DailyExpListTable({ data, idx, key }) {
  const { category, title, qty, unit, totalPrice } = data;
  return (
    <div
      key={key}
      className={`flex justify-between  py-2 px-4  ${idx % 2 || "bg-gray-100"}`}
    >
      <div>{idx + 1 + "."} </div>
      <div className="flex justify-between w-1/3">
        <div>{category} </div>
        <div>{title}</div>
      </div>
      <div className="flex justify-between w-1/3">
        <div className="w-1/6 text-right">{qty}</div>

        <div className="w-1/6">{unit}</div>
        <div>{totalPrice}</div>
      </div>
    </div>
  );
}

export default DailyExpListTable;
