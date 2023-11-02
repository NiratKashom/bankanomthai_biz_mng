import React, { useEffect, useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "@/components/Loading";

import { getMonthlyLeftoverReportAPIByDate } from "../../services/API/reportAPI";
import MonthlyLineChart from "./MonthlyLineChart";

function MonthlyLeftoverReport() {
  // const queryClient = useQueryClient();

  const [date, setDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState(
    dayjs(date).format("YYYY-MM-DD")
  );

  const { isLoading, data: monthlyLeftoverReportData } = useQuery(
    ["report/monthly/lefover", formatDate],
    () => getMonthlyLeftoverReportAPIByDate(formatDate)
  );

  useEffect(() => {
    const newDate = dayjs(date).format("YYYY-MM-DD");
    setFormatDate(newDate);
  }, [date]);

  return (
    <div>
      {isLoading && <Loading />}
      <h1 className="text-2xl text-center">สรุปยอด ของเอาไปขาย-ของเหลือ</h1>
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
            <div className="flex justify-between items-baseline mr-2">
              <span className="mr-2">มูลค่าของเอาไปขาย : </span>
              <span className="text-2xl font-semibold text-green-500">
                {monthlyLeftoverReportData?.sumStorefront || 0}
              </span>
            </div>

            <div className="flex justify-between items-baseline">
                <span className="mr-2">มูลค่าของที่เหลือ : </span>
                <span className="text-2xl font-semibold text-red-600">
                  {monthlyLeftoverReportData?.sumLeftover || 0}
                </span>
            </div>
          </div>
        </div>

        <hr />
        <div className="">
          <MonthlyLineChart
            reportData={monthlyLeftoverReportData?.data || []}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyLeftoverReport;
