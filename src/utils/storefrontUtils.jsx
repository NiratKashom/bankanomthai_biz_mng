import dayjs from "dayjs";

//   console.log("======= convertFormDataBeforeSubmit =======")
//   console.log('arr', arr)
//   console.log('date', date)
//   const currentDateTime = dayjs().format("MM/DD/YYYY HH:mm:ss");
//   return arr.map((obj) => {
//     const convertedValues = Object.entries(obj).map(([key, value], index) => {
//       if (index === 0) {
//         const [category, title] = value.split(" : ");
//         return [date, title, category];
//       }
//       if ([1, 3, 6, 7].includes(index)) return Number(value);
//       return value;
//     });
//     convertedValues.push(currentDateTime);
//     return convertedValues.flat();
//   });
// };

export const convertFormDataBeforeSubmit = (arr, date) => {
  console.log("======= convertFormDataBeforeSubmit =======");
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

// [{
//   "category": "ขนมมัน",
//   "date": "2023-05-30T17:00:00.000Z",
//   "is_leftover": false,
//   "leftover_amount": 0,
//   "leftover_total_price": 0,
//   "qty": 10,
//   "remark": "",
//   "title": "จัดเบรคกล่องเล็ก",
//   "total_price": 200,
//   "unit": "กล่อง"
// }, {
//   "category": "ขนมต้ม",
//   "date": "2023-05-30T17:00:00.000Z",
//   "is_leftover": false,
//   "leftover_amount": 0,
//   "leftover_total_price": 0,
//   "qty": 1,
//   "remark": "",
//   "title": "ถุงเล็ก",
//   "total_price": 15,
//   "unit": "ถุง"
// }
// ]
