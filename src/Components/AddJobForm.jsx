import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const AddJobForm = ({ setOpenModal, onSubmit }) => {
  const [formData, setFormData] = useState({
    company: "",
    description: "",
    type: "",
    title: "",
    salary: "",
    location: "",
    postedDate: "",
    expiredDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // You can send this to API or parent

    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full p-[2%] shadow-md shadow-[rgba(0,0,0,0.1)] rounded-md"
    >
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="company">Company name:</label>
          <input
            type="text"
            name="company"
            placeholder="Enter company name"
            className="p-2 border"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="description">Company Description:</label>
          <input
            type="text"
            name="description"
            placeholder="Enter company description"
            className="border p-2"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="type">Job Type:</label>
          <input
            type="text"
            name="type"
            placeholder="e.g. Full-time, Part-time"
            className="border p-2"
            value={formData.type}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="title">Job Title:</label>
          <input
            type="text"
            name="title"
            placeholder="Enter job title"
            className="border p-2"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-1 p-2">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          placeholder="Write a short job description"
          className="border p-2 resize-none"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            name="salary"
            placeholder="e.g. $40,000 per year"
            className="border p-2"
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="location">Location:</label>
          <input
            type="text"
            name="location"
            placeholder="Enter job location"
            className="border p-2"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="postedDate">Posted Date:</label>
          <input
            type="date"
            name="postedDate"
            className="border p-2"
            value={formData.postedDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label htmlFor="expiredDate">Expired Date:</label>
          <input
            type="date"
            name="expiredDate"
            className="border p-2 focus:shadow-md focus:shadow-[rgb(240,240,240)] rounded-md"
            value={formData.expiredDate}
            onChange={handleChange}
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
