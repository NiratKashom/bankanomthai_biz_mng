import React, { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";
import dayjs from "dayjs";

import ReactDatepicker from "@/components/ReactDatepicker";
import Loading from "@/components/Loading";
import SfHeaderTable from "@/components/storefront/SfHeaderTable";

import { deleteExpenseAPI, getExpenseAPI } from "@/services/API/expenseAPI";
import { updatedByDeleteExpDataByRowId } from "@/utils/expenseUtils";

function ExpViewTable() {
  const queryClient = useQueryClient();

  // const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState(
    dayjs(selectedDate).format("YYYY-MM-DD")
  );

  const { isLoading: fetching, data: expData } = useQuery(
    ["expense", formatDate],
    () => getExpenseAPI(formatDate)
  );

  const { mutateAsync: deleteByRow, isLoading } = useMutation(
    deleteExpenseAPI,
    {
      onSuccess: async (response, rowId) => {
        const previousData = queryClient.getQueryData(["expense", formatDate]);
        if (previousData) {
          const newData = updatedByDeleteExpDataByRowId(previousData, rowId);
          queryClient.setQueryData(["expense", formatDate], newData);
        } else {
          try {
            const res = await getExpenseAPI(formatDate);
            queryClient.setQueryData(["expense", formatDate], [...res.data]);
          } catch (error) {
            console.log("Error", Error);
          }
        }
      },
    }
  );

  const handleDeleteRow = async (rowId) => {
    Swal.fire({
      title: "ยืนยันลบข้อมูลเลขที่: " + rowId,
      text: "ต้องการลบข้อมูลใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "ยืนยัน",
      cancelButtonText: "ยกเลิก",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteByRow(rowId);
        Swal.fire({
          title: "ลบรายการเรียบร้อยแล้ว:",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    const newDate = dayjs(selectedDate).format("YYYY-MM-DD");
    setFormatDate(newDate);
  }, [selectedDate]);

  return (
    <div className=" p-4 ">
      {fetching || isLoading ? <Loading /> : null}
      <div className="flex">
        <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่จะดู</h2>
        <ReactDatepicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className=" p-4 ">
        <p className="text-xl mb-3">{`รายการ รายจ่ายที่บันทึกแล้ว ${
          expData?.amountItems || 0
        } รายการ, รวมเป็นเงิน ${expData?.sumTotalPrice || 0} บาท`}</p>
        <SfHeaderTable
          headerTableColumn={[
            { label: "ลำดับ", width: "1/12" },
            {
              label: "ประเภท - ชื่อ",
              textAlign: "center",
              width: "4/12",
            },
            { label: "จำนวน", width: "1/12" },
            { label: "หน่วย", width: "1/12" },
            { label: "ราคารวม", width: "1/12" },
            { label: "หมายเหตุ", textAlign: "center", width: "4/12" },
            { label: "", textAlign: "center", width: "1/12" },
          ]}
        />
        {expData?.data?.map((data, idx) => {
          const { id, title, category, qty, unit, totalPrice, remark } = data;
          return (
            <div
              className="hover:bg-slate-100 flex items-top border-b-2"
              key={"expViewItem" + idx}
            >
              <div className="text-right border-x-2 w-1/12 p-2">{id}</div>
              <div className="text-left border-r-2 w-4/12 p-2">
                {category} : {title}
              </div>
              <div className="text-right border-r-2 w-1/12 p-2">{qty}</div>
              <div className="text-right border-r-2 w-1/12 p-2">{unit}</div>
              <div className="text-right border-r-2 w-1/12 p-2">
                {totalPrice}
              </div>
              <div className=" border-r-2 w-4/12 p-2">{remark || "-"}</div>
              <div className="text-center border-r-2 w-1/12 p-2">
                <button
                  type="button"
                  className="bg-red-500 font-semibold px-4 py-2 rounded hover:bg-red-700 text-white"
                  onClick={() => handleDeleteRow(id)}
                >
                  ลบ
                </button>
              </div>
            </div>
          );
        }) || null}
      </div>
    </div>
  );
}

export default ExpViewTable;
