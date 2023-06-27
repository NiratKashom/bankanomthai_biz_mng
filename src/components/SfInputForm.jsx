import React, { useContext } from "react";
import { SfFormDataContext } from "../context/SfFormDataContext";

function SfInputForm({ data, idx }) {
  const { updateFormData, deleteFormDataItem } = useContext(SfFormDataContext);

  const handleInputChange = (target, idx) => {
    const { name, value } = target;
    updateFormData(idx, { [name]: value });
  };

  return (
    // <div className={`${idx % 2 && 'bg-slate-100'} p-4`}>
    <div className="hover:bg-slate-100 p-2 border-t-4">
      {/* <div className="flex justify-between mb-2">
        <div className="text-2xl font-semibold">รายการที่ {idx + 1}</div>
      </div> */}
      <div className="flex space-x-2 mb-2">
        <div className="w-1/4">
          <label className="block  mb-1">รายการ:</label>
          <select
            name="title"
            value={data.title}
            onChange={(e) => handleInputChange(e.target, idx)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          >
            <option value="">Select Title</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        <div className="w-1/4">
          <label className="block mb-1">จำนวน:</label>
          <input
            type="number"
            name="amount"
            value={data.amount}
            onChange={(e) => handleInputChange(e.target, idx)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="w-1/4">
          <label className="block  mb-1">หน่วยนับ:</label>
          <select
            name="unit"
            value={data.unit}
            onChange={(e) => handleInputChange(e.target, idx)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          >
            <option value="">Select Unit</option>
            <option value="Unit 1">Unit 1</option>
            <option value="Unit 2">Unit 2</option>
            <option value="Unit 3">Unit 3</option>
          </select>
        </div>

        <div className="w-1/4">
          <label className="block  mb-1">ราคารวม:</label>
          <input
            type="number"
            name="totalPrice"
            value={data.totalPrice}
            onChange={(e) => handleInputChange(e.target, idx)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
      </div>

      <div className="flex space-x-2 mb-4">
        <div className="w-3/4">
          <label className="block  mb-1">หมายเหตุ:</label>
          <input
            type="text"
            name="remark"
            value={data.remark}
            onChange={(e) => handleInputChange(e.target, idx)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="w-1/4 flex justify-end items-end ">
          <button
            type="button"
            className="text-red-500 border-red-500  px-2 py-2 rounded border-2 
            hover:text-white hover:bg-red-500"
            onClick={() => deleteFormDataItem(idx)}
          >
            ลบรายการนี้
          </button>
        </div>
      </div>
    </div>
  );
}

export default SfInputForm;
