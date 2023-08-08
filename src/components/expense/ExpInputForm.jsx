import React, { useContext } from "react";
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";
import ReactDatepicker from "@/components/ReactDatepicker";
import ExpInputFormList from "@/components/expense/ExpInputFormList";
import Swal from "sweetalert2";
import dayjs from "dayjs";

function ExpInputForm({submitExpForm}) {
  const { formData, expSelectedDate, setExpSelectedDate, addFormData } =
    useContext(ExpenseFormDataContext);

  const displayDate = dayjs(expSelectedDate)
    .locale("th")
    .format("ddd DD MMMM YYYY");

  const handleIsOffDay = () => {
    Swal.fire({
      title: `${displayDate}\nจะถูกบันทึกเป็น วันหยุด / ไม่มีขาย`,
      text: "ต้องการบันทึกใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(34 197 94)",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: "ยกเลิก",
      width: "600px",
    }).then((result) => {
      if (result.isConfirmed) {
        submitOffDay(expSelectedDate);
      }
    });
  };

  const handleAddList = () => addFormData();

  const submitOffDay = (date) => {
    const recordDate = dayjs(date).format("MM/DD/YYYY");
    const offDayData = [
      {
        title: "หยุด/ไม่มีขาย : หยุด/ไม่มีขาย",
        qty: 0,
        unit: "อื่นๆ",
        totalPrice: 0,
        remark: "",
      }
    ];
    submitExpForm(offDayData, recordDate);
  };

  return (
    <div>
      <div className="flex items-center m-4">
        <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่บันทึก</h2>
        <ReactDatepicker
          selectedDate={expSelectedDate}
          setSelectedDate={setExpSelectedDate}
        />
        <button
          type="button"
          className="text-white bg-red-500 p-2 ml-4 rounded 
          hover:bg-red-700"
          onClick={handleIsOffDay}
        >
          เป็นวันหยุด / ไม่มีซื้อ
        </button>
      </div>

      {formData.map((item, idx) => (
        <ExpInputFormList key={"expFormData" + idx} idx={idx} data={item} />
      ))}

      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="text-green-500 font-semibold px-4 py-2 rounded border-2 border-green-500"
          onClick={handleAddList}
        >
          เพิ่มรายการ
        </button>
      </div>
    </div>
  );
}

export default ExpInputForm;
