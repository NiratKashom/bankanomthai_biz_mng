import React, { useContext } from "react";
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";
import SfHeaderTable from "@/components/storefront/SfHeaderTable";
import dayjs from "dayjs";

function ExpTableBeforeSubmit() {
  const { formData, expSelectedDate } = useContext(ExpenseFormDataContext);

  const displayDate = dayjs(expSelectedDate)
    .locale("th")
    .format("ddd DD MMMM YYYY");

  const amountDataList = formData.length;
  const sumTotalPrice = formData.reduce((total, item) => {
    return total + +item.totalPrice;
  }, 0);

  return (
    <div>
      <div>
        <span>วันที่บันทึก : </span>
        <span className="text-xl font-semibold mb-4 mr-4">{displayDate} </span>
        <span>ทั้งหมด : </span>
        <span className="text-xl font-semibold mb-4 mr-4">
          {amountDataList} รายการ
        </span>
        <span>ราคารวมทั้งหมด : </span>
        <span className="text-xl font-semibold mb-4 mr-4">
          {sumTotalPrice} บาท
        </span>
      </div>
      <div className="container mx-auto px-2 py-2">
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
          ]}
        />
        {formData.map((data, idx) => (
          <div
            className="hover:bg-slate-100 flex items-top border-b-2"
            key={"expenseitem" + idx}
          >
            <div className="text-right border-x-2 w-1/12 p-2">
              {idx + 1 + "."}
            </div>
            <div className="text-left border-r-2 w-4/12 p-2">{data.title}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{data.amount}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{data.unit}</div>
            <div className="text-right border-r-2 w-1/12 p-2">
              {data.totalPrice}
            </div>
            <div className=" border-r-2 w-4/12 p-2">{data.remark || "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpTableBeforeSubmit;
