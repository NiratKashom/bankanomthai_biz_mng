import React from "react";
import Navbar from "@/components/Navbar";
import MainContainer from "@/components/MainContainer";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { SfFormDataProvider } from "@/context/SfFormDataContext";
import { ExpenseFormDataProvider } from "@/context/ExpenseFormDataContext";
import { AuthProvider } from "@/context/AuthContext";
import Routes from "./routes";

const App = () => {
  return (
    <>
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
    </>
  );
};

export default App;
