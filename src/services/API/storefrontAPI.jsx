import dayjs from "dayjs";
import axios from 'axios'

// const endPoint = import.meta.env.VITE_API_ENDPOINT;
const endPoint = import.meta.env.VITE_API_ENDPOINT;

export const getStorefrontAPI = async (date) => {
  const formattedDate = dayjs(date).format("MM/DD/YYYY");
  const dueDate = "?date=" + formattedDate;
  try {
    const response = await fetch(endPoint + dueDate);
    if (!response.ok) {
      console.log("Error fetching data");
    }
    const resData = await response.json();
    return resData;
  } catch (error) {
    console.log("ERR:" + error);
  }
};

export const postStorefrontAPI = async (formData) => {
  console.log("postStorefrontAPI")
  console.log("endPoint")
  console.log(endPoint)
  try {
    const response = await axios.post(endPoint + "?service=postSfData", JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      mode: 'no-cors'
    });
    const resData = {
      statusCode: response.status,
      message: response.data.message,
      data: response.data,
    };
    return resData;
  } catch (error) {
    throw new error("ERR:", error);
  }
};
