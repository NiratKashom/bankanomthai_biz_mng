import React, { useState } from "react";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border mb-2">
      <button
        className="w-full bg-blue-500 text-white font-bold py-2 px-4"
        onClick={toggleAccordion}
      >
        {title}
      </button>
      {isOpen && (
        <div className="p-4">{content}</div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;