import React from "react";

function ViewTable({ headerColor, headerTableColumn, data, key }) {
  return (
    <div>
      <SfHeaderTable
        headerColor="blue-200"
        headerTableColumn={[
          { label: "เลขอ้างอิง", width: "1/12" },
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
      {data.map((item, idx) => {
        return (
          <div
            className="hover:bg-slate-100 flex items-top border-b-2"
            key={key + idx}
          >
            <div
              className={`border-${idx === 0 ? "x" : "r"}-2
        text-${textAlign || "right"}  w-${headerTableColumn[idx].width || "1/12"} p-2`}
            >
              {refNo}
            </div>
            <div className={`text-right border-x-2 w-1/12 p-2`}>{refNo}</div>
            <div className="text-left border-r-2 w-4/12 p-2">
              <div>
                {" "}
                {category} : {title}
              </div>
            </div>
            <div className="text-right border-r-2 w-1/12 p-2">{qty}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{unit}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{totalPrice}</div>
            <div className=" border-r-2 w-4/12 p-2">{remark || "-"}</div>
          </div>
        );
      })}

      {sfData?.data?.map((data, idx) => {
        const [refNo, , title, category, qty, unit, totalPrice, remark] = data;
        return (
          <div
            className="hover:bg-slate-100 flex items-top border-b-2"
            key={key + idx}
          >
            <div className="text-right border-x-2 w-1/12 p-2">{refNo}</div>
            <div className="text-left border-r-2 w-4/12 p-2">
              <div>
                {" "}
                {category} : {title}
              </div>
            </div>
            <div className="text-right border-r-2 w-1/12 p-2">{qty}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{unit}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{totalPrice}</div>
            <div className=" border-r-2 w-4/12 p-2">{remark || "-"}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewTable;
