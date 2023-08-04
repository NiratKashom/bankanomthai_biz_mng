import React, { useContext, useState } from "react";
import { SfFormDataContext } from "@/context/SfFormDataContext";

import SfInputForm from "@/components/storefront/SfInputForm";
import LeftoverFormContainer from "@/components/storefront/LeftoverFormContainer";
import SfTableBeforeSubmit from "@/components/storefront/SfTableBeforeSubmit";

import { postStorefrontAPI } from "../../services/API/storefrontAPI";
import Swal from "sweetalert2";
import dayjs from "dayjs";
import { convertFormDataBeforeSubmit } from "@/utils/storefrontUtils";
import Loading from "@/components/Loading";
import FormStepper from "@/components/FormStepper";

const StorefrontForm = () => {
  const { formData, sfSelectedDate, clearFormData } =
    useContext(SfFormDataContext);
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    { number: 1, label: "บันทึกของที่นำไปขาย" },
    { number: 2, label: "บันทึกของเหลือ" },
    { number: 3, label: "ตรวจสอบก่อนบันทึก" },
  ];

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
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
        submitSfForm(formData, sfSelectedDate);
      }
    });
  };

  const submitSfForm = async (data, date) => {
    const recordDate = dayjs(date).format("MM/DD/YYYY");
    const formData = convertFormDataBeforeSubmit(data, recordDate);
    // console.log('formData', formData)
    setIsLoading(true);
    try {
      await postStorefrontAPI(formData);
      Swal.fire({
        icon: "success",
        title: "บันทึกข้อมูลสำเร็จ",
      }).then(() => {
        clearFormData();
        setActiveStep(() => 1);
      });
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
          onNextStep={handleNextStep}
          onPreviousStep={handlePreviousStep}
        />

        {activeStep === 1 && <SfInputForm submitSfForm={submitSfForm} />}
        {activeStep === 2 && <LeftoverFormContainer />}
        {activeStep === 3 && <SfTableBeforeSubmit />}
      </form>
    </div>
  );
};

export default StorefrontForm;
