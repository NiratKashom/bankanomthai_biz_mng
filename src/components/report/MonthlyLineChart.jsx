import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { Line } from "react-chartjs-2";
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
};

const LABELS = ["รายรับ", "รายจ่าย", "สุทธิ"];

const INITDATA = {
  LABELS,
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
  const [data, setData] = useState(INITDATA);

  useEffect(() => {
    if (!reportData) return;
    const { dateLabels, incomeDataset, expenseDataset, netDataset } =
      extractDataSetForMonthlyLineChart(reportData);
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

  return <Line options={LINE_CHART_OPTIONS} data={data} />;
}

export default MonthlyLineChart;
