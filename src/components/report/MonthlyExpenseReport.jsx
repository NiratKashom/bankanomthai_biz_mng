import React, { useEffect, useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "@/components/Loading";

import { getMonthlyExpenseReportAPI } from "../../services/API/reportAPI";
import MonthlyExpenseReportLineChart from "@/components/report/chart/MonthlyExpenseReportLineChart";
import DailyExpensePieChart from "@/components/report/chart/DailyExpensePieChart";

import AmountLabel from "./AmountLabel";
import MonthlyExpListContainer from "./MonthlyExpListContainer";

function MonthlyExpenseReport() {
  const [date, setDate] = useState(new Date());

  const [formatDate, setFormatDate] = useState(
    dayjs(date).format("YYYY-MM-DD")
  );

  const { isLoading, data: expData } = useQuery(
    ["report/monthly/expense", formatDate],
    () => getMonthlyExpenseReportAPI(formatDate)
  );

  useEffect(() => {
    const newDate = dayjs(date).format("YYYY-MM-DD");
    setFormatDate(newDate);
  }, [date]);

  return (
    <div>
      {isLoading && <Loading />}
      <p className="text-2xl text-center">สรุปยอด รายจ่ายตามประเภท</p>
      <div className="p-4">
        <div className="my-2">
          <div className="flex items-center ">
            <p className="mr-2">เลือกเดือน / ปี :</p>
            <ReactDatepicker
              className="border-2-red"
              selectedDate={date}
              setSelectedDate={setDate}
              showMonthYearPicker
              dateFormat="MMMM yyyy"
            />
          </div>
        </div>

        <div className="flex justify-around m-2 gap-6">
          <div className=" text-gray-500 w-1/2">
            <div>
              <DailyExpensePieChart
                dataSet={expData?.summarizeExpenseData || []}
              />
            </div>
            <div>
              <AmountLabel
                label={"รวมทั้งเดือน"}
                value={expData?.summarizeExpenseData?.sumExpense}
                additionalValClass={"text-red-500"}
              />
              <AmountLabel
                label={"วัตถุดิบ"}
                value={expData?.summarizeExpenseData?.sumRawMaterial.sum}
                additionalValClass={"text-purple-500"}
              />
              <AmountLabel
                label={"บรรจุภัณฑ์"}
                value={expData?.summarizeExpenseData?.sumPackaging.sum}
                additionalValClass={"text-sky-400"}
              />
              <AmountLabel
                label={"บริโภค"}
                value={expData?.summarizeExpenseData?.sumConsume.sum}
                additionalValClass={"text-green-400"}
              />
              <AmountLabel
                label={"ต้นทุนอื่นๆ"}
                value={expData?.summarizeExpenseData?.sumOtherCosts.sum}
                additionalValClass={"text-orange-400"}
              />
              <AmountLabel
                label={"อื่นๆ"}
                value={expData?.summarizeExpenseData?.sumOther.sum}
                additionalValClass={"text-red-400"}
              />
            </div>
          </div>

          <div className="w-1/2" >
            <MonthlyExpListContainer expenseData={expData?.expByTitle || []} />
          </div>
        </div>

        <hr />
        <div>
          <MonthlyExpenseReportLineChart
            reportData={expData?.expenseData || []}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyExpenseReport;
