import React, { useEffect, useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "@/components/Loading";

import { getMonthlyExpenseReportAPI } from "../../services/API/reportAPI";
import MonthlyExpenseReportLineChart from "./MonthlyExpenseReportLineChart";

function MonthlyExpenseReport() {
  // const queryClient = useQueryClient();

  const [date, setDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState(
    dayjs(date).format("YYYY-MM-DD")
  );

  const { isLoading, data: expenseReportData } = useQuery(
    ["report/monthly/expense", formatDate],
    () => getMonthlyExpenseReportAPI(formatDate)
  );

  // console.log(expenseReportData)

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

        
        </div>

        <hr />
        <div>
          <MonthlyExpenseReportLineChart
            reportData={expenseReportData || []}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyExpenseReport;
