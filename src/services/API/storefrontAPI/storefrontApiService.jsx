import dayjs from "dayjs"

const storefrontEndpoint = "https://script.google.com/macros/s/AKfycbw2lWExf_11o3NWyVC6QvJk4Xo0nV6pjAIC2H0mk3UV9_dfMX9EvRmOrGbYTm4iCPYIhg/exec"


export const getStorefrontAPI = async (date) => {
  console.log("getStorefrontAPI")
  const formattedDate = dayjs(date).format("MM/DD/YYYY")
  console.log(formattedDate)
  // setIsLoading(true);
  const dueDate = "?date=" + formattedDate
  try {
    const response = await fetch(storefrontEndpoint + dueDate);
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

