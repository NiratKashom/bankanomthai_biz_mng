import dayjs from "dayjs";
import axios from "@/config/axios.config.js";

export const getStorefrontAPI = async (date) => {
  try {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/storefront/" + formattedDate);
    return response.data.data;
  } catch (error) {
    console.log("ERR:" + error);
  }
};

export const postStorefrontAPI = async (formData) => {
  try {
    const response = await axios.post("/storefront/", formData);
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

export const deleteStorefrontAPI = async (id) => {
  try {
    const response = await axios.delete("/storefront/" + id);
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
