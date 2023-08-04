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
    // {
    //   title: "ขนมถ้วยฟู",
    //   amount: "2",
    //   unit: "ชุด",
    //   totalPrice: "450",
    //   remark: "คนสั่ง ลูกเล็ก 50ลูก และ ถ้วยใหญ่ 10 ถ้วย",
    //   isLeftover: false,
    //   leftoverAmount: "",
    //   leftoverTotalPrice: "",
    // },
    // {
    //   title: "ขนมถ้วยฟู - ถุงเล็ก 5 ลูก",
    //   amount: "33",
    //   unit: "ถุง",
    //   totalPrice: "672",
    //   remark: "บวกเศษ3 ลูก=12บาท",
    //   isLeftover: false,
    //   leftoverAmount: "",
    //   leftoverTotalPrice: "",
    // },
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
