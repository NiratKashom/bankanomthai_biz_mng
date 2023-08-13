import React, { useEffect, useState } from "react";
import { getStorefrontAPI } from "@/services/API/storefrontAPI";
import { updatedByDelSfDataById } from "@/utils/storefrontUtils";
import Loading from "@/components/Loading";
import ReactDatepicker from "@/components/ReactDatepicker";
import SfTable from "./SfTable";
import LoTable from "./LoTable";
import IcTable from "./IcTable";
import Swal from "sweetalert2";

import dayjs from "dayjs";
import useSWR from "swr";

function SfViewTable() {
  const [sfData, setSfData] = useState({});
  const [loData, setLoData] = useState({});
  const [icData, setIcData] = useState({});

  const [activeTab, setActiveTab] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [sfTableViewDate, setSfTableViewDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState(
    dayjs(sfTableViewDate).format("YYYY-MM-DD")
  );

  const {
    data: responseData,
    isLoading: fetching,
    mutate,
  } = useSWR(`/storefront/${formatDate}`);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold border-b-4 border-blue-500";

  const fetchSfDataTable = async (date) => {
    setIsLoading(true);
    try {
      const data = await getStorefrontAPI(date);
      setSfData(() => data.storefrontData);
      setLoData(() => data.leftoverData);
      setIcData(() => data.incomeData);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเรียกข้อมูลได้",
        text: "เกิดข้อผิดพลาด ERROR : " + error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const newDate = dayjs(sfTableViewDate).format("YYYY-MM-DD");
    setFormatDate(newDate);
  }, [sfTableViewDate]);

  return (
    <div className=" p-4 ">
      {fetching || isLoading ? <Loading /> : null}
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
          {activeTab === 1 && (
            <SfTable
              dataTable={responseData?.storefrontData || []}
              setIsLoading={setIsLoading}
              refetch={() => fetchSfDataTable(sfTableViewDate)}
              deleteById={(rowId) =>
                mutate(updatedByDelSfDataById(responseData, rowId), false)
              }
            />
          )}
          {activeTab === 2 && (
            <LoTable dataTable={responseData?.leftoverData || []} />
          )}
          {activeTab === 3 && (
            <IcTable dataTable={responseData?.incomeData || []} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SfViewTable;
