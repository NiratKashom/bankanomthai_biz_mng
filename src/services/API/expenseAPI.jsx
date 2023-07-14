import dayjs from "dayjs";
import axios from "axios";

const endPoint = import.meta.env.VITE_API_ENDPOINT;

export const getExpenseAPI = async (date) => {
  const formattedDate = dayjs(date).format("MM/DD/YYYY");
  const sheet = "sheet=expense";
  const dueDate = "?date=" + formattedDate;
  const endPointWithQueryString = endPoint + sheet + "&" + dueDate;

  try {
    const response = await axios.get(endPointWithQueryString);
    return response.data;
  } catch (error) {
    console.log("ERR:" + error);
  }
};

export const postExpenseAPI = async (formData) => {
  // console.log("postExpenseAPI");
  try {
    const response = await axios.post(
      endPoint + "?service=postExpData",
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        mode: "no-cors",
      }
    );
    const resData = {
      statusCode: response.status,
      message: response.data.message,
      data: response.data,
    };
    return resData;
    s;
  } catch (error) {
    throw new error("ERR:", error);
  }
};
