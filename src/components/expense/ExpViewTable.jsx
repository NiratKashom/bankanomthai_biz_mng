import React, { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import ReactDatepicker from "@/components/ReactDatepicker";
import SfHeaderTable from "@/components/storefront/SfHeaderTable";
import { getExpenseAPI,deleteExpenseAPI } from "@/services/API/expenseAPI";
import Swal from "sweetalert2";

function ExpViewTable() {
  const [expData, setExpData] = useState({
    data: [],
    amountItems: 0,
    sumTotalPrice: 0,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchExpDataTable = async (date) => {
    setIsLoading(true);
    try {
      const res = await getExpenseAPI(date);
      setExpData(() => ({ ...res }));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเรียกข้อมูลได้",
        text: "เกิดข้อผิดพลาด ERROR : " + error,
      });
    } finally {
      setIsLoading(false);
    }
  };

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
        setIsLoading(true);
        try {
          const res = await deleteExpenseAPI(rowId);
          if (res.statusCode === 200)
            Swal.fire({
              title: "ลบรายการเรียบร้อยแล้ว:",
              icon: "success",
            }).then(() => {
              fetchExpDataTable(selectedDate);
            });
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "ไม่สามารถเรียกข้อมูลได้",
            text: "เกิดข้อผิดพลาด ERROR : " + error,
          });
        } finally {
          setIsLoading(false);
        }
      }
    });
  };

  useEffect(() => {
    fetchExpDataTable(selectedDate);
  }, [selectedDate]);

  return (
    <div className=" p-4 ">
      {isLoading && <Loading />}
      <div className="flex">
        <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่จะดู</h2>
        <ReactDatepicker
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
      <div className=" p-4 ">
        <p className="text-xl mb-3">{`รายการ รายจ่ายที่บันทึกแล้ว ${expData.amountItems} รายการ, รวมเป็นเงิน ${expData.sumTotalPrice} บาท`}</p>
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
        {expData.data.map((data, idx) => {
          const {id, title, category, qty, unit, totalPrice, remark} =
            data;
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
        })}
      </div>
    </div>
  );
}

export default ExpViewTable;
