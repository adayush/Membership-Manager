"use client";
import { useState } from "react";

export default function NewStudent() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    receipt_number: null,
    branch: null,
    name: null,
    phone_number: null,
    expiry_date: null,
  });

  const handleChange = (event, property) => {
    setFormData({
      ...formData,
      [property]: event.target.value,
    });
  };

  const handleSubmit = () => {};

  return (
    <main className="p-6 sm:p-24">
      <div className="flex flex-col gap-5 m-auto max-w-sm [&>div>label]:block [&>div>label]:text-gray-800 [&>div>label]:text-sm [&>div>label]:font-medium [&>div>label]:mb-1 [&>div>input]:p-2 [&>div>input]:border-[1px] [&>div>input]:border-gray-300 [&>div>input]:rounded-sm [&>div>input]:bg-gray-100 [&>div>input]:w-full">
        <h1 className="text-xl sm:text-2xl font-medium mb-2 text-center">
          New Student
        </h1>
        <div>
          <label>Receipt Number</label>
          <input
            type="number"
            autoComplete="off"
            onChange={(e) => handleChange(e, "receipt_number")}
          />
        </div>
        <div>
          <label>Branch</label>
          <select
            type="select"
            onChange={(e) => handleChange(e, "branch")}
            className="p-2 border-[1px] border-gray-300 rounded-sm bg-gray-100 w-full"
          >
            <option selected disabled>
              Select Branch
            </option>
            <option value="Indra Vihar">Indra Vihar</option>
            <option value="Talwandi">Talwandi</option>
            <option value="Dadabari">Dadabari</option>
          </select>
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            autoComplete="off"
            onChange={(e) => handleChange(e, "name")}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            type="number"
            autoComplete="off"
            min={999999999}
            max={9999999999}
            onChange={(e) => handleChange(e, "phone_number")}
          />
        </div>
        <div>
          <label>Membership Expiry Date</label>
          <input
            type="date"
            autoComplete="off"
            onChange={(e) => handleChange(e, "expiry_date")}
          />
        </div>
        <button
          className="w-full text-center text-white text-lg rounded bg-black p-3 mt-8 hover:bg-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
}
