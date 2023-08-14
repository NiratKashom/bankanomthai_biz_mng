import React from "react";
import Navbar from "@/components/Navbar";
import MainContainer from "@/components/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { SfFormDataProvider } from "@/context/SfFormDataContext";
import { ExpenseFormDataProvider } from "@/context/ExpenseFormDataContext";
import { AuthProvider } from "@/context/AuthContext";
import Routes from "./routes";
import { QueryClient, QueryClientProvider,QueryCache,MutationCache } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Swal from "sweetalert2";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: 2
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถเรียกข้อมูลได้",
        text: "เกิดข้อผิดพลาด ERROR : " + error,
      });
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      Swal.fire({
        icon: "error",
        title: "ไม่สามารถดำเนินการได้",
        text: "เกิดข้อผิดพลาด ERROR : " + error,
      });
    },
  }),
});

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <AuthProvider>
            <Navbar />
            <MainContainer>
              <ExpenseFormDataProvider>
                <SfFormDataProvider>
                  <Routes />
                </SfFormDataProvider>
              </ExpenseFormDataProvider>
            </MainContainer>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
};

export default App;
