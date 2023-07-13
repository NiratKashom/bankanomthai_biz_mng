import React, { useEffect, useState } from "react";
import { getStorefrontAPI } from "@/services/API/storefrontAPI";
import Loading from "@/components/Loading";
import ReactDatepicker from "@/components/ReactDatepicker";
import SfTable from "./SfTable";
import LoTable from "./LoTable";
import IcTable from "./IcTable";

function SfViewTable() {
  const [sfData, setSfData] = useState({});
  const [loData, setLoData] = useState({});
  const [icData, setIcData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [sfTableViewDate, setSfTableViewDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold border-b-4 border-blue-500";

  const fetchSfDataTable = async (date) => {
    setIsLoading(true);
    const res = await getStorefrontAPI(date);
    // console.log(res);
    setSfData(() => res.storeFrontData);
    setLoData(() => res.leftOverData);
    setIcData(() => res.incomeData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchSfDataTable(sfTableViewDate);
  }, [sfTableViewDate]);


  return (
    <div className=" p-4 ">
      {isLoading && <Loading />}
      <div>
        <div className="flex">
          <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่จะดู</h2>
          <ReactDatepicker
            selectedDate={sfTableViewDate}
            setSelectedDate={setSfTableViewDate}
          />
        </div>
        <div className="w-full mx-auto ">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 ${
                activeTab === 1 ? activeTabClass : " text-gray-700"
              }`}
              onClick={() => handleTabChange(1)}
            >
              ที่เอาไปขาย
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === 2 ? activeTabClass : " text-gray-700"
              }`}
              onClick={() => handleTabChange(2)}
            >
              ที่เหลือ
            </button>
            <button
              className={`py-2 px-4 ${
                activeTab === 3 ? activeTabClass : " text-gray-700"
              }`}
              onClick={() => handleTabChange(3)}
            >
              ที่ขายได้
            </button>
          </div>
        </div>

        <div className=" p-4 ">
          {activeTab === 1 && <SfTable dataTable={sfData} />}
          {activeTab === 2 && <LoTable dataTable={loData} />}
          {activeTab === 3 && <IcTable dataTable={icData} />}
        </div>
      </div>
    </div>
  );
}

export default SfViewTable;
