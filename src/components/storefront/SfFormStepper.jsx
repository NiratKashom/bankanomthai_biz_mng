import React from "react";

function SfFormStepper({ activeStep }) {
  const steps = [
    { number: 1, label: "บันทึกของที่นำไปขาย" },
    { number: 2, label: "บันทึกของเหลือ" },
    { number: 3, label: "ตรวจสอบก่อนบันทึก" },
  ];

  return (
    <div className="flex justify-around space-x-2 mb-4">
      {steps.map((step) => (
        <div key={step.number}>
          <div
            className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center ${
              activeStep === step.number ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {step.number}
          </div>
          <span className={`${activeStep === step.number && "text-blue-500"}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SfFormStepper;
