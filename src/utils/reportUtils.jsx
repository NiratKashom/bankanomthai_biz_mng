export const convertCommaStringToNumber = (str) => {
  if (!str) return 0;
  return Number(str.replace(/,/g, ""));
};

export const extractDataSetForMonthlyLineChart = (data, reportType) => {
  const monthlyDataset = {
    dateLabels: [],
    incomeDataset: [],
    expenseDataset: [],
    storefrontDataset: [],
    leftoverDataset: [],
    netDataset: [],
  };

  data?.forEach((item) => {
    const {
      date,
      sum_income,
      sum_expense,
      sum_storefront,
      sum_leftover,
      net_income,
    } = item;
    monthlyDataset.dateLabels.push(date);

    if (reportType === "networth") {
      monthlyDataset.incomeDataset.push(sum_income);
      monthlyDataset.expenseDataset.push(sum_expense);
      monthlyDataset.netDataset.push(net_income);
    } else if (reportType === "leftover") {
      monthlyDataset.storefrontDataset.push(sum_storefront);
      monthlyDataset.leftoverDataset.push(sum_leftover);
    }
  });

  return monthlyDataset;
};

// export const extractDataSetForMonthlyLineChart = (data, reportType) => {
//   if (reportType === "net") {
//     const monthlyDataset = {
//       dateLabels: [],
//       incomeDataset: [],
//       expenseDataset: [],
//       netDataset: [],
//     };

//     data?.forEach((item) => {
//       const { date, sum_income, sum_expense, net_income } = item;
//       monthlyDataset.dateLabels.push(date);
//       monthlyDataset.incomeDataset.push(sum_income);
//       monthlyDataset.expenseDataset.push(sum_expense);
//       monthlyDataset.netDataset.push(net_income);
//     });
//     return monthlyDataset;
//   } else if (reportType === "leftover") {
//     const monthlyDataset = {
//       dateLabels: [],
//       storefrontDataset: [],
//       leftoverDataset: [],
//       netDataset: [],
//     };

//     data?.forEach((item) => {
//       const { date, sum_storefront, sum_leftover } = item;
//       monthlyDataset.dateLabels.push(date);
//       monthlyDataset.storefrontDataset.push(sum_storefront);
//       monthlyDataset.leftoverDataset.push(sum_leftover);
//     });

//     return monthlyDataset;
//   }
// };
