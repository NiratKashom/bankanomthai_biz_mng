import dayjs from "dayjs";
import axios from "axios";

const endPoint = import.meta.env.VITE_API_ENDPOINT;
const sfEndPoint = endPoint + "/storefront/";

export const getStorefrontAPI = async (date) => {
  try {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get(sfEndPoint + formattedDate);
    return response.data.data;
  } catch (error) {
    console.log("ERR:" + error);
  }
};

export const postStorefrontAPI = async (formData) => {
  try {
    const response = await axios.post(sfEndPoint, formData);
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
    const response = await axios.delete(sfEndPoint + id);
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
