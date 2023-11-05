import React, { useState } from "react";
import MonthlyReport from "../components/report/MonthlyReport";
import MonthlyLeftoverReport from "../components/report/MonthlyLeftoverReport";

function Report() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold  border-b-4 border-blue-500";

  return (
    <div>
      <div className="w-full mx-auto ">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === 1 ? activeTabClass : " text-gray-700"
            }`}
            onClick={() => handleTabChange(1)}
          >
            ยอดประจำเดือน
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 2 ? activeTabClass : " text-gray-700"
            }`}
            onClick={() => handleTabChange(2)}
          >
            เอาไปขาย-เหลือกลับ
          </button>
        </div>

        {activeTab === 1 && (
          <div className="p-4">
            <MonthlyReport />
          </div>
        )}
        {activeTab === 2 && (
          <div className="p-4">
            <MonthlyLeftoverReport />
          </div>
        )}
      </div>
    </div>
  );
}

export default Report;
