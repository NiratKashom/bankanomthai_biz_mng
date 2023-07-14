import React, { useContext, useState } from "react";
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";

import Loading from "@/components/Loading";
import Swal from "sweetalert2";
import dayjs from "dayjs";

function ExpenseForm() {
  const { formData, expSelectedDate, clearFormData } = useContext(
    ExpenseFormDataContext
  );
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <div className=" mx-auto bg-white">
      {isLoading && <Loading />}
      <form onSubmit={() =>{}}></form>
    </div>
  );
}

export default ExpenseForm;
