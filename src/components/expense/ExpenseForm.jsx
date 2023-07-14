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
    Swal.fire({
      title: "ต้องการบันทึกข้อมูลใช่หรือไม่?",
      text: "กรุณาตรวจสอบข้อมูลก่อนบันทึก",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(34 197 94)",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึกข้อมูล",
      cancelButtonText: "ยกเลิก",
    }).then((result) => {
      if (result.isConfirmed) {
        submitExpForm(formData, expSelectedDate);
      }
    });
  }

  const submitExpForm = async (data, date) => {
    console.log("submitSfForm");
    const recordDate = dayjs(date).format("MM/DD/YYYY");

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
