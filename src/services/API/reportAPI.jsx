import dayjs from "dayjs";
import axios from "@/config/axios.config.js";

export const getDailyReportAPIByDate = async (date) => {
  try {
    if (!date) throw new Error('Date is required');
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/report/daily/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getDailyExpenseByDateAPI = async (date) => {
  try {
    if (!date) throw new Error('Date is required');
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/report/daily/expense/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};


export const getMonthlyReportAPIByDate = async (date) => {
  try {
    if (!date) throw new Error('Date is required');
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/report/monthly/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMonthlyLeftoverReportAPIByDate = async (date) => {
  try {
    if (!date) throw new Error('Date is required');
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/report/monthly/leftover/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMonthlyExpenseReportAPI= async (date) => {
  try {
    if (!date) throw new Error('Date is required');
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    const response = await axios.get("/report/monthly/expense/" + formattedDate);
    return response.data.data;
  } catch (error) {
    throw new Error(error);
  }
};