import React, { useState } from "react";

const AccordionItem = ({ item }) => {
  const { data = null, amountItems = "0", sumTotalPrice = "0", type } = item;
  const [isOpen, setIsOpen] = useState(false);
  const title = type === "income" ? "รายรับ" : "รายจ่าย";
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border mb-2">
      <button
        className={`w-full ${isOpen ? "text-black" : "text-gray-500"}
        bg-gray-200 hover:text-black font-bold py-2 px-4 flex justify-between`}
        onClick={toggleAccordion}
      >
        <div>{title}</div>
        <div className="flex justify-between w-1/3">
          <p>{amountItems} รายการ</p>
          <p>{sumTotalPrice} บาท</p>
        </div>
      </button>
      {isOpen && (
        <div className="m-2">
          {data?.map((item, idx) => (
            <div
              key={"item" + idx}
              className={`flex justify-between  py-2 px-4  ${
                idx % 2 && "bg-gray-100"
              }`}
            >
              <div>{idx + 1 + "."} </div>
              <div className="flex justify-between w-1/3">
                <div>{item.category} </div>
                <div>{item.title}</div>
              </div>
              <div className="flex justify-between w-1/3">
                <div className="w-1/6 text-right">
                  {title === "รายรับ" ? item.incomeAmount : item.qty}
                </div>

                <div className="w-1/6">{item.unit}</div>
                <div>
                  {title === "รายรับ" ? item.incomeTotalPrice : item.totalPrice}
                </div>
              </div>
            </div>
          )) || <div className="text-center">ไม่มีข้อมูล</div>}
        </div>
      )}
    </div>
  );
};

const AccordianDailyReport = ({ reportList = [] }) => {
  return (
    <div className="w-full">
      {reportList.map((list, index) => (
        <AccordionItem key={"accordianDailyReport" + index} item={list || {}} />
      ))}
    </div>
  );
};

export default AccordianDailyReport;
