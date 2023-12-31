import React from "react";
import SfHeaderTable from "@/components/storefront/SfHeaderTable";

function LoTable({ dataTable: { data = [], amountItems= 0, sumTotalPrice= 0, } }) {
  return (
    <>
      <p className="text-xl mb-3">{`รายการ เหลือที่บันทึกแล้ว ${amountItems} รายการ, รวมเป็นเงิน ${sumTotalPrice} บาท`}</p>
      <SfHeaderTable
        headerColor="blue-200"
        headerTableColumn={[
          { label: "เลขอ้างอิง", width: "2/12" },
          {
            label: "ประเภท - ชื่อ",
            textAlign: "center",
            width: "4/12",
          },
          { label: "จำนวนเหลือ", width: "2/12" },
          { label: "หน่วย", width: "2/12" },
          { label: "ราคารวม", width: "2/12" },
        ]}
      />
 
      {data?.map((data, idx) => {
        const {storefrontId, title, category, leftoverAmount,unit, leftoverTotalPrice} = data;
        return (
          <div
            className="hover:bg-slate-100 flex items-top border-b-2"
            key={"sfitem" + idx}
          >
            <div className="text-right border-x-2 w-2/12 p-2">{storefrontId}</div>
            <div className="text-left border-r-2 w-4/12 p-2">
              <div>
                {category} : {title}
              </div>
            </div>
            <div className="text-right border-r-2 w-2/12 p-2">{leftoverAmount}</div>
            <div className="text-right border-r-2 w-2/12 p-2">{unit}</div>
            <div className="text-right border-r-2 w-2/12 p-2">{leftoverTotalPrice}</div>
          </div>
        );
      }) || null}
    </>
  );
}

export default LoTable;
