import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut, Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Legend, Tooltip, ChartDataLabels);
function DailyPieChart({ dataSet }) {
  const convertCommaStringToNumber = (str) => {
    if (!str) return 0;
    return Number(str.replace(/,/g, ""));
  };

  // const { income, expense } = dataSet;
  const initData = {
    labels: ["รายรับ", "รายจ่าย"],
    datasets: [
      {
        label: "จำนวนเงิน(บาท)",
        data: [dataSet?.income?.sumTotalPrice, dataSet?.expense?.sumTotalPrice],
        backgroundColor: ["rgb(159, 230, 160)", "rgb(245, 92, 71)"],
        borderWidth: 1,
      },
    ],
  };

  const [data, setData] = useState(initData);

  useEffect(() => {
    console.log("useEffect Chart");
    setData((prev) => {
      return {
        ...prev,
        datasets: [
          {
            ...prev.datasets[0],
            data: [
              convertCommaStringToNumber(dataSet?.income?.sumTotalPrice),
              convertCommaStringToNumber(dataSet?.expense?.sumTotalPrice),
            ],
          },
        ],
      };
    });
  }, [dataSet]);

  return (
    <div className="">
      <Pie
        data={data}
        options={{
          plugins: {
            datalabels: {
              color: "#fff",
              font: {
                size: "18",
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
          },
        }}
      />
    </div>
  );
}

export default DailyPieChart;
