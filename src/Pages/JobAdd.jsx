import React from "react";
import AddJobForm from "../Components/AddJobForm";
import Modal from "../Components/Modal";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import { useState } from "react";
const JobAdd = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="w-full max-w-[1000px] mt-10 mr-auto ml-auto min-h-screen flex flex-col gap-2 p-5">
        <h1 className="text-center text-2xl font-bold">Add Job</h1>
        <AddJobForm setOpenModal={setOpenModal} />
      </div>
      <Modal setOpenModal={setOpenModal} openModal={openModal}>
        <div className="flex flex-col justify-center items-center space-y-5 ">
          <span>Do You wnat to add job ?</span>
          <div className="flex gap-2">
            <PrimaryButton name="Go back" />
            <SecondaryButton name="Add job" />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobAdd;
