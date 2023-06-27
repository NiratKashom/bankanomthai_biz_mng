import React from "react";

function SfInputForm({ data,idx, handleInputChange }) {
  return (
    <>

      <div className="flex space-x-2 mb-2">
        <div className="w-1/4">
          <label className="block font-semibold mb-1">Title:</label>
          <select
            name="title"
            value={data.title}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          >
            <option value="">Select Title</option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        {/* <div className="w-1/4">
          <label className="block font-semibold mb-1">Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="w-1/4">
          <label className="block font-semibold mb-1">Unit:</label>
          <select
            name="unit"
            value={formData.unit}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          >
            <option value="">Select Unit</option>
            <option value="Unit 1">Unit 1</option>
            <option value="Unit 2">Unit 2</option>
            <option value="Unit 3">Unit 3</option>
          </select>
        </div> */}
      </div>

      {/* <div className="flex space-x-2 mb-4">
        <div className="w-2/4">
          <label className="block font-semibold mb-1">Remark:</label>
          <input
            type="text"
            name="remark"
            value={formData.remark}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="w-1/4">
          <label className="block font-semibold mb-1">Total Price:</label>
          <input
            type="number"
            name="totalPrice"
            value={formData.totalPrice}
            onChange={handleInputChange}
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
      </div> */}
    </>
  );
}

export default SfInputForm;
