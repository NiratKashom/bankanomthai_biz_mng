import React, { useContext, useState } from "react";
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";

import Loading from "@/components/Loading";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import FormStepper from "@/components/FormStepper";
import ExpInputForm from "@/components/expense/ExpInputForm";
import ExpTableBeforeSubmit from "@/components/expense/ExpTableBeforeSubmit";


function ExpenseForm() {
  const { formData, expSelectedDate, clearFormData } = useContext(
    ExpenseFormDataContext
  );

  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { number: 1, label: "บันทึกรายจ่าย" },
    { number: 2, label: "ตรวจสอบก่อนบันทึก" },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("submit ja")
    console.log(formData)
  }

  return (
    <div className=" mx-auto bg-white">
      {isLoading && <Loading />}
      <form onSubmit={handleSubmit}>
        <FormStepper
          activeStep={activeStep}
          steps={steps}
          onNextStep={handleNext}
          onPreviousStep={handlePrevious}
        />
        {activeStep === 1 && <ExpInputForm />}
        {activeStep === 2 && <ExpTableBeforeSubmit />}

      </form>
    </div>
  );
}

export default ExpenseForm;
