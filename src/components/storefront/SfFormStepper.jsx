import React from "react";

function SfFormStepper({ activeStep }) {
  return (
    <div className="flex justify-around space-x-2 mb-4">
      <div>
        <div
          className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
            activeStep === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          1
        </div>
        <span className={`${activeStep === 1 && "text-blue-500"}`}>
          บันทึกของที่นำไปขาย
        </span>
      </div>

      <div>
        <div
          className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
            activeStep === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          2
        </div>
        <span className={`${activeStep === 2 && "text-blue-500"}`}>
          บันทึกของเหลือ
        </span>
      </div>
      <div>
        <div
          className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
            activeStep === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
          }`}
        >
          3
        </div>
        <span className={`${activeStep === 3 && "text-blue-500"}`}>
          ตรวจสอบก่อนบันทึก
        </span>
      </div>
    </div>
  );
}

export default SfFormStepper;
