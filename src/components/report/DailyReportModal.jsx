import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import ReactDatepicker from "@/components/ReactDatepicker";
import AccordianDailyReport from "@/components/report/AccordianDailyReport";
import Button from "@/components/Button";

const DailyReportModal = ({ selectedDate = new Date(), closeModal }) => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(selectedDate);

  const accordionItems = [
    { title: "Accordion Item 1", content: "Content 1" },
    { title: "Accordion Item 2", content: "Content 2" },
  ];

  const fetchData = async () => {
    // try {
    //   const response = await fetch("https://api.example.com/data");
    //   const jsonData = await response.json();
    //   setData(jsonData);
    // } catch (error) {
    //   console.error("Error fetching data:", error);
    // }
  };

  useEffect(() => {
    console.log("UseEffect Ja");
  }, []);

  return (
    <div className="fixed inset-0 m-8 flex items-start justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay div with black background and opacity */}
      <div className="bg-white w-1/2  rounded-lg p-4 shadow-lg relative z-10">
        <h1 className="text-xl text-center font-bold mb-2">
          สรุปรายรับ-รายจ่าย
        </h1>
        <div className="flex items-center m-2">
          <h1 className="mr-2">วันที่ :</h1>
          <ReactDatepicker selectedDate={date} setSelectedDate={setDate} />
        </div>

        <AccordianDailyReport items={accordionItems} />
        <div className="flex justify-end">
          <Button text="ปิด" color="red" onClick={closeModal} isOutlinedStyle />
          {/* <button
            className="mt-4  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            ปิด
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DailyReportModal;
