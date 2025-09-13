import React from "react";
import JobCard from "./JobCard";
import jobsData from "../Data/JobsData";
import SecondaryButton from "./SecondaryButton";
import { useState } from "react";
import Title from "./Title";

const JobListing = () => {
  const [showJobs, setShowJob] = useState(4);
  return (
    <div className="h-auto lg:h-[80vh] flex justify-center px-[10%] py-[5%] w-full  bg-gray-100   ">
      <div className="w-full max-w-[1200px] p-2 ">
        <div className="text-center mb-8">
          <Title title="Jobs :" />
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 w-full">
          {jobsData.slice(0, showJobs).map((job, index) => (
            <JobCard job={job} key={index} />
          ))}
        </div>
        <div
          className="flex justify-center items-center mt-5
        "
        >
          {showJobs <= jobsData.length && (
            <SecondaryButton
              name="see more jobs"
              onClick={() => setShowJob(showJobs + 4)}
            />
          )}
          {showJobs >= jobsData.length && (
            <SecondaryButton
              name="see Less jobs"
              onClick={() => setShowJob(showJobs - 9)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default JobListing;
