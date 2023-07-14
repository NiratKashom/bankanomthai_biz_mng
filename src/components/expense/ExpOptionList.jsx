import React from 'react'

function ExpOptionList() {
	return (
		<>
			<option value="ไม่ได้เลือกรายการ">เลือกรายการ</option>
			<optgroup label="วัตถุดิบ">
				<option value="วัตถุดิบ : กล้วย">กล้วย</option>
				<option value="วัตถุดิบ : ขนมตาล">ขนมตาล</option>
				<option value="วัตถุดิบ : ข้าวทำขนม">ข้าวทำขนม</option>
				<option value="วัตถุดิบ : ข้าวเหนียว">ข้าวเหนียว</option>
				<option value="วัตถุดิบ : แป้งข้าวเหนียว">แป้งข้าวเหนียว</option>
				<option value="วัตถุดิบ : น้ำตาลปี๊ป">น้ำตาลปี๊ป</option>
				<option value="วัตถุดิบ : น้ำตาลทราย">น้ำตาลทราย</option>
				<option value="วัตถุดิบ : มันสำปะหลัง">มันสำปะหลัง</option>
				<option value="วัตถุดิบ : มะพร้าว">มะพร้าว</option>
				<option value="วัตถุดิบ : ผงเบสท์">ผงเบสท์</option>
				<option value="วัตถุดิบ : ผงฟู">ผงฟู</option>
				<option value="วัตถุดิบ : ใบตอง">ใบตอง</option>
				<option value="วัตถุดิบ : แป้ง">แป้ง</option>
				<option value="วัตถุดิบ : กลิ่นสังเคราะห์">กลิ่นสังเคราะห์</option>
				<option value="วัตถุดิบ : สีผสมอาหาร">สีผสมอาหาร</option>
				<option value="วัตถุดิบ : อื่นๆ">
					อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>
			<optgroup label="บรรจุภัณฑ์">
				<option value="บรรจุภัณฑ์ : กล่อง">กล่อง</option>
				<option value="บรรจุภัณฑ์ : ถุง8x12">ถุง 8x12</option>
				<option value="บรรจุภัณฑ์ : ถุงร้อน6x9">ถุงร้อน 6x9</option>
				<option value="บรรจุภัณฑ์ : ถุงร้อน">ถุงร้อน</option>
				<option value="บรรจุภัณฑ์ : ถุงหูหิ้ว">ถุงหูหิ้ว</option>
				<option value="บรรจุภัณฑ์ : อื่นๆ">
					อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>
			<optgroup label="บริโภค">
				<option value="บริโภค : กับข้าว">กับข้าว</option>
				<option value="บริโภค : ของใช้ในบ้าน">ของใช้ในบ้าน</option>
				<option value="บริโภค : ค่าน้ำ">ค่าน้ำ</option>
				<option value="บริโภค : ค่าไฟ">ค่าไฟ</option>
				<option value="บริโภค : เติมน้ำมันรถ">เติมน้ำมันรถ</option>
				<option value="บริโภค : อื่นๆ">อื่นๆ ระบุในหมายเหตุ</option>
			</optgroup>
			<optgroup label="ต้นทุนอื่นๆ">
				<option value="ต้นทุนอื่นๆ : ค่าแก๊ส">ค่าแก๊ส</option>
				<option value="ต้นทุนอื่นๆ : ค่าเช่าร้าน">ค่าเช่าร้าน</option>
				<option value="ต้นทุนอื่นๆ : ค่าแรง">ค่าแรง</option>
				<option value="ต้นทุนอื่นๆ : เติมน้ำมันรถ">
					เติมน้ำมันรถ
				</option>
				<option value="ต้นทุนอื่นๆ : อื่นๆ">อื่นๆ ระบุในหมายเหตุ</option>
			</optgroup>
			<optgroup label="อื่นๆ">
				<option value="อื่นๆ : อื่นๆ">อื่นๆ ระบุในหมายเหตุ</option>
			</optgroup>
		</>
	)
}

export default ExpOptionList