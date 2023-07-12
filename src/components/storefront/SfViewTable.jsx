import React from "react";
import  MyComponent  from "@/services/API/storefrontAPI/storefrontApiService";
import Loading from '@/components/Loading';


function SfViewTable() {
  return (
    <div className=" p-4 ">
      <Loading />
      <MyComponent />
    </div>
  );
}

export default SfViewTable;
