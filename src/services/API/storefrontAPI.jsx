import dayjs from "dayjs";

const endPoint = import.meta.env.VITE_API_ENDPOINT;

export const getStorefrontAPI = async (date) => {
  // console.log("getStorefrontAPI")
  const formattedDate = dayjs(date).format("MM/DD/YYYY");
  const dueDate = "?date=" + formattedDate;
  // const dueDate = "?date=5/17/2023"
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
  // console.log(JSON.stringify(formData))
  // console.log('JSON.stringify(formData)')
  try {
    const response = await fetch(endPoint, {
      method: "POST",
      mode: "no-cors",
      followRedirects: true,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    console.log(formData)
    // var statusCode = response.getResponseCode();
    // if (statusCode === 302) {
    //   var redirectedUrl = response.getHeaders()["Location"];
    //   // Handle the redirected URL as needed
    //   console.log("redirectedUrl", redirectedUrl);
    // } else {
    //   var responseData = JSON.parse(response.getContentText());
    //   // Handle the response data
    //   console.log("responseData", responseData);
    // }
    // console.log(JSON.stringify(response))
    // if (!response.ok) {
    //   console.log("Error fetching data");
    // }
    // const resData = await response.json();
    return responseData;
  } catch (error) {
    console.log("ERR:");
    console.log(error);
  }
};
