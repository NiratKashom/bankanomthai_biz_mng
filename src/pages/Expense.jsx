import React, { useEffect, useState } from "react";
import ExpenseForm from "@/components/expense/ExpenseForm";
import ExpViewTable from "@/components/expense/ExpViewTable";
import axios from "@/config/axios.config.js";
import dayjs from "dayjs";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

function Expense() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold  border-b-4 border-blue-500";



  return (
    <div>
      <p className="text-center text-3xl">บันทึกรายจ่าย</p>

      <div className="w-full mx-auto ">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === 1 ? activeTabClass : " text-gray-700"
            }`}
            onClick={() => handleTabChange(1)}
          >
            ฟอร์มกรอกข้อมูล
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 2 ? activeTabClass : " text-gray-700"
            }`}
            onClick={() => handleTabChange(2)}
          >
            รายการที่บันทึกไปแล้ว
          </button>
        </div>

        {activeTab === 1 && (
          <div className=" p-4 ">
            <ExpenseForm />
          </div>
        )}
        {activeTab === 2 && (
          <ExpViewTable />
        )}
      </div>
    </div>
  );
}

export default Expense;
