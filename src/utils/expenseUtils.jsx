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
      category
    };
  });
};
