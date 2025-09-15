import React from "react";
import PrimaryButton from "./PrimaryButton";

const AddJobForm = ({ setOpenModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(true);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full p-[2%] shadow-md shadow-[rgba(0,0,0,0.1)] rounded-md"
    >
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Company-name">Company name:</label>
          <input
            type="text"
            name="Company-name"
            placeholder="Enter company name"
            className="p-2 border "
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Company-Description">Company Description:</label>
          <input
            type="text"
            name="Company-Description"
            placeholder="Enter company description"
            className="border p-2"
            required
          />
        </div>
      </div>

      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Job-Type">Job Type:</label>
          <input
            type="text"
            name="Job-Type"
            placeholder="e.g. Full-time, Part-time"
            className="border p-2"
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Job-Title">Job Title:</label>
          <input
            type="text"
            name="Job-Title"
            placeholder="Enter job title"
            className="border p-2"
            required
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 p-2">
        <label htmlFor="Description">Description:</label>
        <textarea
          name="Description"
          placeholder="Write a short job description"
          className="border p-2 resize-none"
          required
        ></textarea>
      </div>

      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Salary">Salary:</label>
          <input
            type="text"
            name="Salary"
            placeholder="e.g. $40,000 per year"
            className="border p-2"
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Location">Location:</label>
          <input
            type="text"
            name="Location"
            placeholder="Enter job location"
            className="border p-2"
            required
          />
        </div>
      </div>

      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Posted-date">Posted Date:</label>
          <input type="date" name="Posted-Date" className="border p-2" />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="Expired-date">Expired Date:</label>
          <input
            type="date"
            name="Expired-Date"
            className="border p-2 focus:shadow-md focus:shadow-[rgb(240,240,240)] rounded-md "
          />
        </div>
      </div>

      <div className="p-2">
        <PrimaryButton name="Submit" />
      </div>
    </form>
  );
};

export default AddJobForm;
