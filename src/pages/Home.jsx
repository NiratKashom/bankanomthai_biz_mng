import React, { useState } from "react";
import Button from "@/components/Button";
import DailyReportModal from "@/components/report/DailyReportModal";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      {isOpenModal && (
        <DailyReportModal closeModal={() => setIsOpenModal(false)} />
      )}
      <p className="text-2xl text-center">ยินดีต้อนรับ</p>

      <div
        className="flex justify-center"
        style={{ height: "calc(100vh - 128px)" }}
      >
        <div className="text-center p-4 w-2/2 my-4">
          <button
            className={`font-bold py-1 px-2 mx-1 rounded text-blue-500  hover:bg-blue-500 hover:text-white border-2 border-blue-500`}
            onClick={() => setIsOpenModal(true)}
          >
            สรุปรายรับรายจ่าย
          </button>
          <button
            className={`font-bold py-1 px-2 mx-1 rounded text-blue-500  hover:bg-blue-500 hover:text-white border-2 border-blue-500`}
            onClick={() => navigate("/report", { replace: true })}
          >
            สรุปยอดประจำเดือน
          </button>
          <Button
            className="mx-1"
            isOutlinedStyle
            color="green"
            text="บันทึกของเอาไปขาย"
            onClick={() => navigate("/storefront", { replace: true })}
          />
          <Button
            color="red"
            className="mx-1"
            isOutlinedStyle
            text="บันทึกรายจ่าย"
            onClick={() => navigate("/expense", { replace: true })}
          />
        </div>
      </div>

    
    </div>
  );
}

export default Home;
