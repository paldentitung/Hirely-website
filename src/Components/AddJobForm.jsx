import React from "react";

const AddJobForm = ({ onSubmit, formData, setFormData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full p-4 shadow-md rounded-md"
    >
      {/* Company name and description */}
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Company Name:</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Company Description:</label>
          <input
            type="text"
            name="companyDescription"
            value={formData.companyDescription}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Job Type and Title */}
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Job Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Job Description */}
      <div className="p-2">
        <label>Job Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="border p-2 rounded resize-none w-full"
          required
        />
      </div>

      {/* Salary and Location */}
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Salary:</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Dates */}
      <div className="flex space-x-5 flex-col md:flex-row">
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Posted Date:</label>
          <input
            type="date"
            name="postedDate"
            value={formData.postedDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 p-2">
          <label>Expired Date:</label>
          <input
            type="date"
            name="expiredDate"
            value={formData.expiredDate}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>
      </div>

      {/* Submit button */}
      <div className="p-2">
        <button
          type="submit"
          className="bg-orange-500 text-white p-2 rounded w-full"
        >
          {formData.id ? "Save Changes" : "Submit"}
        </button>
      </div>
    </form>
  );
};

export default AddJobForm;
