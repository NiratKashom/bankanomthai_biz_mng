import React, { useContext } from "react";
import { SfFormDataContext } from "../context/SfFormDataContext";

function LeftoverFormContainer() {
  const { formData, updateFormData } = useContext(SfFormDataContext);

  const handleCheckBoxChange = (target, idx) => {
    const { name, checked: value } = target;
    updateFormData(idx, { [name]: value });
  };

  const handleInputChange = (target, idx) => {
    const { name, value } = target;
    updateFormData(idx, { [name]: value });
  };

  return (
    <div className="">
      <div>{JSON.stringify(formData)}</div>
      <div className="container mx-auto px-4 py-2">
        <div className="grid grid-cols-8 gap-0 border-b-4">
          <div className="py-2 font-semibold text-right">รายการที่</div>
          <div className="py-2 font-semibold text-right">ประเภท - ชื่อ</div>
          <div className="py-2 font-semibold text-right">จำนวน</div>
          <div className="py-2 font-semibold text-right"></div>
          <div className="py-2 font-semibold text-right">ราคารวม</div>
          <div className="py-2 font-semibold text-right">ขายไม่หมด</div>
          <div className="py-2 font-semibold text-right">จำนวนที่เหลือ</div>
          <div className="py-2 font-semibold text-right">
            ราคารวมของขายไม่หมด
          </div>
        </div>
        {formData.map((data, idx) => (
          <div className="hover:bg-slate-100 grid grid-cols-8 gap-0 border-b-2 " key={"leftoverItem" + idx}>
            <div className="py-2 text-right">{idx + 1}</div>
            <div className="py-2 text-right">{data.title}</div>
            <div className="py-2 text-right">{data.amount}</div>
            <div className="py-2 text-right">{data.unit}</div>
            <div className="py-2 text-right">{data.totalPrice}</div>
            <div className="py-2 text-right">
              {/* <label className="flex items-center space-x-2"> */}
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-6 w-6 "
                name="isLeftover"
                checked={data.isLeftover}
                onChange={(e) => handleCheckBoxChange(e.target, idx)}
              />
              {/* </label> */}
            </div>
            <div className="py-2 text-right">
              <input
                type="number"
                name="leftoverAmount"
                value={data.leftoverAmount}
                placeholder="0"
                disabled={!data.isLeftover}
                onChange={(e) => handleInputChange(e.target, idx)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
            <div className="py-2 text-right">
              <input
                type="number"
                name="leftoverTotalPrice"
                placeholder="0"
                disabled={!data.isLeftover}
                value={data.leftoverTotalPrice}
                onChange={(e) => handleInputChange(e.target, idx)}
                className="border border-gray-300 rounded px-2 py-1 w-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftoverFormContainer;
