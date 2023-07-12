import React from "react";

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="mb-4 border-y-4 border-blue-400 rounded-full animate-spin w-28 h-28"></div>
        <p className="text-white text-xl">กำลังโหลด . . . .</p>
      </div>
    
    </>
  );
};

export default Loading;
