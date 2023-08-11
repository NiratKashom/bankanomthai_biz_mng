import dayjs from "dayjs";
import axios from "@/config/axios.config.js";

// const endPoint = import.meta.env.VITE_API_ENDPOINT;
// const expEndPoint = endPoint + "/expense/";

export const getExpenseAPI = async (date) => {
  try {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/expense/" + formattedDate);
    return response.data.data;
  } catch (error) {
    console.log("ERR:" + error);
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
    throw new Error(`ERR: ${error}`);
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
    throw new error("ERR:", error);
  }
  
}
