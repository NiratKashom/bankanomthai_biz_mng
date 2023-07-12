import React, { useEffect, useState } from "react";
import { getStorefrontAPI } from '@/services/API/storefrontAPI/storefrontApiService'
import Loading from '@/components/Loading'
import ReactDatepicker from '@/components/ReactDatepicker'

function SfViewTable() {
  const [sfData, setSfData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  const [sfTableViewDate, setSfTableViewDate] = useState(new Date());

  const fetchSfDataTable = async (date) => {
    setIsLoading(true)
    const res = await getStorefrontAPI(date)
    setSfData(res)
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
          <h2 className="text-xl font-semibold mb-4 mr-4">เลือกวันที่บันทึก</h2>
          <ReactDatepicker
            selectedDate={sfTableViewDate}
            setSelectedDate={setSfTableViewDate}
            logDate
          />
        </div>
        {JSON.stringify(sfData)}
        {/* {formData.map((item, idx) => (
          <SfInputFormList key={"sfFormData" + idx} idx={idx} data={item} />
        ))} */}
      </div>
    </div>
  );
}

export default SfViewTable;
