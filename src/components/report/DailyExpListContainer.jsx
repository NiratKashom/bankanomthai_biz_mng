import React, { useEffect, useState } from "react";
import TabButton from "../TabButton";
import DailyExpListTable from "./DailyExpListTable";

function DailyExpListContainer({ expenseData }) {
  const [activeTab, setActiveTab] = useState(1);
  const [expByCategoryList, setExpByCategoryList] = useState({
    rawMaterials: [],
    packaging: [],
    consume: [],
    otherCosts: [],
    other: [],
  });

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const EXP_CATEGORY_LIST = [
    "ทั้งหมด",
    "วัตถุดิบ",
    "บรรจุภัณฑ์",
    "บริโภค",
    "ต้นทุนอื่นๆ",
    "อื่นๆ",
  ];

  useEffect(() => {
    if (expenseData.length) {
      const tempExpByCategoryList = {
        rawMaterials: [],
        packaging: [],
        consume: [],
        otherCosts: [],
        other: [],
      };
      expenseData.forEach((item) => {
        switch (item.category) {
          case "วัตถุดิบ":
            tempExpByCategoryList.rawMaterials.push(item);
            break;
          case "บรรจุภัณฑ์":
            tempExpByCategoryList.packaging.push(item);
            break;
          case "บริโภค":
            tempExpByCategoryList.consume.push(item);
            break;
          case "ต้นทุนอื่นๆ":
            tempExpByCategoryList.otherCosts.push(item);
            break;
          case "อื่นๆ":
            tempExpByCategoryList.other.push(item);
            break;
        }
      });

      setExpByCategoryList(() => ({ ...tempExpByCategoryList }));
    }
  }, [expenseData]);

  return (
    <div className="w-full mx-auto ">
      <div className="flex border-b">
        {EXP_CATEGORY_LIST.map((item, index) => (
          <TabButton
            key={"expenseTab" + index}
            activeTab={activeTab}
            selfIdx={index + 1}
            handleClick={() => handleTabChange(index + 1)}
            text={item}
          />
        ))}
      </div>

      {activeTab === 1 &&
        expenseData.map((item, idx) => (
          <DailyExpListTable data={item} idx={idx} key={"expAll" + idx} />
        ))}

      {activeTab === 2 &&
        expByCategoryList.rawMaterials.map((item, idx) => (
          <DailyExpListTable data={item} idx={idx} key={"expRawMat" + idx} />
        ))}

      {activeTab === 3 &&
        expByCategoryList.packaging.map((item, idx) => (
          <DailyExpListTable data={item} idx={idx} key={"expPkg" + idx} />
        ))}

      {activeTab === 4 &&
        expByCategoryList.consume.map((item, idx) => (
          <DailyExpListTable data={item} idx={idx} key={"expCsm" + idx} />
        ))}

      {activeTab === 5 &&
        expByCategoryList.otherCosts.map((item, idx) => (
          <DailyExpListTable data={item} idx={idx} key={"expOtcs" + idx} />
        ))}

      {activeTab === 6 &&
        expByCategoryList.other.map((item, idx) => (
          <DailyExpListTable data={item} idx={idx} key={"expOthr" + idx} />
        ))}
    </div>
  );
}

export default DailyExpListContainer;
