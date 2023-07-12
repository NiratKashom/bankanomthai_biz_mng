import React from "react";

function SfHeaderTable({ headerColor, headerTableColumn }) {

  const headerTableClasses = "font-semibold p-2";

  return (
    <div className={`flex items-center bg-${headerColor} border-y-2 `}>
      {headerTableColumn.map(({ label, textAlign, width }, idx) => (
        <div key={"sfheader" + idx} className={`${headerTableClasses} border-${idx === 0 ? "x" : "r"}-2
        text-${textAlign || "right"}  w-${width || "1/12"}`}>
          {label}
        </div>
      ))}
    </div>
  );
}

export default SfHeaderTable;
