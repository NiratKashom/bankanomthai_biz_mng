import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import ReactDatepicker from "@/components/ReactDatepicker";
import AccordianDailyReport from "@/components/report/AccordianDailyReport";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { getDailyReportAPIByDate } from "../../services/API/reportAPI";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import DailyPieChart from "./DailyPieChart";

const DailyReportModal = ({ selectedDate = null, closeModal }) => {
  const queryClient = useQueryClient();

  const [data, setData] = useState({});
  const [date, setDate] = useState(selectedDate);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (selectedDate) => {
    setIsLoading(true);
    try {
      const response = await getDailyReportAPIByDate(selectedDate);
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
      queryClient.setQueryData(["report/daily", formattedDate], response);
      setData(response);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (date) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const cachedData = queryClient.getQueryData([
        "report/daily",
        formattedDate,
      ]);
      if (cachedData) {
        setData(cachedData);
      } else {
        fetchData(date);
      }
    }
  }, [date]);

  return (
    <div className="fixed inset-0 m-8 flex items-start justify-center z-50">
      {isLoading && <Loading />}
      <div className="fixed inset-0 bg-black opacity-50 "></div>{" "}
      {/* Overlay div with black background and opacity */}
      <div
        className="bg-white flex flex-col justify-between w-1/2 m-8
       overflow-x-hidden overflow-y-auto h-5/6 rounded-lg p-4 shadow-lg relative z-10"
      >
        <div className="">
          <h1 className="text-xl text-center font-bold mb-4">
            สรุปรายรับ-รายจ่าย
          </h1>
          <hr />
          <div className="flex justify-center items-center m-2">
            <h1 className="mr-2">วันที่ :</h1>
            <ReactDatepicker
              className="border-2-red"
              selectedDate={date}
              setSelectedDate={setDate}
            />
          </div>
          <div className="flex justify-between my-4">
            <div className="text-2xl w-1/3">
              <div className="flex justify-between">
                <span>รายรับ</span> 
                <span>5000</span>
              </div>
              <p>รายจ่าย</p>
              <p>รวมสุทธิ</p>
            </div>
            <DailyPieChart
              dataSet={{ income: data?.storefront, expense: data?.expense }}
            />
          </div>
          <AccordianDailyReport
            reportList={[
              { ...data?.storefront, type: "income" },
              { ...data?.expense, type: "expense" },
            ]}
          />
        </div>

        <div className="self-end">
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
