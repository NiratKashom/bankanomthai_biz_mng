import React, { useEffect, useState } from "react";
import ExpenseForm from "@/components/expense/ExpenseForm";
import ExpViewTable from "@/components/expense/ExpViewTable";
import TabButton from "../components/TabButton";

function Expense() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const TAB_FORM_LIST = [
    "ฟอร์มกรอกข้อมูล",
    "รายการที่บันทึกไปแล้ว",
  ]

  return (
    <div>
      <p className="text-center text-3xl">บันทึกรายจ่าย</p>

      <div className="w-full mx-auto ">

        <div className="flex border-b">
          {TAB_FORM_LIST.map((item, index) => (
            <TabButton
              key={"expForm" + index}
              selfIdx={index + 1}
              activeTab={activeTab}
              handleClick={() => handleTabChange(index + 1)}
              text={item}
            />
          ))}
        </div>

        {activeTab === 1 && <ExpenseForm />}
        {activeTab === 2 && <ExpViewTable />}
      </div>
    </div>
  );
}

export default Expense;
