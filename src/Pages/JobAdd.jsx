import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AddJobForm from "../Components/AddJobForm";
import Modal from "../Components/Modal";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";

const JobAdd = ({ jobs, setJobs }) => {
  const location = useLocation();
  const jobToEdit = location.state?.jobToEdit;

  const [formData, setFormData] = useState({
    title: "",
    type: "",
    description: "",
    salary: "",
    location: "",
    company: "",
    companyDescription: "",
    postedDate: "",
    expiredDate: "",
  });

  const [tempFormData, setTempFormData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  // Pre-fill form if editing
  useEffect(() => {
    if (jobToEdit) {
      setFormData({
        title: jobToEdit.title,
        type: jobToEdit.type,
        description: jobToEdit.description,
        salary: jobToEdit.salary,
        location: jobToEdit.location,
        company: jobToEdit.company.name,
        companyDescription: jobToEdit.company.description,
        postedDate: jobToEdit.postedDate,
        expiredDate: jobToEdit.expiryDate,
      });
    }
  }, [jobToEdit]);

  // Called when form is submitted
  const handleFormSubmit = (data) => {
    setTempFormData(data);
    setOpenModal(true);
  };

  // Confirm Add or Edit
  const confirmAddJob = () => {
    if (!tempFormData) return;

    const newJob = {
      id: jobToEdit ? jobToEdit.id : Date.now().toString(),
      title: tempFormData.title,
      type: tempFormData.type,
      description: tempFormData.description,
      salary: tempFormData.salary,
      location: tempFormData.location,
      company: {
        name: tempFormData.company || "Unknown Company",
        description:
          tempFormData.companyDescription || "No description available",
      },
      postedDate: tempFormData.postedDate,
      expiryDate: tempFormData.expiredDate,
      applicants: jobToEdit ? jobToEdit.applicants : 0,
      status: jobToEdit ? jobToEdit.status : "Active",
    };

    if (jobToEdit) {
      // Update existing job
      setJobs(jobs.map((j) => (j.id === jobToEdit.id ? newJob : j)));
    } else {
      // Add new job
      setJobs([...jobs, newJob]);
    }

    setTempFormData(null);
    setOpenModal(false);
  };

  const cancelAddJob = () => {
    setTempFormData(null);
    setOpenModal(false);
    navigator("/job");
  };

  return (
    <>
      <div className="w-full max-w-[1000px] mt-10 mx-auto min-h-screen flex flex-col gap-2 p-5">
        <h1 className="text-center text-2xl font-bold">
          {jobToEdit ? "Edit Job" : "Add Job"}
        </h1>
        <AddJobForm
          onSubmit={handleFormSubmit}
          formData={formData}
          setFormData={setFormData}
        />
      </div>

      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div className="flex flex-col justify-center items-center space-y-5 bg-white text-black p-2 rounded-md  w-full h-full max-w-[400px] max-h-[400px]">
          <span>
            {jobToEdit
              ? "Do you want to save changes to this job?"
              : "Do you want to add this job?"}
          </span>
          <div className="flex gap-2">
            <PrimaryButton name="Go back" onClick={cancelAddJob} />
            <SecondaryButton
              name={jobToEdit ? "Save changes" : "Add job"}
              onClick={confirmAddJob}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobAdd;
