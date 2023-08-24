import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import ReactDatepicker from "@/components/ReactDatepicker";
import AccordianDailyReport from "@/components/report/AccordianDailyReport";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { getDailyReportAPIByDate } from "../../services/API/reportAPI";
import { useQueryClient } from "@tanstack/react-query";
import DailyBarChart from "./DailyBarChart";
import { convertCommaStringToNumber } from "@/utils/reportUtils";

const DailyReportModal = ({ selectedDate = null, closeModal }) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState({});
  const [date, setDate] = useState(selectedDate);
  const [isLoading, setIsLoading] = useState(false);
  const [netValue, setNetValue] = useState(0);


  const fetchData = async (selectedDate) => {
    setIsLoading(true);
    try {
      const response = await getDailyReportAPIByDate(selectedDate);
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
      queryClient.setQueryData(["report/daily", formattedDate], response);
      const newNetValue = calcNetValue(response);
      setNetValue(newNetValue);
      setData(response);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const calcNetValue = (data) => {
    const { storefront, expense } = data;
    const sumExpense = convertCommaStringToNumber(expense?.sumTotalPrice);
    const sumIncome = convertCommaStringToNumber(storefront?.sumTotalPrice);
    return sumIncome - sumExpense;
  };

  useEffect(() => {
    if (date) {
      const formattedDate = dayjs(date).format("YYYY-MM-DD");
      const cachedData = queryClient.getQueryData([
        "report/daily",
        formattedDate,
      ]);
      if (cachedData) {
        const newNetValue = calcNetValue(cachedData);
        setNetValue(newNetValue);
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
       overflow-x-hidden overflow-y-auto max-h-full rounded-lg p-4 shadow-lg relative z-10"
      >
        <div className="">
          {/* header */}
          <h1 className="text-xl text-center font-bold mb-2">
            สรุปรายรับ-รายจ่าย
          </h1>
          <hr />

          {/* summary section */}
          <div className="flex justify-between p-2 mt-2">
            {/* datepicker and summary */}
            <div className=" w-1/2">
              <div className="flex items-center">
                <h1 className="mr-2">วันที่ :</h1>
                <ReactDatepicker
                  selectedDate={date}
                  setSelectedDate={setDate}
                  dateFormat={"dd MMM yyyy"}
                  // showMonthYearPicker={false}
                />
              </div>

              <div className=" my-2 text-gray-500 w-2/3 pl-4">
                <div className=" mb-2 flex justify-between items-baseline">
                  <div className="flex justify-between w-1/2">
                    <span className="">รายรับ</span>
                    <span className="">:</span>
                  </div>
                  <span className=" text-2xl">
                    {data?.storefront?.sumTotalPrice || "-"}
                  </span>
                </div>
                <div className="mb-2 flex justify-between items-baseline">
                  <div className="flex justify-between w-1/2">
                    <span className="">รายจ่าย</span>
                    <span className="">:</span>
                  </div>
                  <span className=" text-2xl">
                    {data?.expense?.sumTotalPrice || "-"}
                  </span>
                </div>
                <div className="mb-2 flex justify-between items-baseline">
                  <div className="flex justify-between w-1/2">
                    <span className="">รายได้สุทธิ</span>
                    <span className="">:</span>
                  </div>
                  <span
                    className={`${
                      netValue > 0 ? "text-green-500" : "text-red-500"
                    } underline text-3xl`}
                  >
                    {netValue.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* chart container */}
            <div className=" w-1/2 mr-6">
              {/* <DailyPieChart
                dataSet={{ income: data?.storefront, expense: data?.expense }}
              /> */}
              <DailyBarChart
                dataSet={{ income: data?.storefront, expense: data?.expense }}
              />
            </div>
          </div>

          {/* accordian section */}
          <AccordianDailyReport
            reportList={[
              { ...data?.storefront, type: "income" },
              { ...data?.expense, type: "expense" },
            ]}
          />
        </div>
        {/* footer */}
        <div className="self-end">
          <Button text="ปิด" color="red" onClick={closeModal} isOutlinedStyle />
        </div>
      </div>
    </div>
  );
};

export default DailyReportModal;
