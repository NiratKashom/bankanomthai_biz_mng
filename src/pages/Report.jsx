import React, { useState } from "react";
import TabButton from "@/components/TabButton";
import MonthlyReport from "@/components/report/MonthlyReport";
import MonthlyLeftoverReport from "@/components/report/MonthlyLeftoverReport";
import MonthlyExpenseReport from "@/components/report/MonthlyExpenseReport";

function Report() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const TAB_REPORT_LIST = [
    "ยอดประจำเดือน",
    "เอาไปขาย-เหลือกลับ",
    "รายจ่ายตามประเภท",
  ];

  return (
    <div>
      <div className="w-full mx-auto ">
        <div className="flex border-b">
          {TAB_REPORT_LIST.map((item, index) => (
            <TabButton
              key={"reportTabList" + index}
              selfIdx={index + 1}
              activeTab={activeTab}
              handleClick={() => handleTabChange(index + 1)}
              text={item}
            />
          ))}
        </div>
        <div className="p-4">
          {activeTab === 1 && <MonthlyReport />}
          {activeTab === 2 && <MonthlyLeftoverReport />}
          {activeTab === 3 && <MonthlyExpenseReport />}
        </div>
      </div>
    </div>
  );
}

export default Report;
