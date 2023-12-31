import React from "react";
import Swal from "sweetalert2";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { deleteStorefrontAPI } from "../../services/API/storefrontAPI";
import { updatedByDelSfDataById } from "@/utils/storefrontUtils";

import Loading from "@/components/Loading";

function SfTable({
  dataTable: { data = [], amountItems = 0, sumTotalPrice = 0 },date
}) {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteByRow, isLoading } = useMutation(
    deleteStorefrontAPI,
    {
      onSuccess: async (_, rowId) => {
        const previousData = queryClient.getQueryData(["storefront", date]);
        if (previousData) {
          const newData = updatedByDelSfDataById(previousData, rowId);
          queryClient.setQueryData(["storefront", date], newData);
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

  return (
    <>
      {isLoading ? <Loading /> : null}
      <p className="text-xl mb-3">{`รายการ เอาไปขายที่บันทึกแล้ว ${amountItems} รายการ, รวมเป็นเงิน ${sumTotalPrice} บาท`}</p>
      <div className="w-full">
        <div className="flex bg-blue-200 border-b border-gray-400">
          <div className="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            เลขอ้างอิง
          </div>
          <div className="p-2 border-r-2 text-center flex-grow-0 flex-shrink-0 w-4/12">
            ประเภท - ชื่อ
          </div>
          <div className="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            จำนวน
          </div>
          <div className="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            ราคารวม
          </div>
          <div className="p-2 border-r-2 text-center flex-grow-0 flex-shrink-0 w-1/12">
            ขายไม่หมด
          </div>
          <div className="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            จำนวนเหลือ
          </div>
          <div className="p-2 border-r-2 text-right flex-grow w-auto">
            ราคารวมที่เหลือ
          </div>
          <div className="p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12"></div>
        </div>

        {data?.map((data, idx) => {
          const {
            id,
            title,
            category,
            qty,
            unit,
            totalPrice,
            remark,
            isLeftover,
            leftoverAmount,
            leftoverTotalPrice,
          } = data;
          return (
            <div
              key={"sfitem" + idx}
              className="hover:bg-slate-100 flex border-b border-gray-400"
            >
              <div className="text-right border-x-2 p-2 flex-grow-0 flex-shrink-0 w-1/12">
                {id}
              </div>
              <div className="text-left border-r-2 p-2 flex-grow-0 flex-shrink-0 w-4/12">
                {category} : {title}
                <div className="mt-2">
                  <span className="font-semibold">หมายเหตุ: </span>
                  {remark || "-"}
                </div>
              </div>
              <div className="text-right p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                {qty} {unit}
              </div>
              <div className="text-right p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                {totalPrice}
              </div>
              <div className="text-center p-2 text-xl border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                {isLeftover ? <p>&#10004;</p> : <p>&#10060;</p>}
              </div>
              <div
                className={`text-right p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12`}
              >
                {+leftoverAmount || "-"}
              </div>
              <div className="text-right p-2 border-r-2 flex-grow w-auto">
                {+leftoverTotalPrice || "-"}
              </div>
              <div className="text-center p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
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
    </>
  );
}

export default SfTable;
