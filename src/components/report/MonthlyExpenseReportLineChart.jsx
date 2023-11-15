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
import DailyReportModal from "./DailyReportModal";
import { extractDataSetForMonthlyLineChart } from "../../utils/reportUtils";

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
      suggestedMin: 0,
      title: {
        display: true,
        text: "จำนวนเงิน(บาท)",
      },
      grid: {
        color: (context) => (context.tick.value === 0 ? "#000" : "#CCCCCC"),
      },
      ticks: {
        stepSize: 100,
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
      label: "วัตถุดิบ",
      data: [],
      borderColor: "rgb(178,102, 255)",
      backgroundColor: "rgb(178,102, 255,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "บรรจุภัณฑ์",
      data: [],
      borderColor: "rgb(102, 178, 255)",
      backgroundColor: "rgb(102, 178, 255,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "บริโภค",
      data: [],
      borderColor: "rgb(102, 255, 102)",
      backgroundColor: "rgb(102, 255, 102,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "ต้นทุนอื่นๆ",
      data: [],
      borderColor: "rgb(255, 178, 102)",
      backgroundColor: "rgb(255, 178, 102,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
    {
      label: "อื่นๆ",
      data: [],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgb(255, 99, 132,0.5)",
      tension: 0.1,
      pointHoverBorderWidth: 10,
      borderWidth: 2,
    },
  ],
};

function MonthlyExpenseReportLineChart({ reportData }) {
  const chartRef = useRef();
  const [data, setData] = useState(INIT_DATASET);
  const [date, setDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!reportData) return;
    const {
      dateLabels,
      expByCategoryDataset: {
        rawMaterialDataset,
        packagingDataset,
        consumeDataset,
        otherCostsDataset,
        otherDataset,
      },
    } = extractDataSetForMonthlyLineChart(reportData, "expenseByCate");
    setData((prev) => ({
      ...prev,
      labels: dateLabels,
      datasets: [
        {
          ...prev.datasets[0],
          data: rawMaterialDataset,
        },
        {
          ...prev.datasets[1],
          data: packagingDataset,
        },
        {
          ...prev.datasets[2],
          data: consumeDataset,
        },
        {
          ...prev.datasets[3],
          data: otherCostsDataset,
        },
        {
          ...prev.datasets[4],
          data: otherDataset,
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
              // setShowModal(true);
            }
          },
        }}
      />

      {/* {showModal && (
        <DailyReportModal
          selectedDate={date}
          closeModal={() => setShowModal(false)}
        />
      )} */}
    </>
  );
}

export default MonthlyExpenseReportLineChart;
