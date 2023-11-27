import React, { useState } from "react";
import TabButton from "../TabButton";

function DailyExpListTable() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const expCategoryList = [
    "ทั้งหมด",
    "วัตถุดิบ",
    "บรรจุภัณฑ์",
    "บริโภค",
    "ต้นทุนอื่นๆ",
    "อื่นๆ",
  ];

  return (
    <div className="w-full mx-auto ">
      <div className="flex border-b">
        {expCategoryList.map((item, index) => (
          <TabButton
            key={"expenseTab" + index}
            activeTab={activeTab}
            selfIdx={index + 1}
            handleClick={() => handleTabChange(index + 1)}
            text={item}
          />
        ))}
      </div>

      {activeTab === 1 && <div className="p-4">1</div>}
      {activeTab === 2 && <div className="p-4">2</div>}
      {activeTab === 3 && <div className="p-4">3</div>}
      {activeTab === 4 && <div className="p-4">4</div>}
      {activeTab === 5 && <div className="p-4">5</div>}
      {activeTab === 6 && <div className="p-4">6</div>}
    </div>
  );
}

export default DailyExpListTable;
