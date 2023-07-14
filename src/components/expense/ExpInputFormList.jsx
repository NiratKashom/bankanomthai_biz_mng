import React, { useContext } from 'react'
import { ExpenseFormDataContext } from "@/context/ExpenseFormDataContext";
import ExpOptionList from "@/components/expense/ExpOptionList";

function ExpInputFormList({ data, idx }) {
	const { updateFormData, deleteFormDataItem } = useContext(ExpenseFormDataContext);

	const handleInputChange = (target, idx) => {
		const { name, value } = target;
		updateFormData(idx, { [name]: value });
	};

	return (
		<div className="hover:bg-slate-200 p-2 border-y-2">
			<div className="flex space-x-2 mb-2">
				<div className="w-1/4">
					<label className="block  mb-1">รายการ:</label>
					<select
						name="title"
						value={data.title}
						onChange={(e) => handleInputChange(e.target, idx)}
						className="border border-gray-300 rounded px-2 py-1 w-full"
					>
						<ExpOptionList />
					</select>
				</div>

				<div className="w-1/4">
					<label className="block mb-1">จำนวน:</label>
					<input
						type="number"
						name="amount"
						value={data.amount}
						onChange={(e) => handleInputChange(e.target, idx)}
						className="border border-gray-300 rounded px-2 py-1 w-full"
					/>
				</div>

				<div className="w-1/4">
					<label className="block  mb-1">หน่วยนับ:</label>
					<select
						name="unit"
						value={data.unit}
						onChange={(e) => handleInputChange(e.target, idx)}
						className="border border-gray-300 rounded px-2 py-1 w-full"
					>
						<option value="กระป๋อง">กระป๋อง</option>
						<option value="กระสอบ">กระสอบ</option>
						<option value="กรัม">กรัม</option>
						<option value="กล่อง">กล่อง</option>
						<option value="กิโลกรัม">กิโลกรัม</option>
						<option value="ขวด">ขวด</option>
						<option value="คน">คน</option>
						<option value="ชิ้น">ชิ้น</option>
						<option value="ชุด">ชุด</option>
						<option value="ถัง">ถัง</option>
						<option value="ถุง">ถุง</option>
						<option value="ถ้วย">ถ้วย</option>
						<option value="ลิตร">ลิตร</option>
						<option value="ลูก">ลูก</option>
						<option value="มิลลิลิตร">มิลลิลิตร</option>
						<option value="รอบ">รอบ</option>
						<option value="หวี">หวี</option>
						<option value="อื่นๆ">อื่นๆ</option>
					</select>
				</div>

				<div className="w-1/4">
					<label className="block  mb-1">ราคารวม:</label>
					<input
						type="number"
						name="totalPrice"
						value={data.totalPrice}
						onChange={(e) => handleInputChange(e.target, idx)}
						className="border border-gray-300 rounded px-2 py-1 w-full"
					/>
				</div>
			</div>

			<div className="flex space-x-2 mb-4">
				<div className="w-3/4">
					<label className="block  mb-1">หมายเหตุ:</label>
					<input
						type="text"
						name="remark"
						value={data.remark}
						onChange={(e) => handleInputChange(e.target, idx)}
						className="border border-gray-300 rounded px-2 py-1 w-full"
					/>
				</div>

				<div className="w-1/4 flex justify-end items-end ">
					<button
						type="button"
						className="text-red-500 border-red-500  px-2 py-2 rounded border-2 
              hover:text-white hover:bg-red-500"
						onClick={() => deleteFormDataItem(idx)}
					>
						ลบรายการนี้
					</button>
				</div>
			</div>

		</div>
	)
}

export default ExpInputFormList