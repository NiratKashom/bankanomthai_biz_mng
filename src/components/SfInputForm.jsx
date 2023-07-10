import React, { useContext, useState } from "react";
import { SfFormDataContext } from "../context/SfFormDataContext";
import SfInputFormList from "./SfInputFormList";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { th } from "date-fns/esm/locale";
import DatepickerBuddhist from "./DatepickerBuddhist";

function SfInputForm() {
  const { formData, setFormData } = useContext(SfFormDataContext);
  const [startDate, setStartDate] = useState(new Date());

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

  return (
    <div>
      <div className="flex">
        <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่บันทึก</h2>
        <DatepickerBuddhist />
      </div>

      {formData.map((item, idx) => (
        <SfInputFormList key={"sfFormData" + idx} idx={idx} data={item} />
      ))}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="text-green-500 font-semibold px-4 py-2 rounded border-2 border-green-500"
          onClick={handleAddList}
        >
          Add List
        </button>
      </div>
    </div>
  );
}

export default SfInputForm;
