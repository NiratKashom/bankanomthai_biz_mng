import React from 'react'

function ExpOptionList() {
	return (
		<>
			<option value="ไม่ได้เลือกรายการ">เลือกรายการ</option>
			<optgroup label="วัตถุดิบ">
				<option value="กล้วย,วัตถุดิบ">กล้วย</option>
				<option value="ขนมตาล,วัตถุดิบ">ขนมตาล</option>
				<option value="ข้าวทำขนม,วัตถุดิบ">ข้าวทำขนม</option>
				<option value="ข้าวเหนียว,วัตถุดิบ">ข้าวเหนียว</option>
				<option value="แป้งข้าวเหนียว,วัตถุดิบ">แป้งข้าวเหนียว</option>
				<option value="น้ำตาลปี๊ป,วัตถุดิบ">น้ำตาลปี๊ป</option>
				<option value="น้ำตาลทราย,วัตถุดิบ">น้ำตาลทราย</option>
				<option value="มันสำปะหลัง,วัตถุดิบ">มันสำปะหลัง</option>
				<option value="มะพร้าว,วัตถุดิบ">มะพร้าว</option>
				<option value="ผงเบสท์,วัตถุดิบ">ผงเบสท์</option>
				<option value="ผงฟู,วัตถุดิบ">ผงฟู</option>
				<option value="ใบตอง,วัตถุดิบ">ใบตอง</option>
				<option value="แป้ง,วัตถุดิบ">แป้ง</option>
				<option value="กลิ่นสังเคราะห์,วัตถุดิบ">กลิ่นสังเคราะห์</option>
				<option value="สีผสมอาหาร,วัตถุดิบ">สีผสมอาหาร</option>
				<option value="อื่นๆ,วัตถุดิบ">
					อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>
			<optgroup label="บรรจุภัณฑ์">
				<option value="กล่อง,บรรจุภัณฑ์">กล่อง</option>
				<option value="ถุง8x12,บรรจุภัณฑ์">ถุง 8x12</option>
				<option value="ถุงร้อน6x9,บรรจุภัณฑ์">ถุงร้อน 6x9</option>
				<option value="ถุงร้อน,บรรจุภัณฑ์">ถุงร้อน</option>
				<option value="ถุงหูหิ้ว,บรรจุภัณฑ์">ถุงหูหิ้ว</option>
				<option value="อื่นๆ,บรรจุภัณฑ์">
					อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>
			<optgroup label="บริโภค">
				<option value="กับข้าว,บริโภค">กับข้าว</option>
				<option value="ของใช้ในบ้าน,บริโภค">ของใช้ในบ้าน</option>
				<option value="ค่าน้ำ,บริโภค">ค่าน้ำ</option>
				<option value="ค่าไฟ,บริโภค">ค่าไฟ</option>
				<option value="เติมน้ำมันรถ,บริโภค">เติมน้ำมันรถ</option>
				<option value="อื่นๆ,บริโภค">อื่นๆ ระบุในหมายเหตุ</option>
			</optgroup>
			<optgroup label="ต้นทุนอื่นๆ">
				<option value="ค่าแก๊ส,ต้นทุนอื่นๆ">ค่าแก๊ส</option>
				<option value="ค่าเช่าร้าน,ต้นทุนอื่นๆ">ค่าเช่าร้าน</option>
				<option value="ค่าแรง,ต้นทุนอื่นๆ">ค่าแรง</option>
				<option value="เติมน้ำมันรถ,ต้นทุนอื่นๆ">
					เติมน้ำมันรถ
				</option>
				<option value="อื่นๆ,บริโภค">อื่นๆ ระบุในหมายเหตุ</option>
			</optgroup>
			<optgroup label="อื่นๆ">
				<option value="อื่นๆ,อื่นๆ">อื่นๆ ระบุในหมายเหตุ</option>
			</optgroup>
		</>
	)
}

export default ExpOptionList