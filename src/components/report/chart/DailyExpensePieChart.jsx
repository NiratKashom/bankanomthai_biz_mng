import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Legend, Tooltip, ChartDataLabels);
function DailyExpensePieChart({ dataSet }) {
  const initData = {
    labels: ["วัตถุดิบ", "บรรจุภัณฑ์", "บริโภค", "ต้นทุนอื่นๆ", "อื่นๆ"],
    datasets: [
      {
        label: "จำนวนเงิน(บาท)",
        data: [
          dataSet?.sumRawMaterial?.sum,
          dataSet?.sumPackaging?.sum,
          dataSet?.sumConsume?.sum,
          dataSet?.sumOtherCosts?.sum,
          dataSet?.sumOther?.sum,
        ],
        backgroundColor: [
          "rgb(168, 85, 247)",
          "rgb(56, 189, 248)",
          "rgb(34, 197, 94)",
          "rgb(251, 146, 60)",
          "rgb(236, 72, 153)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        color: "#fff",
        font: {
          size: "14",
          weight: "bold",
        },
        formatter: function (value, context) {
          if (!value) return "";
          const sumValue = context.dataset.data.reduce((sum, value) => {
            return (sum += value);
          }, 0);
          const percentage = ((value / sumValue) * 100).toFixed();
          return value.toLocaleString() + "\n" + "(" + percentage + "%)";
        },
      },
      legend: {
        display: false,
        position: "left",
        align: "start",
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const [data, setData] = useState(initData);

  useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: [
              dataSet?.sumRawMaterial?.sum,
              dataSet?.sumPackaging?.sum,
              dataSet?.sumConsume?.sum,
              dataSet?.sumOtherCosts?.sum,
              dataSet?.sumOther?.sum,
            ],
          },
        ],
      };
    });
  }, [dataSet]);

  return (
    <>
      <Pie
        // width={"100%"}
        height={320}
        data={data}
        options={options}
      />
    </>
  );
}

export default DailyExpensePieChart;
