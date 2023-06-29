import React, { useState } from 'react';

const Calendar = () => {
  // Get current date
  const currentDate = new Date();

  // Initialize state for the current month
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  // Get number of days in the current month
  const numDays = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get the first day of the current month
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  // Generate an array of days in the current month
  const days = Array.from({ length: numDays }, (_, index) => index + 1);

  // Function to handle previous month button click
  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 0) {
        setCurrentYear((prevYear) => prevYear - 1);
        return 11;
      } else {
        return prevMonth - 1;
      }
    });
  };

  // Function to handle next month button click
  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => {
      if (prevMonth === 11) {
        setCurrentYear((prevYear) => prevYear + 1);
        return 0;
      } else {
        return prevMonth + 1;
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Calendar - {currentMonth + 1}/{currentYear}
      </h1>
      <div className="flex justify-between mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goToPreviousMonth}
        >
          Previous Month
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={goToNextMonth}
        >
          Next Month
        </button>
      </div>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Sun</th>
            <th className="px-4 py-2">Mon</th>
            <th className="px-4 py-2">Tue</th>
            <th className="px-4 py-2">Wed</th>
            <th className="px-4 py-2">Thu</th>
            <th className="px-4 py-2">Fri</th>
            <th className="px-4 py-2">Sat</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }, (_, weekIndex) => (
            <tr key={weekIndex}>
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const day = weekIndex * 7 + dayIndex - firstDay + 1;
                const isCurrentMonth = day > 0 && day <= numDays;
                const isCurrentDay =
                  isCurrentMonth &&
                  day === currentDate.getDate() &&
                  currentMonth === currentDate.getMonth() &&
                  currentYear === currentDate.getFullYear();

                return (
                  <td
                    key={dayIndex}
                    className={`px-4 py-2 ${
                      isCurrentMonth ? 'bg-blue-200' : 'bg-gray-200'
                    } ${isCurrentDay ? 'font-bold' : ''}`}
                  >
                    {isCurrentMonth ? day : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
