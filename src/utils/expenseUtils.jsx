import dayjs from "dayjs";

export const convertExpDataBeforeSubmit = (arr, date) => {
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
    };
  });
};

function formatNumber(number) {
  return number.toLocaleString();
}

export const updatedByDeleteExpDataByRowId = (expData, rowId) => {
  const updatedExpData = expData.data.reduce(
    (acc, item) => {
      if (item.id !== rowId) {
        acc.data.push(item);
        acc.sumTotalPrice += +item.totalPrice;
        acc.amountItems += 1;
      }
      return acc;
    },
    {
      data: [],
      sumTotalPrice: 0,
      amountItems: 0,
    }
  );
  updatedExpData.sumTotalPrice = formatNumber(updatedExpData.sumTotalPrice);
  updatedExpData.amountItems = formatNumber(updatedExpData.amountItems);
  return updatedExpData;
};

export const updateExpDataWithNewData = (expData, newData) => {
  const updatedData = expData ? [...expData.data, ...newData] : [...newData];
  let updatedSumTotalPrice = expData
    ? parseInt(expData.sumTotalPrice.replace(",", ""))
    : 0;
  let updatedAmountItems = expData ? Number(expData.amountItems) : 0;

  newData.forEach((item) => {
    updatedSumTotalPrice += Number(item.totalPrice);
    updatedAmountItems += 1;
  });

  const updatedExpData = {
    data: updatedData,
    sumTotalPrice: updatedSumTotalPrice.toLocaleString(),
    amountItems: updatedAmountItems.toLocaleString(),
  };
  return updatedExpData;
};
