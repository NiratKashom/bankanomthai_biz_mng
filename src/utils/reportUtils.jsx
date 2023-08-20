export const convertCommaStringToNumber = (str) => {
  if (!str) return 0;
  return Number(str.replace(/,/g, ""));
};