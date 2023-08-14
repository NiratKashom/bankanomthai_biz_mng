import dayjs from "dayjs";
import axios from "@/config/axios.config.js";

export const getExpenseAPI = async (date) => {
  try {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/expense/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const postExpenseAPI = async (formData) => {
  try {
    const response = await axios.post("/expense/", formData);
    return {
      statusCode: response.status,
      message: response.data.message,
      data: response.data,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteExpenseAPI = async (id) => {
  try {
    const response = await axios.delete("/expense/" + id);
    const resData = {
      statusCode: response.status,
      message: response.data.message,
      data: response.data,
    };
    return resData;
  } catch (error) {
    throw new Error(error);
  }
  
}
