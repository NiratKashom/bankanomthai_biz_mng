import React, { useContext } from "react";
import { SfFormDataContext } from "@/context/SfFormDataContext";
import SfInputFormList from "@/components/storefront/SfInputFormList";
import ReactDatepicker from "@/components/ReactDatepicker";
import Swal from "sweetalert2";
import dayjs from "dayjs";

function SfInputForm({ submitSfForm }) {
  const { formData, sfSelectedDate, setSfSelectedDate, addFormData } =
    useContext(SfFormDataContext);

  const displayDate = dayjs(sfSelectedDate)
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
        submitOffDay(sfSelectedDate);
      }
    });
  };

  const submitOffDay = (date) => {
    console.log("submitOffDay=========");
    const recordDate = dayjs(date).format("MM/DD/YYYY");
    const offDayData = [
      {
        title: "หยุด/ไม่มีขาย : หยุด/ไม่มีขาย",
        qty: 0,
        unit: "อื่นๆ",
        totalPrice: 0,
        remark: "",
        isLeftover: false,
        leftoverAmount: 0,
        leftoverTotalPrice: 0,
      },
    ];
    submitSfForm(offDayData, recordDate);
  };

  const handleAddList = () => addFormData();

  return (
    <div>
      <div className="flex items-center m-4">
        <h2 className="text-xl font-semibold mr-4">เลือกวันที่บันทึก</h2>
        <ReactDatepicker
          selectedDate={sfSelectedDate}
          setSelectedDate={setSfSelectedDate}
        />
        <button
          type="button"
          className="text-white bg-red-500 p-2 ml-4 rounded 
          hover:bg-red-700"
          onClick={handleIsOffDay}
        >
          เป็นวันหยุด / ไม่มีขาย
        </button>
      </div>
      {formData.map((item, idx) => (
        <SfInputFormList key={"sfFormData" + idx} idx={idx} data={item} />
      ))}
      <div className="flex justify-end mt-4">
        <button
          type="button"
          className="text-green-500 font-semibold px-4 py-2 rounded border-2 border-green-500   
          hover:bg-green-500 hover:text-white"
          onClick={handleAddList}
        >
          เพิ่มรายการ
        </button>
      </div>
    </div>
  );
}

export default SfInputForm;
