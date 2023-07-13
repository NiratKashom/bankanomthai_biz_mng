export const convertFormDataBeforeSubmit = (arr,date) => {
  return arr.map((obj) => {
    const convertedValues = Object.entries(obj).map(
      ([key, value], index) => {
        if (index === 0) {
          const [category, title] = value.split(" : ");
          return [date, title, category];
        }
        if ([1, 3, 6, 7].includes(index)) return Number(value);
        return value;
      }
    );
    return convertedValues.flat();
  });
}