import React, { useEffect, useState } from "react";
import { getStorefrontAPI } from '@/services/API/storefrontAPI/storefrontApiService'
import Loading from '@/components/Loading'
import ReactDatepicker from '@/components/ReactDatepicker'
import SfHeaderTable from "@/components/storefront/SfHeaderTable";

function SfViewTable() {

  const [sfData, setSfData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sfTableViewDate, setSfTableViewDate] = useState(new Date())
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold border-b-4 border-blue-500";

  const fetchSfDataTable = async (date) => {
    setIsLoading(true)
    const res = await getStorefrontAPI(date)
    console.log(res)
    setSfData(() => [...res.storeFrontData.data])
    setIsLoading(false)
  }

  useEffect(() => {
    fetchSfDataTable(sfTableViewDate)
  }, [sfTableViewDate])

  return (
    <div className=" p-4 ">
      {isLoading && <Loading />}
      <div>
        <div className="flex">
          <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่จะดู</h2>
          <ReactDatepicker
            selectedDate={sfTableViewDate}
            setSelectedDate={setSfTableViewDate}
            logDate
          />
        </div>
        <div className="w-full mx-auto ">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 ${activeTab === 1 ? activeTabClass : " text-gray-700"}`}
              onClick={() => handleTabChange(1)}
            >
              ที่เอาไปขาย
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 2 ? activeTabClass : " text-gray-700"}`}
              onClick={() => handleTabChange(2)}
            >
              ที่เหลือ
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 3 ? activeTabClass : " text-gray-700"}`}
              onClick={() => handleTabChange(3)}
            >
              ที่ขายได้
            </button>
          </div>
        </div>
        <div className=" p-4 ">
          {activeTab === 1 && (
            <>
              {/* <div class="flex bg-blue-200">
                <div class="w-2/12 border-2 border-black">w-1/5</div>
                <div class="w-4/12  border-2 border-black">w-2/5</div>
                <div class="w-1/12  border-2 border-black">w-3/5</div>
                <div class="w-1/12  border-2 border-black">w-3/5</div>
                <div class="w-4/12  border-2 border-black">w-3/5</div>
              </div> */}
              <SfHeaderTable
                headerColor="blue-200"
                headerTableColumn={[
                  { label: "ลำดับ", width: "2/12" },
                  { label: "ประเภท - ชื่อ", textAlign: "center", width: "4/12" },
                  { label: "จำนวน", width: "1/12" },
                  { label: "ราคารวม", width: "1/12" },
                  { label: "หมายเหตุ", textAlign: "center", width: "4/12" },
                ]}
              />
              {sfData.map((data, idx) => {
                return (
                  <div
                    className="hover:bg-slate-100 flex items-top border-b-2"
                    key={"sfitem" + idx}
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

                  </div>
                )
              })}
              {/* {JSON.stringify(sfData?.storeFrontData)} */}
            </>
          )}
          {/* {activeTab === 2 && (
            JSON.stringify(sfData?.leftOverData)
          )}
          {activeTab === 3 && (
            JSON.stringify(sfData?.incomeData)
          )} */}
        </div>
      </div>
    </div>
  );
}

export default SfViewTable;
