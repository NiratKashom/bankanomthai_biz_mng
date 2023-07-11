import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Expense from "@/pages/Expense";
import Storefront from "@/pages/Storefront";
import MainContainer from "@/components/MainContainer";
import "./App.css";
import { SfFormDataProvider } from "@/context/SfFormDataContext";

const Home = () => {
  return (
    <div>
      <div>
        <Button color={"primary"} onClick={() => alert("clicked!!")}>
          primary
        </Button>
        <Button color={"secondary"}>secondary</Button>
        <Button color={"success"}>success</Button>
        <Button color={"warning"}>warning</Button>
        <Button color={"danger"}>danger</Button>
        <Button>default</Button>
        <Button disabled>disabled</Button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MainContainer>
          <SfFormDataProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/storefront" element={<Storefront />} />
            </Routes>
          </SfFormDataProvider>
        </MainContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
