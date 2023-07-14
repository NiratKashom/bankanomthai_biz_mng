import dayjs from "dayjs";

export const convertExpDataBeforeSubmit = (arr, date) => {
  const currentDateTime = dayjs().format("MM/DD/YYYY HH:mm:ss");
  return arr.map((obj) => {
    const convertedValues = Object.entries(obj).map(([key, value], index) => {
      if (index === 0) {
        const [category, title] = value.split(" : ");
        return [date, title, category];
      }
      if ([1, 3].includes(index)) return Number(value);
      return value;
    });
    convertedValues.push(currentDateTime);
    return convertedValues.flat();
  });
};
