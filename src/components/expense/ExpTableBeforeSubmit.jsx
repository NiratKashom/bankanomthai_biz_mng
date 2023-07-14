import React, { useContext } from 'react'
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
					<div>1</div>
				))}
			</div>

		</div>
	)
}

export default ExpTableBeforeSubmit