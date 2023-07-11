import React, { useContext, useState } from "react";
import { SfFormDataContext } from "../context/SfFormDataContext";
import SfInputFormList from "./SfInputFormList";
import DatepickerBuddhist from "./DatepickerBuddhist";

function SfInputForm() {
  const { formData, setFormData, sfSelectedDate, setSfSelectedDate } =
    useContext(SfFormDataContext);

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
        <DatepickerBuddhist
          selectedDate={sfSelectedDate}
          setSelectedDate={setSfSelectedDate}
          logDate
        />
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
          เพิ่มรายการ
        </button>
      </div>
    </div>
  );
}

export default SfInputForm;
