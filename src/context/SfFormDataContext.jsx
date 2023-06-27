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
      isLeftover: false,
      leftoverAmount: "",
      leftoverTotalPrice: ""
    },
  ]);

  const updateFormData = (idx, updatedData) => {
    // console.log('idx, updatedData', idx, updatedData)
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

  const updateCheckedIsLeftOver = (idx,e) => {
    console.log(e)
    console.log(idx)
  }

  return (
    <SfFormDataContext.Provider
      value={{ formData, setFormData, updateFormData,deleteFormDataItem,updateCheckedIsLeftOver }}
    >
      {children}
    </SfFormDataContext.Provider>
  );
};
