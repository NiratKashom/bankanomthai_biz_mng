import  axios  from "axios"

// const url = "https://script.google.com/macros/s/AKfycbw2lWExf_11o3NWyVC6QvJk4Xo0nV6pjAIC2H0mk3UV9_dfMX9EvRmOrGbYTm4iCPYIhg/dev";
const url = "https://script.google.com/macros/s/AKfycbw2lWExf_11o3NWyVC6QvJk4Xo0nV6pjAIC2H0mk3UV9_dfMX9EvRmOrGbYTm4iCPYIhg/exec";

const data = {
  name: 'John',
  age: 30
};

axios.get(url)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });