import React from "react";

function FormStepper({ activeStep, steps, onNextStep, onPreviousStep }) {
  const isLastStep = activeStep === steps.length;

  return (
    <>
      <div className="flex justify-around space-x-2 mb-4">
        {steps.map((step) => (
          <div key={step.number}>
            <div
              className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center 
              ${
                activeStep === step.number
                  ? "bg-blue-500 text-white"
                  : activeStep > step.number
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
              }`}
            >
              {step.number}
            </div>
            <span
              className={`${
                activeStep === step.number
                  ? "text-blue-500"
                  : activeStep > step.number
                  ? "text-green-500"
                  : ""
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
      <div
        className={`flex ${
          activeStep === 1 ? "justify-end" : "justify-between"
        } pb-4 border-b-2`}
      >
        {activeStep !== 1 && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-700"
            onClick={onPreviousStep}
          >
            ย้อนกลับ
          </button>
        )}

        {!isLastStep && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold self-end hover:bg-blue-700"
            onClick={onNextStep}
          >
            ต่อไป
          </button>
        )}

        {isLastStep && (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-700"
          >
            บันทึก
          </button>
        )}
      </div>
    </>
  );
}

export default FormStepper;
