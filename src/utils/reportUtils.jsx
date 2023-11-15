export const convertCommaStringToNumber = (str) => {
  if (!str) return 0;
  return Number(str.replace(/,/g, ""));
};

export const extractDataSetForMonthlyLineChart = (data, reportType) => {
  console.log("extractDataSetForMonthlyLineChart");
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

  if (reportType === "expenseByCate") {
    const lenghtArr = data.length || 0;
    monthlyDataset.expByCategoryDataset.packagingDataset = new Array(
      lenghtArr
    ).fill(0);
    monthlyDataset.expByCategoryDataset.rawMaterialDataset = new Array(
      lenghtArr
    ).fill(0);
    monthlyDataset.expByCategoryDataset.consumeDataset = new Array(
      lenghtArr
    ).fill(0);
    monthlyDataset.expByCategoryDataset.otherCostsDataset = new Array(
      lenghtArr
    ).fill(0);
    monthlyDataset.expByCategoryDataset.otherDataset = new Array(
      lenghtArr
    ).fill(0);
  }

  data?.forEach((item, idx) => {
    const {
      date,
      sum_income,
      sum_expense,
      sum_storefront,
      sum_leftover,
      net_income,
      expList,
    } = item;
    monthlyDataset.dateLabels.push(date);

    if (reportType === "networth") {
      monthlyDataset.incomeDataset.push(sum_income);
      monthlyDataset.expenseDataset.push(sum_expense);
      monthlyDataset.netDataset.push(net_income);
    } else if (reportType === "leftover") {
      monthlyDataset.storefrontDataset.push(sum_storefront);
      monthlyDataset.leftoverDataset.push(sum_leftover);
    } else if (reportType === "expenseByCate") {
      // console.log('item', item)
      for (const [key, value] of Object.entries(expList)) {
        console.log("idx", idx);
        console.log(key);
        switch (key) {
          case "วัตถุดิบ":
            monthlyDataset.expByCategoryDataset.rawMaterialDataset[idx] +=
              value;
            break;
          case "บรรจุภัณฑ์":
            monthlyDataset.expByCategoryDataset.packagingDataset[idx] += value;
            break;
          case "บริโภค":
            monthlyDataset.expByCategoryDataset.consumeDataset[idx] += value;
            break;
          case "ต้นทุนอื่นๆ":
            console.log("ต้นทุนอื่นๆ");
            monthlyDataset.expByCategoryDataset.otherCostsDataset[idx] += value;
            break;
          case "อื่นๆ":
            console.log("อื่นๆ");
            monthlyDataset.expByCategoryDataset.otherDataset[idx] += value;
          default:
            break;
        }
      }
      // rawMaterial
      // packaging
      // consume
      // otherCosts
      // other
    }
  });

  console.log("monthlyDataset", monthlyDataset);

  return monthlyDataset;
};
