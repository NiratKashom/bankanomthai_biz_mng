import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { th } from "date-fns/locale";

registerLocale("th", th);

function DatepickerBuddhist() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
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
        dateFormat="dd MMM yyyy"
      />
    </div>
  );
}

export default DatepickerBuddhist;
