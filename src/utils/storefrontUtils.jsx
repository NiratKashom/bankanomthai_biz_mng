import dayjs from "dayjs";

export const convertFormDataBeforeSubmit = (arr, date) => {
  const selectedDate = dayjs(date).format("MM/DD/YYYY HH:mm:ss");
  return arr.map((obj) => {
    const [category, title] = obj.title.split(" : ");
    return {
      ...obj,
      title,
      qty: Number(obj.qty),
      totalPrice: Number(obj.totalPrice),
      date: selectedDate,
      category,
      leftoverAmount: Number(obj.leftoverAmount) || 0,
      leftoverTotalPrice: Number(obj.leftoverTotalPrice) || 0,
    };
  });
};

// funcstion updtedSfDataWithNewData
export const updateSfDataWithNewData = (prevData, newArrData) => {
  const mergeSfData = [...prevData.storefrontData.data, ...newArrData];
  let leftoverList = [];
  let incomeList = [];
  let sfAmountItems = 0;
  let loAmountItems = 0;
  let icAmountItems = 0;
  let sfTotalPrice = 0;
  let loTotalPrice = 0;
  let icTotalPrice = 0;

  mergeSfData?.forEach(
    ({
      id: storefrontId,
      title,
      category,
      qty,
      totalPrice,
      isLeftover,
      unit,
      leftoverAmount,
      leftoverTotalPrice,
    }) => {
      sfAmountItems++;
      sfTotalPrice += totalPrice;
      if (isLeftover) {
        loAmountItems++;
        loTotalPrice += leftoverTotalPrice;
        leftoverList.push({
          storefrontId,
          title,
          category,
          unit,
          leftoverAmount,
          leftoverTotalPrice,
        });
      }
      let incomeItem = {
        storefrontId,
        title,
        unit,
        category,
        incomeAmount: qty - leftoverAmount,
        incomeTotalPrice: totalPrice - leftoverTotalPrice,
      };
      icAmountItems++;
      icTotalPrice += incomeItem.incomeTotalPrice;
      incomeList.push(incomeItem);
    }
  );
  const storefrontData = {
    amountItems: sfAmountItems.toLocaleString(),
    sumTotalPrice: sfTotalPrice.toLocaleString(),
    data: mergeSfData,
  };
  const leftoverData = {
    amountItems: loAmountItems.toLocaleString(),
    sumTotalPrice: loTotalPrice.toLocaleString(),
    data: leftoverList,
  };
  const incomeData = {
    amountItems: icAmountItems.toLocaleString(),
    sumTotalPrice: icTotalPrice.toLocaleString(),
    data: incomeList,
  };

  return { storefrontData, leftoverData, incomeData };
};

export const updatedByDelSfDataById = (data, rowId) => {
  if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
    return {
      storefrontData: {
        data: [],
        sumTotalPrice: "0",
        amountItems: "0",
      },
      leftoverData: {
        data: [],
        sumTotalPrice: "0",
        amountItems: "0",
      },
      incomeData: {
        data: [],
        sumTotalPrice: "0",
        amountItems: "0",
      },
    };
  }

  const { storefrontData, leftoverData, incomeData } = data;

  const updatedStorefrontData = updateTableData(
    storefrontData,
    rowId,
    "totalPrice"
  );
  const updatedLeftoverData = updateTableData(
    leftoverData,
    rowId,
    "leftoverTotalPrice"
  );
  const updatedIncomeData = updateTableData(
    incomeData,
    rowId,
    "incomeTotalPrice"
  );
  return {
    storefrontData: updatedStorefrontData,
    leftoverData: updatedLeftoverData,
    incomeData: updatedIncomeData,
  };
};

const updateTableData = (data, rowId, priceKey) => {
  if (
    !data ||
    data.length === 0 ||
    (typeof data === "object" && Object.keys(data).length === 0)
  )
    return {
      data: [],
      sumTotalPrice: "0",
      amountItems: "0",
    };

  const updatedData = {
    data: [],
    sumTotalPrice: 0,
    amountItems: 0,
  };

  // console.log(data);
  data.data.forEach((item) => {
    const itemId = item.id || item.storefrontId;
    if (itemId !== rowId) {
      updatedData.data.push(item);
      updatedData.sumTotalPrice += +item[priceKey];
      updatedData.amountItems += 1;
    }
  });

  updatedData.amountItems = updatedData.amountItems.toLocaleString();
  updatedData.sumTotalPrice = updatedData.sumTotalPrice.toLocaleString();

  return updatedData;
};
