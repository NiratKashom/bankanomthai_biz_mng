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
      <div className="container mx-auto px-2 py-2">
        <div className="grid grid-cols-12 gap-0 border-b-2">
          <div className=" font-semibold text-right"></div>
          <div className=" font-semibold text-center col-span-5">ประเภท - ชื่อ</div>
          <div className=" font-semibold text-right">จำนวน</div>
          <div className=" font-semibold text-right"></div>
          <div className=" font-semibold text-right ">ราคารวม</div>
          <div className=" font-semibold text-center ">ขายไม่หมด</div>
          <div className=" font-semibold text-center">จำนวนเหลือ</div>
          <div className=" font-semibold text-rigth">ราคารวมของที่เหลือ</div>
          {/* <div className="p-2 font-semibold border-x text-right col-span-2">หมายเหตุ</div> */}
        </div>
        {formData.map((data, idx) => (
          <div className="hover:bg-slate-100 grid grid-cols-12 gap-2 border-b-2 py-2" key={"leftoverItem" + idx}>
            <div className=" text-right">{idx + 1 + "."}</div>
            <div className=" text-left col-span-5">{data.title}</div>
            <div className=" text-right">{data.amount}</div>
            <div className=" text-left">{data.unit}</div>
            <div className=" text-right">{data.totalPrice}</div>
            <div className=" text-center">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500 h-6 w-6 "
                name="isLeftover"
                checked={data.isLeftover}
                onChange={(e) => handleCheckBoxChange(e.target, idx)}
              />
            </div>
            <div className=" flex justify-center">
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
            <div className=" flex justify-center">
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
            <div className="text-right"></div>
            <div className="text-left col-span-8 "><span className="font-semibold">หมายเหตุ :</span>  {data.remark}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftoverFormContainer;
