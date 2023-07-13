import React, { useContext, useState } from "react";
import SfFormStepper from "@/components/storefront/SfFormStepper";
import SfInputForm from "@/components/storefront/SfInputForm";
import { SfFormDataContext } from "@/context/SfFormDataContext";
import LeftoverFormContainer from "@/components/storefront/LeftoverFormContainer";
import Swal from "sweetalert2";
import { convertFormDataBeforeSubmit } from '@/utils/storefrontUtils';

// import Calendar from "./Calendar";
import SfTableBeforeSubmit from "@/components/storefront/SfTableBeforeSubmit";
import dayjs from "dayjs";
import { postStorefrontAPI } from "../../services/API/storefrontAPI";
import Loading from "@/components/Loading";


const StorefrontForm = () => {
  const { formData, sfSelectedDate, clearFormData } = useContext(SfFormDataContext);

  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'ต้องการบันทึกข้อมูลใช่หรือไม่?',
      text: "กรุณาตรวจสอบข้อมูลก่อนบันทึก",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(34 197 94)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'บันทึกข้อมูล',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        submitSfForm(formData, sfSelectedDate);
      }
    })
  };

  const submitSfForm = async (data, date) => {
    const recordDate = dayjs(date).format("MM/DD/YYYY");
    const formData = convertFormDataBeforeSubmit(data, recordDate)
    console.log("submitSfForm")
    setIsLoading(true);
    try {
      const res = await postStorefrontAPI(formData)
      setIsLoading(false);
      console.log(res)
      Swal.fire({
        icon: 'success',
        title: 'บันทึกข้อมูลสำเร็จ',
      }).then(() => {
        clearFormData()
        setActiveStep(() => 1);
      })
      return
    } catch (error) {
      setIsLoading(false);
      Swal.fire({
        icon: 'error',
        title: 'ไม่สามารถบันทึกข้อมูลได้',
        text: 'เกิดข้อผิดพลาด ERROR : ' + error,
      })
    }
  }

  return (
    <div className=" mx-auto bg-white">
      {isLoading && <Loading />}

      {/* <Calendar/> */}
      <form onSubmit={handleSubmit}>
        {/*start stepper */}
        <SfFormStepper activeStep={activeStep} />
        <div
          className={`flex ${activeStep === 1 ? "justify-end" : "justify-between"
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

        {activeStep === 1 && <SfInputForm />}
        {activeStep === 2 && <LeftoverFormContainer />}
        {activeStep === 3 && <SfTableBeforeSubmit />}
      </form>
    </div>
  );
};

export default StorefrontForm;
