import React, { createContext, useState } from "react";

export const ExpenseFormDataContext = createContext();

export const ExpenseFormDataProvider = ({ children }) => {
  const [expSelectedDate, setExpSelectedDate] = useState(new Date());

  const [formData, setFormData] = useState([
    {
      title: "",
      amount: 0,
      unit: "",
      totalPrice: 0,
      remark: "",
    },
  ]);

  const clearFormData = () => {
    setFormData(() => ([
      {
        title: "",
        amount: "",
        unit: "",
        totalPrice: "",
        remark: "",
      },
    ]));
  }

  const addFormData = () => {
    setFormData((prevFormList) => [
      ...prevFormList,
      {
        title: "",
        amount: "",
        unit: "",
        totalPrice: "",
        remark: "",
      },
    ]);
  };

  const updateFormData = (idx, updatedData) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData[idx] = { ...updatedFormData[idx], ...updatedData };
      return updatedFormData;
    });
  };

  const deleteFormDataItem = (index) => {
    setFormData((prevFormData) => {
      const updatedItems = [...prevFormData];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  return (
    <ExpenseFormDataContext.Provider
      value={{
        formData,
        setFormData,
        expSelectedDate,
        setExpSelectedDate,
        addFormData,
        updateFormData,
        deleteFormDataItem,
        clearFormData
      }}
    >
      {children}
    </ExpenseFormDataContext.Provider>
  );
};