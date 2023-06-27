import React from "react";

function SfFormStepper({activeStep}) {
  return (
    <div className="flex justify-around space-x-2 mb-4">
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          activeStep === 1 ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        1
      </div>
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          activeStep === 2 ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        2
      </div>
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center ${
          activeStep === 3 ? "bg-blue-500 text-white" : "bg-gray-300"
        }`}
      >
        3
      </div>
    </div>
  );
}

export default SfFormStepper;
