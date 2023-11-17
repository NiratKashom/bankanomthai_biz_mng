import React, { useEffect, useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "@/components/Loading";

import { getMonthlyExpenseReportAPI } from "../../services/API/reportAPI";
import MonthlyExpenseReportLineChart from "./MonthlyExpenseReportLineChart";
import AmountLabel from "./AmountLabel";

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
      <h1 className="text-2xl text-center">สรุปยอด รายจ่ายตามประเภท</h1>
      <div className="px-2">
        <div className="my-2 flex justify-between">
          <div className="px-8 flex items-center ">
            <h1 className="mr-2">เลือกเดือน / ปี :</h1>
            <ReactDatepicker
              className="border-2-red"
              selectedDate={date}
              setSelectedDate={setDate}
              showMonthYearPicker
              dateFormat="MMMM yyyy"
            />
          </div>

          <div className="flex">
            <AmountLabel
              label={"รวมทั้งเดือน"}
              value={expData?.summarizeExpenseData?.sumExpense}
              additionalValClass={"text-red-500"}
              marginRight
            />
            <AmountLabel
              label={"วัตถุดิบ"}
              value={expData?.summarizeExpenseData?.sumRawMaterial.sum}
              additionalValClass={"text-purple-500"}
              marginRight
              showPercentage
              percentage={expData?.summarizeExpenseData?.sumRawMaterial.ratio}
            />
            <AmountLabel
              label={"บรรจุภัณฑ์"}
              value={expData?.summarizeExpenseData?.sumPackaging.sum}
              additionalValClass={"text-sky-400"}
              marginRight
              showPercentage
              percentage={expData?.summarizeExpenseData?.sumPackaging.ratio}
            />
            <AmountLabel
              label={"บริโภค"}
              value={expData?.summarizeExpenseData?.sumConsume.sum}
              additionalValClass={"text-green-400"}
              marginRight
              showPercentage
              percentage={expData?.summarizeExpenseData?.sumConsume.ratio}
            />

            <AmountLabel
              label={"ต้นทุนอื่นๆ"}
              value={expData?.summarizeExpenseData?.sumOtherCosts.sum}
              additionalValClass={"text-orange-400"}
              marginRight
              showPercentage
              percentage={expData?.summarizeExpenseData?.sumOtherCosts.ratio}
            />
            <AmountLabel
              label={"อื่นๆ"}
              value={expData?.summarizeExpenseData?.sumOther.sum}
              additionalValClass={"text-red-400"}
              showPercentage
              percentage={expData?.summarizeExpenseData?.sumOther.ratio}
            />
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
