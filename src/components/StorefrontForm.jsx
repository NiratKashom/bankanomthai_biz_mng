import React, { useContext, useState } from "react";
import SfFormStepper from "./SfFormStepper";
import SfInputForm from "./SfInputForm";
import { SfFormDataContext } from "../context/SfFormDataContext";
import LeftoverFormContainer from "./LeftoverFormContainer";
// import Calendar from "./Calendar";
import SfTableBeforeSubmit from "./SfTableBeforeSubmit";

const StorefrontForm = () => {
  const { formData } = useContext(SfFormDataContext);

  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setActiveStep(() => 1);
  };

  return (
    <div className=" mx-auto bg-white">
      {/*start stepper */}
      {/* <Calendar/> */}
      <SfFormStepper activeStep={activeStep} />
      <div
        className={`flex ${
          activeStep === 1 ? "justify-end" : "justify-between"
        } my-4`}
      >
        {activeStep !== 1 && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold"
            onClick={handlePrevious}
          >
            ย้อนกลับ
          </button>
        )}

        {activeStep !== 3 && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold self-end"
            onClick={handleNext}
          >
            ต่อไป
          </button>
        )}

        {activeStep === 3 && (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded font-semibold"
          >
            บันทึก
          </button>
        )}
      </div>
      {/*end stepper */}
      <form onSubmit={handleSubmit}>
        {activeStep === 1 && <SfInputForm />}
        {activeStep === 2 && <LeftoverFormContainer />}
        {activeStep === 3 && <SfTableBeforeSubmit />}
      </form>

    </div>
  );
};

export default StorefrontForm;
