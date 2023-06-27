import React, { createContext, useState } from "react";

export const SfFormDataContext = createContext();

export const SfFormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState([
    {
      title: "",
      amount: "",
      unit: "",
      totalPrice: "",
      remark: "",
    },
  ]);

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
      value={{ formData, setFormData, updateFormData,deleteFormDataItem }}
    >
      {children}
    </SfFormDataContext.Provider>
  );
};
