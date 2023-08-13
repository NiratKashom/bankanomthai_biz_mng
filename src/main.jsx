import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SWRConfig } from "swr";
import Swal from "sweetalert2";
import axios from "@/config/axios.config.js";

const fetcher = (url) => axios.get(url).then((res) => res.data.data);

ReactDOM.createRoot(document.getElementById("root")).render(
  <SWRConfig
    value={{
      provider: () => new Map(),
      fetcher,
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
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
);
