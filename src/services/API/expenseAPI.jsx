import dayjs from "dayjs";
import axios from "axios";

const endPoint = import.meta.env.VITE_API_ENDPOINT;

// export const getExpenseAPI = async (date) => {
//   const formattedDate = dayjs(date).format("MM/DD/YYYY");
//   const sheet = "?sheet=expense";
//   const dueDate = "date=" + formattedDate;
//   const endPointWithQueryString = endPoint + sheet + "&" + dueDate;

//   try {
//     const response = await axios.get(endPointWithQueryString);
//     return response.data;
//   } catch (error) {
//     console.log("ERR:" + error);
//   }
// };

export const getExpenseAPI = async (date) => {
  try {
    const formattedDate = dayjs(date).format("MM/DD/YYYY");
    const response = await axios.get(endPoint, {
      params: {
        sheet: "expense",
        date: formattedDate,
      },
    });
    return response.data;
  } catch (error) {
    console.log("ERR:" + error);
  }
};

export const postExpenseAPI = async (formData) => {
  try {
    const response = await axios.post(endPoint, JSON.stringify(formData), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
      mode: "no-cors",
      params: {
        service: "postExpData",
      },
    });
    return {
      statusCode: response.status,
      message: response.data.message,
      data: response.data,
    };
  } catch (error) {
    throw new Error(`ERR: ${error}`);
  }
};
