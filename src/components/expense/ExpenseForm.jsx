import React, { useContext, useState } from "react";
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";
import Loading from "@/components/Loading";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import FormStepper from "@/components/FormStepper";
import ExpInputForm from "@/components/expense/ExpInputForm";
import ExpTableBeforeSubmit from "@/components/expense/ExpTableBeforeSubmit";
import { postExpenseAPI } from "@/services/API/expenseAPI";
import {
  convertExpDataBeforeSubmit,
  updateExpDataWithNewData,
} from "@/utils/expenseUtils";

import { useSWRConfig } from "swr";
import { getExpenseAPI } from "../../services/API/expenseAPI";

function ExpenseForm() {
  const { cache, mutate } = useSWRConfig();

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
    e.preventDefault();
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
  };

  const submitExpForm = async (data, date) => {
    try {
      const recordDate = dayjs(date).format("MM/DD/YYYY");
      const formData = convertExpDataBeforeSubmit(data, recordDate);
      setIsLoading(true);
      const res = await postExpenseAPI(formData);
      const newDataFromRes = res.data;
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const keyCache = `/expense/${formattedDate}`;

      await updateCacheWithKey(keyCache, newDataFromRes, () =>
        getExpenseAPI(date)
      );

      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
      }).then(() => {
        clearFormData();
        setActiveStep(() => 1);
      });
      return;
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถบันทึกข้อมูลได้",
        text: "เกิดข้อผิดพลาด ERROR : " + error,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        {activeStep === 1 && <ExpInputForm submitExpForm={submitExpForm} />}
        {activeStep === 2 && <ExpTableBeforeSubmit />}
      </form>
    </div>
  );
}

export default ExpenseForm;
