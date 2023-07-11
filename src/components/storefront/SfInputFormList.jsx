import React, { useContext } from "react";
import { SfFormDataContext } from "@/context/SfFormDataContext";
import SfOptionsList from "@/components/storefront/SfOptionsList";

function SfInputFormList({ data, idx }) {
  const { updateFormData, deleteFormDataItem } = useContext(SfFormDataContext);

  const handleInputChange = (target, idx) => {
    const { name, value } = target;
    updateFormData(idx, { [name]: value });
  };

  return (
    <div className="hover:bg-slate-200 p-2 border-y-2">
      <div className="flex space-x-2 mb-2">
        <div className="w-1/4">
          <label className="block  mb-1">รายการ:</label>
          <select
            name="title"
            value={data.title}
            onChange={(e) => handleInputChange(e.target, idx)}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          >
            <SfOptionsList />
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
            <option value="เลือกหน่วย">เลือกหน่วยนับ</option>
            <option value="กล่อง">กล่อง</option>
            <option value="กิโลกรัม">กิโลกรัม</option>
            <option value="ชุด">ชุด</option>
            <option value="ชิ้น">ชิ้น</option>
            <option value="ถาด">ถาด</option>
            <option value="ถุง">ถุง</option>
            <option value="ถ้วย">ถ้วย</option>
            <option value="ลูก">ลูก</option>
            <option value="อื่นๆ">อื่นๆ ระบุในหมายเหตุ</option>
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

export default SfInputFormList;
