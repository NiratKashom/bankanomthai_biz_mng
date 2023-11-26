import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
import DailyReportModal from "../DailyReportModal";
import { extractDataSetForMonthlyLineChart } from "../../../utils/reportUtils";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const LINE_CHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    datalabels: {
      display: (context) => {
        return context.active;
      },
      padding: 8,
      align: "top",
      font: {
        weight: "bold",
        size: 14,
      },
    },
    tooltip: {
      caretPadding: 16,
    },
  },
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    y: {
      suggestedMin: -250,
      title: {
        display: true,
        text: "จำนวนเงิน(บาท)",
      },
      grid: {
        color: (context) => (context.tick.value === 0 ? "#000" : "#CCCCCC"),
      },
      ticks: {
        stepSize: 500,
      },
    },
  },
  // responsive: true,
  maintainAspectRatio: true,
};

const INIT_DATASET = {
  labels: [],
  datasets: [
    {
      label: "รายรับ",
      data: [],
      borderColor: "rgb(50, 200, 130)",
      backgroundColor: "rgb(50, 200, 130,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "รายจ่าย",
      data: [],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "สุทธิ",
      data: [],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgb(53, 162, 235,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
  ],
};

function MonthlyLineChart({ reportData }) {
  const chartRef = useRef();
  const [data, setData] = useState(INIT_DATASET);
  const [date, setDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!reportData) return;
    const { dateLabels, incomeDataset, expenseDataset, netDataset } =
      extractDataSetForMonthlyLineChart(reportData, "networth");
    setData((prev) => ({
      ...prev,
      labels: dateLabels,
      datasets: [
        {
          ...prev.datasets[0],
          data: incomeDataset,
        },
        {
          ...prev.datasets[1],
          data: expenseDataset,
        },
        {
          ...prev.datasets[2],
          data: netDataset,
        },
      ],
    }));
  }, [reportData]);

  return (
    <>
      <Line
        // height={"100px"}
        data={data}
        ref={chartRef}
        options={{
          ...LINE_CHART_OPTIONS,
          onClick: function (_, element) {
            if (element.length > 0) {
              const idx = element[0].index;
              const selectedDate = data.labels[idx];
              setDate(new Date(selectedDate));
              setShowModal(true);
            }
          },
        }}
      />
      {showModal && (
        <DailyReportModal
          selectedDate={date}
          closeModal={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default MonthlyLineChart;
