import React, { useContext, useState } from "react";
import SfFormStepper from "./SfFormStepper";
import SfInputForm from "./SfInputForm";
import { SfFormDataContext } from "../context/SfFormDataContext";
import LeftoverFormContainer from "./LeftoverFormContainer";
import Calendar from "./Calendar";
import SfTableBeforeSubmit from "./SfTableBeforeSubmit";

const StorefrontForm = () => {
  const { formData, setFormData } = useContext(SfFormDataContext);

  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleAddList = () => {
    setFormData((prevFormList) => [
      ...prevFormList,
      {
        title: "",
        amount: "",
        unit: "",
        totalPrice: "",
        remark: "",
      },
    ]);
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
            Previous
          </button>
        )}

        {activeStep !== 3 && (
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded font-semibold self-end"
            onClick={handleNext}
          >
            Next
          </button>
        )}

        {activeStep === 3 && (
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded font-semibold"
          >
            Submit
          </button>
        )}
      </div>
      {/*end stepper */}
      <form onSubmit={handleSubmit}>
        {activeStep === 1 && <SfInputForm />}
        {activeStep === 2 && <LeftoverFormContainer />}
        {activeStep === 3 && <SfTableBeforeSubmit />}
      </form>

      {/* <div className="mt-4">
        <h3 className="text-lg font-semibold">รายการที่จะบันทึก:</h3>
        {formList.map((formItem, index) => (
          <div key={index} className="mt-2 p-2 bg-gray-100">
            <p>Title: {formItem.title}</p>
            <p>Amount: {formItem.amount}</p>
            <p>Unit: {formItem.unit}</p>
            <p>Total Price: {formItem.totalPrice}</p>
            <p>Remark: {formItem.remark}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default StorefrontForm;
