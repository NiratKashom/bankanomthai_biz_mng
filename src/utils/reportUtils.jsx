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
    expByCategoryDataset: {
      rawMaterialDataset: [],
      packagingDataset: [],
      consumeDataset: [],
      otherCostsDataset: [],
      otherDataset: [],
    },
  };

  for (let i = 0; i < data.length; i++) {
    const {
      date,
      sum_income,
      sum_expense,
      sum_storefront,
      sum_leftover,
      net_income,
      expList,
    } = data[i];

    monthlyDataset.dateLabels.push(date);

    if (reportType === "networth") {
      monthlyDataset.incomeDataset.push(sum_income);
      monthlyDataset.expenseDataset.push(sum_expense);
      monthlyDataset.netDataset.push(net_income);
    } else if (reportType === "leftover") {
      monthlyDataset.storefrontDataset.push(sum_storefront);
      monthlyDataset.leftoverDataset.push(sum_leftover);
    } else if (reportType === "expenseByCate") {
      monthlyDataset.expByCategoryDataset.rawMaterialDataset.push(
        expList.rawMaterial
      );
      monthlyDataset.expByCategoryDataset.packagingDataset.push(
        expList.packaging
      );
      monthlyDataset.expByCategoryDataset.consumeDataset.push(expList.consume);
      monthlyDataset.expByCategoryDataset.otherCostsDataset.push(
        expList.otherCosts
      );
      monthlyDataset.expByCategoryDataset.otherDataset.push(expList.other);
    }
  }
  return monthlyDataset;
};
