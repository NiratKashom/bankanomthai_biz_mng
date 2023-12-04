import React, { useEffect, useState } from "react";
import TabButton from "../TabButton";
import DailyExpListTable from "./DailyExpListTable";

function MonthlyExpListContainer({ expenseData = [] }) {
  const [activeTab, setActiveTab] = useState(1);
  const [expByCategoryList, setExpByCategoryList] = useState({
    rawMaterials: [],
    packaging: [],
    consume: [],
    otherCosts: [],
    other: [],
  });

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const EXP_CATEGORY_LIST = [
    "ทั้งหมด",
    "วัตถุดิบ",
    "บรรจุภัณฑ์",
    "บริโภค",
    "ต้นทุนอื่นๆ",
    "อื่นๆ",
  ];

  const rawList = expenseData.filter((item) => item.category === "วัตถุดิบ");
  const pkgList = expenseData.filter((item) => item.category === "บรรจุภัณฑ์");
  const consumeList = expenseData.filter((item) => item.category === "บริโภค");
  const otherCostsList = expenseData.filter(
    (item) => item.category === "ต้นทุนอื่นๆ"
  );
  const otherList = expenseData.filter((item) => item.category === "อื่นๆ");

  return (
    <div
      className="w-full h-full mx-auto text-center"
      style={{ maxHeight: "45vh" }}
    >
      <p className="underline">เรียงตามมูลค่ามากที่สุด</p>
      <div className="flex border-b">
        {EXP_CATEGORY_LIST.map((item, index) => (
          <TabButton
            key={"expenseTab" + index}
            activeTab={activeTab}
            selfIdx={index + 1}
            handleClick={() => handleTabChange(index + 1)}
            text={item}
          />
        ))}
      </div>
      <div className="h-full overflow-y-auto">
        {activeTab === 1 &&
          expenseData.map((item, idx) => (
            <ExpenseItem key={"all" + idx} item={item} idx={idx} />
          ))}
        {activeTab === 2 &&
          rawList.map((item, idx) => (
            <ExpenseItem key={"raw" + idx} item={item} idx={idx} />
          ))}
        {activeTab === 3 &&
          pkgList.map((item, idx) => (
            <ExpenseItem key={"pkg" + idx} item={item} idx={idx} />
          ))}
        {activeTab === 4 &&
          consumeList.map((item, idx) => (
            <ExpenseItem key={"consume" + idx} item={item} idx={idx} />
          ))}
        {activeTab === 5 &&
          otherCostsList.map((item, idx) => (
            <ExpenseItem key={"otherCosts" + idx} item={item} idx={idx} />
          ))}
        {activeTab === 6 &&
          otherList.map((item, idx) => (
            <ExpenseItem key={"other" + idx} item={item} idx={idx} />
          ))}
      </div>
    </div>
  );
}

export default MonthlyExpListContainer;

const ExpenseItem = ({ item, idx }) => {
  return (
    <div
      className={`flex justify-between  py-2 px-4  ${idx % 2 || "bg-gray-100"}`}
    >
      <div className="w-full ">{idx + 1 + "."}</div>
      <div className="w-full text-start ">{item.category}</div>
      <div className="w-full text-start ">{item.title}</div>
      <div className="w-full ">{item.sum_total_amount}</div>
    </div>
  );
};
