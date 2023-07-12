import dayjs from "dayjs"

const endPoint = import.meta.env.VITE_API_ENDPOINT

export const getStorefrontAPI = async (date) => {
  // console.log("getStorefrontAPI")
  const formattedDate = dayjs(date).format("MM/DD/YYYY")
  // console.log(formattedDate)
  // setIsLoading(true);
  const dueDate = "?date=" + formattedDate
  // const dueDate = "?date=5/17/2023"
  try {
    const response = await fetch(endPoint + dueDate);
    if (!response.ok) {
      console.log('Error fetching data');
    }
    const resData = await response.json();
    return resData
    // console.log(resData)
    // setIsLoading(false);
  } catch (error) {
    console.log('ERR:' + error)
    // setIsLoading(false);
  }

}

