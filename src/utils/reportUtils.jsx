export const convertCommaStringToNumber = (str) => {
  if (!str) return 0;
  return Number(str.replace(/,/g, ""));
};

export const extractDataSetForMonthlyLineChart = (data) => {
  const monthlyDataset = {
    dateLabels: [],
    incomeDataset: [],
    expenseDataset: [],
    netDataset: [],
  };

  data?.forEach((item) => {
    const { date, sum_income, sum_expense, net_income } = item;
    monthlyDataset.dateLabels.push(date);
    monthlyDataset.incomeDataset.push(sum_income);
    monthlyDataset.expenseDataset.push(sum_expense);
    monthlyDataset.netDataset.push(net_income);
  });

  return monthlyDataset;
};
