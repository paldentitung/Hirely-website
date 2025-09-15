import React, { useState } from "react";
import AddJobForm from "../Components/AddJobForm";
import Modal from "../Components/Modal";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import jobsData from "../Data/JobsData";

const JobAdd = ({ jobs, setJobs }) => {
  const [tempFormData, setTempFormData] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const handleFormSubmit = (formData) => {
    setTempFormData(formData);
    setOpenModal(true);
  };

  const confirmAddJob = () => {
    if (!tempFormData) return;

    const newJob = {
      id: Date.now().toString(),
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
      applicants: 0,
      status: "Active",
    };

    setJobs([...jobs, newJob]);
    setTempFormData(null);
    setOpenModal(false);
  };

  const cancelAddJob = () => {
    setTempFormData(null);
    setOpenModal(false);
  };
  console.log(jobs);

  return (
    <>
      <div className="w-full max-w-[1000px] mt-10 mx-auto min-h-screen flex flex-col gap-2 p-5">
        <h1 className="text-center text-2xl font-bold">Add Job</h1>
        <AddJobForm onSubmit={handleFormSubmit} />
      </div>

      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div className="flex flex-col justify-center items-center space-y-5">
          <span>Do you want to add this job?</span>
          <div className="flex gap-2">
            <PrimaryButton name="Go back" onClick={cancelAddJob} />
            <SecondaryButton name="Add job" onClick={confirmAddJob} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobAdd;
