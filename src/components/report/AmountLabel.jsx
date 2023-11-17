import React from "react";

function AmountLabel({
  label,
  value = 0,
  showPercentage = false,
  percentage = 0,
  marginLeft = false,
  marginRight = false,
  additionalValClass = "",
  additionalLabelClass = "",
}) {
  const marginClass = `${marginLeft ? "ml-2" : ""} ${
    marginRight ? "mr-2" : ""
  }`;
  return (
    <div>
      <div
        className={`flex justify-between items-baseline ${marginClass} ${additionalLabelClass}`}
      >
        <span className="mr-1">{label} : </span>
        <div className="">
          <div className={`text-2xl font-semibold ${additionalValClass}`}>
            {value.toLocaleString()}
          </div>
          {showPercentage && (
            <div className={`text-2xl text-right font-semibold ${additionalValClass}`}>
              {percentage}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AmountLabel;
