import React, { useContext } from "react";
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";
import ReactDatepicker from "@/components/ReactDatepicker";
import ExpInputFormList from "@/components/expense/ExpInputFormList";

function ExpInputForm() {
	const { formData, expSelectedDate, setExpSelectedDate, addFormData } = useContext(
		ExpenseFormDataContext
	);

	const handleAddList = () => addFormData()

	return (
		<div>
			<div className="flex">
				<h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่บันทึก</h2>
				<ReactDatepicker
					selectedDate={expSelectedDate}
					setSelectedDate={setExpSelectedDate}
				// logDate
				/>
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
	)
}

export default ExpInputForm