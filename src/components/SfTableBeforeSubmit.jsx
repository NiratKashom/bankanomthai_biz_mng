import React, { useContext } from "react";
import { SfFormDataContext } from "../context/SfFormDataContext";
import SfHeaderTable from "./SfHeaderTable";

function SfTableBeforeSubmit() {
  const { formData } = useContext(SfFormDataContext);

  return (
    <div>
      <div className="container mx-auto px-2 py-2">
        <SfHeaderTable
          headerColor="blue-200"
          headerTableColumn={[
            { label: "ลำดับ" },
            { label: "ประเภท - ชื่อ", textAlign: "center", width: "8/12" },
            { label: "จำนวน", width: "2/12" },
            { label: "ราคารวม", width: "2/12" },
            { label: "ขายไม่หมด", textAlign: "center", width: "2/12" },
            { label: "จำนวนเหลือ", textAlign: "center", width: "3/12" },
            { label: "ราคารวมของที่เหลือ", width: "3/12" },
          ]}
        />
        {formData.map((data, idx) => (
          <div
            className="hover:bg-slate-100 flex items-top border-b-2"
            key={"leftoverItem" + idx}
          >
            <div className="text-right border-x-2 w-1/12 p-2">
              {idx + 1 + "."}
            </div>
            <div className="text-left border-r-2 w-8/12 p-2">
              <div> {data.title}</div>
              <div className="mt-2">
                {" "}
                <span className="font-semibold">หมายเหตุ : </span>
                {data.remark}
              </div>
            </div>
            <div className="text-right border-r-2 w-2/12 p-2">
              {data.amount} {data.unit}
            </div>
            <div className="text-right border-r-2 w-2/12 p-2">
              {data.totalPrice}
            </div>
            <div className="text-center border-r-2 w-2/12 p-2">
              {data.isLeftover ? (
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 h-6 w-6"
                  name="isLeftover"
                  checked={data.isLeftover}
                />
              ) : '-'}
            </div>
            <div className="text-right border-r-2 w-3/12 p-2">
              {data.leftoverAmount || "-"}
            </div>
            <div className="text-right border-r-2 w-3/12 p-2">
              {data.leftoverTotalPrice || "-"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SfTableBeforeSubmit;
