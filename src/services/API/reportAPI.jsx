import dayjs from "dayjs";
import axios from "@/config/axios.config.js";

export const getDailyReportAPIByDate = async (date) => {
  try {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/report/daily/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};