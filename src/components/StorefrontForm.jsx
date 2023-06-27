import React, { useContext, useState } from "react";
import SfFormStepper from "./SfFormStepper";
import SfInputForm from "./SfInputForm";
import { SfFormDataContext } from '../context/SfFormDataContext';

const StorefrontForm = () => {
  const { formData,setFormData } = useContext(SfFormDataContext);

  const [activeStep, setActiveStep] = useState(1);

  // const [formList, setFormList] = useState([]);

  // const handleInputChange = (target, idx) => {
  //   const { name, value } = target;
  //   setFormData((prevFormData) => {
  //     const updatedFormData = [...prevFormData];
  //     updatedFormData[idx] = { ...updatedFormData[idx], [name]: value };
  //     return updatedFormData;
  //   });
  // };

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
    <div className=" mx-auto p-8 bg-white">
      <SfFormStepper activeStep={activeStep} />
      <form onSubmit={handleSubmit}>
        <div
          className={`flex ${
            activeStep === 1 ? "justify-end" : "justify-between"
          } mt-4`}
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

        <h2 className="text-xl font-semibold mb-4">เลือกวันที่บันทึก</h2>

        {activeStep === 1 &&
          formData.map((item, idx) => (
            <SfInputForm
              key={"sfFormData" + idx}
              idx={idx}
              data={item}
            />
          ))}

        {activeStep === 2 && <div>ใส่ของแถมหรือของเหลือ</div>}
        {activeStep === 3 && <div>ตรวจสอบก่อนบันทึก</div>}

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="text-green-500 font-semibold px-4 py-2 rounded border-2 border-green-500"
            onClick={handleAddList}
          >
            Add List
          </button>
        </div>
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
