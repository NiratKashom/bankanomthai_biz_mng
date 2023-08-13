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
      leftoverTotalPrice: Number(obj.leftoverTotalPrice) || 0
    };
  });
};

export const updatedByDelSfDataById = (data, rowId) => {
  if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
    return {
      storefrontData: {
        data: [],
        sumTotalPrice: "0",
        amountItems: "0"
      },
      leftoverData: {
        data: [],
        sumTotalPrice: "0",
        amountItems: "0"
      },
      incomeData: {
        data: [],
        sumTotalPrice: "0",
        amountItems: "0"
      }
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
    incomeData: updatedIncomeData
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
      amountItems: "0"
    };

  const updatedData = {
    data: [],
    sumTotalPrice: 0,
    amountItems: 0
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
