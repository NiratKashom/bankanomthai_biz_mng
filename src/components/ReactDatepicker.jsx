import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { th } from "date-fns/locale";
import buddhistEra from 'dayjs/plugin/buddhistEra'
import dayjs from 'dayjs'

dayjs.extend(buddhistEra)

registerLocale("th", th);

function ReactDatepicker({
  selectedDate,
  setSelectedDate,
  logDate,
  showMonthYearPicker,
  dateFormat
}) {

  const handleDateChange = (date) => {
    if (logDate) console.log(date);
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        todayButton="วันนี้"
        selected={selectedDate}
        onChange={handleDateChange}
        className="border border-gray-300 rounded px-2 py-1"
        locale="th"
        dateFormat={dateFormat}
        placeholderText="เลือกวันที่"
        showMonthYearPicker={showMonthYearPicker}
      />
    </div>
  );
}

export default ReactDatepicker;
