import React from 'react'

function SfOptionsList() {
	return (
		<>
			<option value="ไม่ได้เลือกรายการ">เลือกรายการ</option>
			<optgroup label="ขนมถ้วยฟู">
				<option value="ขนมถ้วยฟู : ถุงเล็ก 5 ลูก">
					ฟู : ถุงเล็ก 5 ลูก
				</option>
				<option value="ขนมถ้วยฟู : ถุงใหญ่ 12 ลูก">
					ฟู : ถุงใหญ่ 12 ลูก
				</option>
				<option value="ขนมถ้วยฟู : กล่องกลมเล็ก">
					ฟู : กล่องกลมเล็ก
				</option>
				<option value="ขนมถ้วยฟู : กล่องกลม R4">
					ฟู : กล่องกลม R4
				</option>
				<option value="ขนมถ้วยฟู : กล่องกลม 8 นิ้ว">
					ฟู : กล่องกลม 8 นิ้ว
				</option>
				<option value="ขนมถ้วยฟู : กล่องกลม 9 นิ้ว">
					ฟู : กล่องกลม 9 นิ้ว
				</option>
				<option value="ขนมถ้วยฟู : กล่องกลม 9 นิ้ว 2 ชั้น">
					ฟู : กล่องกลม 9 นิ้ว 2 ชั้น
				</option>
				<option value="ขนมถ้วยฟู : กล่องเหลี่ยมใหญ่">
					ฟู : กล่องเหลี่ยมใหญ่
				</option>
				<option value="ขนมถ้วยฟู : กล่องโฟมใหญ่">
					ฟู : กล่องโฟมใหญ่
				</option>
				<option value="ขนมถ้วยฟู : ถ้วยใหญ่">
					ฟู : ถ้วยใหญ่
				</option>
				<option value="ขนมถ้วยฟู : ถาดใหญ่ 4 ปอนด์">
					ฟู : ถาดใหญ่ 4 ปอนด์
				</option>
				<option value="ขนมถ้วยฟู : 100 ลูก">
					ฟู : 100 ลูก
				</option>
				<option value="ขนมถ้วยฟู : อื่นๆ">
					ฟู : อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>

			<optgroup label="ขนมต้ม">
				<option value="ขนมต้ม : ถุงเล็ก">ต้ม : ถุงเล็ก</option>
				<option value="ขนมต้ม : กล่องเล็ก">
					ต้ม : กล่องเล็ก
				</option>
				<option value="ขนมต้ม : กล่องกลม">ต้ม : กล่องกลม</option>
				<option value="ขนมต้ม : ขนมต้มแดง-ต้มขาว">
					ต้ม : ขนมต้มแดง-ต้มขาว
				</option>
				<option value="ขนมต้ม : กล่องกลมใหญ่">
					ต้ม : กล่องกลมใหญ่
				</option>
				<option value="ขนมต้ม : อื่นๆ">
					ต้ม : อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>

			<optgroup label="ขนมมัน">
				<option value="ขนมมัน : ถุงเล็ก">มัน : ถุงเล็ก</option>
				<option value="ขนมมัน : จัดเบรคกล่องเล็ก">
					มัน : จัดเบรคกล่องเล็ก
				</option>
				<option value="ขนมมัน : กล่องใหญ่ครึ่งโล">
					มัน : กล่องใหญ่ครึ่งโล
				</option>
				<option value="ขนมมัน : กล่องใหญ่ 1 โล ">
					มัน : กล่องใหญ่ 1 โล
				</option>
				<option value="ขนมมัน : อื่นๆ">
					มัน : อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>

			<optgroup label="ข้าวต้มหัวหงอก">
				<option value="ข้าวต้มหัวหงอก : ถุงเล็ก">
					หงอก : ถุงเล็ก
				</option>
				<option value="ข้าวต้มหัวหงอก : กล่องเล็ก">
					หงอก : กล่องเล็ก
				</option>
				<option value="ข้าวต้มหัวหงอก : กล่องใหญ่">
					หงอก : กล่องใหญ่
				</option>
				<option value="ข้าวต้มหัวหงอก : อื่นๆ">
					หงอก : อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>

			<optgroup label="ขนมตาล">
				<option value="ขนมตาล : ถุงเล็ก">
					ตาล : ถุงเล็ก
				</option>
				<option value="ขนมตาล : อื่นๆ">
					ตาล : อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>

			<optgroup label="อื่นๆ">
				<option value="อื่นๆ,อื่นๆ">
					อื่นๆ ระบุในหมายเหตุ
				</option>
			</optgroup>
		</>
	)
}

export default SfOptionsList