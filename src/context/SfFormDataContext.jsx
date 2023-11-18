import React, { createContext, useState } from "react";

export const SfFormDataContext = createContext();

export const SfFormDataProvider = ({ children }) => {
  const [sfSelectedDate, setSfSelectedDate] = useState(new Date());

  const [formData, setFormData] = useState([
    {
      title: "",
      qty: 0,
      unit: "",
      totalPrice: 0,
      remark: "",
      isLeftover: false,
      leftoverAmount: 0,
      leftoverTotalPrice: 0
    },
  ]);

  const clearFormData = () => {
    setFormData(() => ([
      {
        title: "",
        qty: "",
        unit: "",
        totalPrice: "",
        remark: "",
        isLeftover: false,
        leftoverAmount: "",
        leftoverTotalPrice: ""
      },
    ]));
  }

  const addFormData = () => {
    setFormData((prevFormList) => [
      ...prevFormList,
      {
        title: "",
        qty: "",
        unit: "",
        totalPrice: "",
        remark: "",
        isLeftover: false,
        leftoverAmount: "",
        leftoverTotalPrice: ""
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
    <SfFormDataContext.Provider
      value={{
        formData,
        setFormData,
        sfSelectedDate,
        setSfSelectedDate,
        addFormData,
        updateFormData,
        deleteFormDataItem,
        clearFormData
      }}
    >
      {children}
    </SfFormDataContext.Provider>
  );
};
