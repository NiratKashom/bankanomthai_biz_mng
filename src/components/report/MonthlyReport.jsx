import React, { useEffect, useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "@/components/Loading";

import { getMonthlyReportAPIByDate } from "../../services/API/reportAPI";
import MonthlyLineChart from "./MonthlyLineChart";

function MonthlyReport() {
  const queryClient = useQueryClient();

  const [date, setDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState(
    dayjs(date).format("YYYY-MM-DD")
  );

  const { isLoading, data: monthlyReportData } = useQuery(
    ["report/monthly", formatDate],
    () => getMonthlyReportAPIByDate(formatDate)
  );

  useEffect(() => {
    const newDate = dayjs(date).format("YYYY-MM-DD");
    setFormatDate(newDate);
  }, [date]);

  return (
    <div className="border">
      {isLoading && <Loading />}
      <h1>สรุปยอดประจำเดือน</h1>
      <div className="border">
        <div className="flex items-center">
          <h1 className="mr-2">เลือกเดือน / ปี :</h1>
          <ReactDatepicker
            className="border-2-red"
            selectedDate={date}
            setSelectedDate={setDate}
            showMonthYearPicker
            dateFormat="MMMM yyyy"
          />
        </div>
        <div className="border">
          <MonthlyLineChart reportData={monthlyReportData} />
        </div>
      </div>
    </div>
  );
}

export default MonthlyReport;
