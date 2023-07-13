import React, { useContext, useState } from "react";
import SfFormStepper from "@/components/storefront/SfFormStepper";
import SfInputForm from "@/components/storefront/SfInputForm";
import { SfFormDataContext } from "@/context/SfFormDataContext";
import LeftoverFormContainer from "@/components/storefront/LeftoverFormContainer";
import Swal from "sweetalert2";
import {convertFormDataBeforeSubmit} from '@/utils/storefrontUtils';

// import Calendar from "./Calendar";
import SfTableBeforeSubmit from "@/components/storefront/SfTableBeforeSubmit";
import dayjs from "dayjs";
import { postStorefrontAPI } from "../../services/API/storefrontAPI";

const StorefrontForm = () => {
  const { formData, sfSelectedDate } = useContext(SfFormDataContext);

  const [activeStep, setActiveStep] = useState(1);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitSfForm(formData,sfSelectedDate);
    // console.log(formData);
    // Swal.fire({
    //   title: 'ต้องการบันทึกข้อมูลใช่หรือไม่?',
    //   text: "กรุณาตรวจสอบข้อมูลก่อนบันทึก",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: 'rgb(34 197 94)',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'บันทึกข้อมูล',
    //   cancelButtonText: 'ยกเลิก'
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     console.log(formData);
    //   } else {
    //     console.log('cancel')
    //   }
    // })

    // setActiveStep(() => 1);
  };

  const submitSfForm = async (data,date) => {
    const recordDate = dayjs(date).format("MM/DD/YYYY");
    const formData = convertFormDataBeforeSubmit(data,recordDate)
    console.log("submitSfForm")
    const res = await postStorefrontAPI(formData)
    console.log(res)
  }

  return (
    <div className=" mx-auto bg-white">
      {/* <Calendar/> */}
      <form onSubmit={handleSubmit}>
        {/*start stepper */}
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

        {activeStep === 1 && <SfInputForm />}
        {activeStep === 2 && <LeftoverFormContainer />}
        {activeStep === 3 && <SfTableBeforeSubmit />}
      </form>
    </div>
  );
};

export default StorefrontForm;
