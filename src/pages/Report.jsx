import React, { useState } from "react";
import ReactDatepicker from "@/components/ReactDatepicker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend

} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    datalabels: {
      // display: (context) => {
      //   return context.active;
      // },
      padding: 8,
      align : 'top',
      font: {
        weight: 'bold',
      }
    },
    tooltip: {
      caretPadding: 16
    }
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
  interaction: {
    mode: 'index',
    intersect: false
  },
  scales: {
    y: {
      // the data minimum used for determining the ticks is Math.min(dataMin, suggestedMin)
      suggestedMin: -250,
      title: {
        display: true,
        text: 'จำนวนเงิน(บาท)',
      },
      ticks: {
        // forces step size to be 50 units
        stepSize: 500
      }
    },
  },
};

// const daysInMonth = 31;
// const labels = [];

// for (let i = 1; i <= daysInMonth; i++) {
//   labels.push(i);
// }

const MOCK = [
  ["1/7", 3560, 1213, 2347],
  ["2/7", 2639, 2503, 136],
  ["3/7", 1230, 892, 338],
  ["4/7", 1080, 692, 388],
  ["5/7", 1150, 818, 332],
  ["6/7", 1365, 1079, 286],
  ["7/7", 1005, 703, 302],
  ["8/7", 1605, 1024, 581],
  ["9/7", 2105, 944, 1161],
  ["10/7", 2824, 2110, 714],
  ["11/7", 1205, 769, 436],
  ["12/7", 1140, 711, 429],
  ["13/7", 1415, 971, 444],
  ["14/7", 835, 1137, -302],
  ["15/7", 1530, 813, 717],
  ["16/7", 2265, 1789, 476],
  ["17/7", 2475, 1318, 1157],
  ["18/7", 1505, 819, 686],
  ["19/7", 1545, 1957, -412],
  ["20/7", 1450, 963, 487],
  ["21/7", 1205, 750, 455],
  ["22/7", 1630, 788, 842],
  ["23/7", 1775, 840, 935],
  ["24/7", 1360, 787, 573],
  ["25/7", 2070, 825, 1245],
  ["26/7", 1455, 857, 598],
  ["27/7", 1180, 764, 416],
  ["28/7", 1285, 855, 430],
  ["29/7", 1770, 870, 900],
  ["30/7", 1780, 2907, -1127],
  ["31/7", 1715, 2200, -485],
];

const labels = MOCK.map((item) => {
  return item[0];
});

const datasets1 = MOCK.map((item) => {
  return item[1];
});
const datasets2 = MOCK.map((item) => {
  return item[2];
});
const datasets3 = MOCK.map((item) => {
  return item[3];
});
//
const data = {
  labels,
  datasets: [
    {
      label: "รายรับ",
      // data: labels.map(() => faker.number.int({ min: -10, max: 100 })),
      data: datasets1,
      borderColor: "rgb(50, 200, 130)",
      backgroundColor: "rgb(50, 200, 130,0.5)",
      tension: 0.2,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "รายจ่าย",
      data: datasets2,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132,0.5)",
      tension: 0.2,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "สุทธิ",
      data: datasets3,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235,0.5)",
      tension: 0.2,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
  ],
};

function Report() {
  const [date, setDate] = useState(new Date());
  // const [data, setData] = useState({});

  return (
    <div className="border">
      <h1>สรุปยอดประจำเดือน</h1>
      <div className="border">
        <div className="flex items-center">
          <h1 className="mr-2">เลือกเดือน / ปี :</h1>
          <ReactDatepicker
            className="border-2-red"
            selectedDate={date}
            setSelectedDate={setDate}
          />
        </div>
        <div className="border">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
}

export default Report;
