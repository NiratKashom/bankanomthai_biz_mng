import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import ReactDatepicker from "@/components/ReactDatepicker";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { getDailyExpenseByDateAPI } from "@/services/API/reportAPI";
import { useQueryClient } from "@tanstack/react-query";
import DailyExpensePieChart from "@/components/report/chart/DailyExpensePieChart";
import AmountLabel from "./AmountLabel";
import DailyExpListContainer from "./DailyExpListContainer";

const DailyExpenseModal = ({ selectedDate = null, closeModal }) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState({expenseList: []});
  const [date, setDate] = useState(selectedDate);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (selectedDate) => {
    setIsLoading(true);
    try {
      const response = await getDailyExpenseByDateAPI(selectedDate);
      const formattedDate = dayjs(selectedDate).format("YYYY-MM-DD");
      queryClient.setQueryData(
        ["report/daily/expense", formattedDate],
        response
      );
      setData((prev) => ({ prev, ...response }));
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
        "report/daily/expense",
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
       overflow-x-hidden overflow-y-auto max-h-full rounded-lg p-4 shadow-lg relative z-10"
      >
        <div className="">
          {/* header */}
          <h1 className="text-xl text-center font-bold mb-2">
            รายจ่ายตามประเภท
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
                />
              </div>

              <div className=" my-2 text-gray-500 w-4/5 pl-4">
                <AmountLabel
                  label="รวมทั้งหมด"
                  value={data?.summarizeExpense?.sumExpense}
                  additionalLabelClass="mb-2"
                  additionalValClass={"text-red-500 underline"}
                />
                <AmountLabel
                  label="วัตถุดิบ"
                  value={data?.summarizeExpense?.sumRawMaterial.sum}
                  additionalLabelClass="mb-1"
                  additionalValClass={"text-purple-500"}
                />
                <AmountLabel
                  label="บรรจุภัณฑ์"
                  value={data?.summarizeExpense?.sumPackaging.sum}
                  additionalLabelClass="mb-2"
                  additionalValClass={"text-sky-400"}
                />
                <AmountLabel
                  label="บริโภค"
                  value={data?.summarizeExpense?.sumConsume.sum}
                  additionalLabelClass="mb-2"
                  additionalValClass={"text-green-500"}
                />
                <AmountLabel
                  label="ต้นทุนอื่นๆ"
                  value={data?.summarizeExpense?.sumOtherCosts.sum}
                  additionalLabelClass="mb-2"
                  additionalValClass={"text-orange-400"}
                />
                <AmountLabel
                  label="อื่นๆ"
                  value={data?.summarizeExpense?.sumOther.sum}
                  additionalValClass={"text-pink-500"}
                />
              </div>
              
            </div>

            {/* chart container */}
            <div className=" w-1/2 mr-6">
              <DailyExpensePieChart dataSet={data?.summarizeExpense || []} />
            </div>
          </div>

          {/* expense list section */}
          <div className="w-full border mb-2">
            <DailyExpListContainer expenseData={data?.expenseList || []} />
          </div>
        </div>

        {/* footer */}
        <div className="self-end">
          <Button text="ปิด" color="red" onClick={closeModal} isOutlinedStyle />
        </div>
      </div>

    </div>
  );
};

export default DailyExpenseModal;
