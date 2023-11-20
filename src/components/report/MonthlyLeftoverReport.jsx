import React, { useEffect, useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import Loading from "@/components/Loading";
import AmountLabel from "./AmountLabel";

import { getMonthlyLeftoverReportAPIByDate } from "../../services/API/reportAPI";
import MonthlyLeftoverLineChart from "./MonthlyLeftoverLineChart";

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
      <h1 className="text-2xl text-center">สรุปยอด ของเอาไปขาย-ของเหลือกลับ</h1>
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
              label={"มูลค่าของเอาไปขาย"}
              value={monthlyLeftoverReportData?.sumStorefront}
              additionalValClass="text-green-500"
              marginRight
            />

            <AmountLabel
              label={"มูลค่าของที่เหลือ"}
              value={monthlyLeftoverReportData?.sumLeftover}
              additionalValClass="text-red-600"
              showPercentage
              percentage={monthlyLeftoverReportData?.leftoverRatio}
            />

          </div>
        </div>

        <hr />
        <div>
          <MonthlyLeftoverLineChart
            reportData={monthlyLeftoverReportData?.data || []}
          />
        </div>
      </div>
    </div>
  );
}

export default MonthlyLeftoverReport;
