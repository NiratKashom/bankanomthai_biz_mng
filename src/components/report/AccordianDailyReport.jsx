import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border mb-2">
      <button
        className={`w-full ${isOpen ? "text-black" : "text-gray-500"}
        bg-gray-100 hover:text-black font-bold py-2 px-4 flex justify-between`}
        onClick={toggleAccordion}
      >
        <div>รายรับ</div>
        <div className="flex justify-between w-1/3">
          <p>xx รายการ</p>
          <p>xxxx บาท</p>
        </div>
      </button>
      {isOpen && <div className="p-4">{content}</div>}
    </div>
  );
};

const AccordianDailyReport = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default AccordianDailyReport;
