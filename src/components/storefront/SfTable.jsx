import React from "react";
import SfHeaderTable from "@/components/storefront/SfHeaderTable";

function SfTable({
  dataTable: { data = [], amountItems = 0, sumTotalPrice = 0 },
}) {
  return (
    <>
      <p className="text-xl mb-3">{`รายการ เอาไปขายที่บันทึกแล้ว ${amountItems} รายการ, รวมเป็นเงิน ${sumTotalPrice} บาท`}</p>
      <div className="w-full">
        <div className="flex bg-blue-200 border-b border-gray-400">
          <div class="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            ลำดับ
          </div>
          <div class="p-2 border-r-2 text-center flex-grow-0 flex-shrink-0 w-4/12">
            ประเภท - ชื่อ
          </div>
          <div class="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            จำนวน
          </div>
          <div class="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            ราคารวม
          </div>
          <div class="p-2 border-r-2 text-center flex-grow-0 flex-shrink-0 w-1/12">
            ขายไม่หมด
          </div>
          <div class="p-2 border-r-2 text-right flex-grow-0 flex-shrink-0 w-1/12">
            จำนวนเหลือ
          </div>
          <div class="p-2 border-r-2 text-right flex-grow w-auto">
            ราคารวมที่เหลือ
          </div>
          <div class="p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12"></div>
        </div>

        {data.map((data, idx) => {
          const [refNo, , title, category, qty, unit, totalPrice, remark] =
            data;
          return (
            <div
              key={"sfitem" + idx}
              class="hover:bg-slate-100 flex border-b border-gray-400"
            >
              <div class="text-right border-x-2 p-2 flex-grow-0 flex-shrink-0 w-1/12">
                {refNo}
              </div>
              <div class="text-left border-r-2 p-2 flex-grow-0 flex-shrink-0 w-4/12">
                {category} : {title}
                <div class="mt-2">
                  <span class="font-semibold">หมายเหตุ: </span>
                  {remark || "-"}
                </div>
              </div>
              <div class="text-right p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                {qty} {unit}
              </div>
              <div class="text-right p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                {totalPrice}
              </div>
              <div class="text-center p-2 text-xl border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                &#x2713;
              </div>
              <div class="text-right p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                3
              </div>
              <div class="text-right p-2 border-r-2 flex-grow w-auto">
                Total Price
              </div>
              <div class="text-center p-2 border-r-2 flex-grow-0 flex-shrink-0 w-1/12">
                <button
                  type="button"
                  className="bg-red-500 font-semibold px-4 py-2 rounded hover:bg-red-700 text-white"
                  // onClick={}
                >
                  ลบ
                </button>{" "}
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className={`flex justify-between bg-blue-200 border-y-2 `}>
        <div className={`font-semibold p-2 border-r-2 w-1/12`}>ลำดับ</div>
        <div className={`font-semibold p-2 border-r-2 w-4/12`}>
          ประเภท - ชื่อ
        </div>
        <div className={`font-semibold p-2 border-r-2 w-1/12`}>จำนวน</div>
        <div className={`font-semibold p-2 border-r-2 w-1/12`}>ราคารวม</div>
        <div className={`font-semibold p-2 border-r-2 w-1/12`}>ขายไม่หมด</div>
        <div className={`font-semibold p-2 border-r-2 w-1/12`}>จำนวนเหลือ</div>
        <div className={`font-semibold p-2 border-r-2 w-max`}>
          ราคารวมที่เหลือ
        </div>
        <div className={`font-semibold p-2 border-r-2 w-1/12`}></div>
      </div>
      {data.map((data, idx) => {
        const [refNo, , title, category, qty, unit, totalPrice, remark] = data;
        return (
          <div
            className="hover:bg-slate-100 flex justify-between items-top border-b-2"
            key={"sfitem" + idx}
          >
            <div className="text-right border-x-2 w-1/12 p-2">{refNo}</div>
            <div className="text-left border-r-2 w-4/12 p-2">
              {category} : {title}
              <div className="mt-2">
                <span className="font-semibold">หมายเหตุ : </span>
                {remark}
              </div>
            </div>
            <div className="text-right border-r-2 w-1/12 p-2">{qty}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{unit}</div>
            <div className="text-right border-r-2 w-1/12 p-2">{totalPrice}</div>
            <div className="text-right border-r-2 w-1/12 p-2">&#x2713;</div>
            <div className=" border-r-2 w-max p-2">tool</div>
            <div className=" border-r-2 w-1/12 p-2">tool</div>
          </div>
        );
      })} */}
    </>
  );
}

export default SfTable;
