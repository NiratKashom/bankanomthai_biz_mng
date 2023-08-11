import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SWRConfig } from "swr";
import Swal from "sweetalert2";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <SWRConfig
    value={{
      revalidateIfStale: false,
      revalidateOnFocus: false,
      errorRetryCount: 0,
      onError: (error) => {
        Swal.fire({
          icon: "error",
          title: "Data Fetch Failed",
          text: "Error: " + error,
        });
      },
    }}
  >
    <App />
  </SWRConfig>
  // </React.StrictMode>,
);
