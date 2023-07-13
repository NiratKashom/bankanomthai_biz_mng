import React, { useContext, useState } from "react";
import SfFormStepper from "@/components/storefront/SfFormStepper";
import SfInputForm from "@/components/storefront/SfInputForm";
import { SfFormDataContext } from "@/context/SfFormDataContext";
import LeftoverFormContainer from "@/components/storefront/LeftoverFormContainer";
import Swal from "sweetalert2";

// import Calendar from "./Calendar";
import SfTableBeforeSubmit from "@/components/storefront/SfTableBeforeSubmit";
import dayjs from "dayjs";

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
    const recordDate = dayjs(sfSelectedDate).format("MM/DD/YYYY");

    function convertArrayOfObjectsToArray(arr) {
      return arr.map((obj) => {
        const convertedValues = Object.entries(obj).map(
          ([key, value], index) => {
            if (index === 0) {
              const [category, title] = value.split(" : ");
              return [recordDate, title, category];
            }
            if ([1, 3, 6, 7].includes(index)) return Number(value);
            return value;
          }
        );
        return convertedValues.flat();
      });
    }

    const arr = convertArrayOfObjectsToArray(formData);

    console.log(arr);
   
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
