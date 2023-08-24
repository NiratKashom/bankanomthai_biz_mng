import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import dayjs from "dayjs";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getStorefrontAPI } from "@/services/API/storefrontAPI";
import { updatedByDelSfDataById } from "@/utils/storefrontUtils";

import Loading from "@/components/Loading";
import ReactDatepicker from "@/components/ReactDatepicker";
import SfTable from "./SfTable";
import LoTable from "./LoTable";
import IcTable from "./IcTable";


function SfViewTable() {

  const [activeTab, setActiveTab] = useState(1);

  const [sfTableViewDate, setSfTableViewDate] = useState(new Date());
  const [formatDate, setFormatDate] = useState(
    dayjs(sfTableViewDate).format("YYYY-MM-DD")
  );

  const { isLoading: fetching, data: responseData } = useQuery(
    ["storefront", formatDate],
    () => getStorefrontAPI(formatDate)
  );


  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const activeTabClass = "text-blue-500 font-bold border-b-4 border-blue-500";

  useEffect(() => {
    const newDate = dayjs(sfTableViewDate).format("YYYY-MM-DD");
    setFormatDate(newDate);
  }, [sfTableViewDate]);

  return (
    <div className=" p-4 ">
      {fetching ? <Loading /> : null}
      <div>
        <div className="flex">
          <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่จะดู</h2>
          <ReactDatepicker
            selectedDate={sfTableViewDate}
            setSelectedDate={setSfTableViewDate}
            dateFormat={"dd MMM yyyy"}
            showMonthYearPicker={false}
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
              date={formatDate}
              refetch={() => {}}
          
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
