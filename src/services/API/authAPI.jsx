import axios from "@/config/axios.config.js";

export const loginAPI = async ({email, password}) => {
  try {
    const res = await axios.post("/user/login", {email, password});
    return res.data;
  } catch (error) {
    console.log(error);
  } 
}