import React from "react";
import { useParams } from "react-router-dom";
import jobsData from "../Data/JobsData";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";
import SecondaryButton from "../Components/SecondaryButton";
import { BiLocationPlus } from "react-icons/bi";
import IsExpanded from "../Components/IsExpanded";
const JobDetails = () => {
  const { id } = useParams();
  // find the job object by matching ID
  const selectedJob = jobsData.find((job) => job.id === id);
  // for later make it dynamic
  const role = "user";

  return (
    <>
      <div className="w-full max-w-[1200px] mt-6 mx-auto mb-0 flex  gap-6 flex-col lg:flex-row p-2 md:p-[3%] justify-center items-center">
        {/* for user  */}
        <div className="w-3/4 shadow-md  p-4 rounded-lg flex flex-col space-y-5 ">
          <div className=" border-b border-gray-400 py-2 flex flex-col gap-2 ">
            <Title title={selectedJob.company.name} />
            <IsExpanded description={selectedJob.company.description} />{" "}
          </div>
          <div className="flex flex-col gap-2  border-gray-400 border-b py-2 ">
            <div className="text-gray-600">{selectedJob.type}</div>
            <div className="font-bold">{selectedJob.title}</div>

            <div className="flex  ">
              <BiLocationPlus className="text-red-600" />
              <span className="text-sm"> {selectedJob.location}</span>
            </div>
          </div>
          <div className="flex flex-col gap-2  border-gray-400 border-b py-2 ">
            <h3 className="font-semibold">Job Descritption</h3>
            <p>{selectedJob.description}</p>
          </div>
          <div className="flex  justify-between">
            <div className="flex flex-col gap-2  py-2 ">
              <h3 className="font-semibold">Salary</h3>
              <p>{selectedJob.salary}</p>
            </div>
            <div className="flex flex-col   py-2 ">
              <h3 className="font-semibold">Note*</h3>
              <p className="text-gray-500">{selectedJob.postedDate}</p>
              <p className="text-gray-500">{selectedJob.expiryDate}</p>
            </div>
          </div>
        </div>

        {/* for company only */}
        {role == "company" && (
          <div className="flex flex-col w-[300px] shadow-md p-4 space-y-4 rounded-lg">
            <h2 className="text-lg font-semibold border-b pb-2">Manage Job</h2>

            <div className="text-sm text-gray-600">
              <p>
                <span className="font-medium">Posted:</span> Sep 10, 2025
              </p>
              <p>
                <span className="font-medium">Applicants:</span> 12
              </p>
              <span className="inline-block mt-2 px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
                Active
              </span>
            </div>

            <SecondaryButton name="Edit Job" />

            <PrimaryButton name="Delete" />
          </div>
        )}
      </div>
    </>
  );
};

export default JobDetails;
