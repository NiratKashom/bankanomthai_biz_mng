import React, { useState } from "react";
import StorefrontForm from "../components/StorefrontForm";

function Storefront() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold  border-b-4 border-blue-500"

  return (
    <div>
      <p className="text-center text-3xl">บันทึกของที่นำไปขาย</p>

      <div className="w-full mx-auto ">
        <div className="flex border-b">
          <button
            className={`py-2 px-4 ${
              activeTab === 1
                ? activeTabClass
                : " text-gray-700"
            }`}
            onClick={() => handleTabChange(1)}
          >
            ฟอร์มกรอกข้อมูล
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === 2
                ? activeTabClass
                : " text-gray-700"
            }`}
            onClick={() => handleTabChange(2)}
          >
            รายการที่บันทึกไปแล้ว
          </button>
        </div>

        {activeTab === 1 && (
          <div className=" p-4 ">
            <StorefrontForm />
          </div>
        )}
        {activeTab === 2 && (
          <div className=" p-4 ">รายการที่บันทึกไปแล้ว</div>
        )}
      </div>

    </div>
  );
}

export default Storefront;
