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
        <div className="border p-4 w-1/2 my-4">
          <div className="flex justify-between my-4">
            <Button
              className="w-1/3"
              isOutlinedStyle
              color={"blue"}
              text="สรุปรายงานวันนี้"
              onClick={() => setIsOpenModal(true)}
            />

            {/* <Button
              className="w-1/3"
              isOutlinedStyle
              color="blue"
              text="หน้ารวมสรุปรายงาน"
            /> */}
          </div>
          <div className="flex justify-between my-4">
            <Button
              className="w-1/3"
              isOutlinedStyle
              color="green"
              text="บันทึกของเอาไปขาย"
              onClick={() => navigate("/storefront", { replace: true })}
            />
            <Button
              color="red"
              className="w-1/3"
              isOutlinedStyle
              text="บันทึกรายจ่าย"
              onClick={() => navigate("/expense", { replace: true })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
