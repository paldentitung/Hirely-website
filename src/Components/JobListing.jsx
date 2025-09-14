import React from "react";
import JobCard from "./JobCard";
import jobsData from "../Data/JobsData";
import SecondaryButton from "./SecondaryButton";
import { useState } from "react";
import Title from "./Title";
import { useLocation } from "react-router-dom";
const JobListing = () => {
  const [showJobs, setShowJob] = useState(4);
  const location = useLocation();
  const searchItem = location.state?.searchItem || "";
  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchItem.toLowerCase()) || // job title
      job.company.name.toLowerCase().includes(searchItem.toLowerCase()) || // company name
      job.location.toLowerCase().includes(searchItem.toLowerCase()) || // location
      job.type.toLowerCase().includes(searchItem.toLowerCase()) // job type
  );

  return (
    <>
      <div className="h-auto flex justify-center px-[10%] py-[5%] w-full  bg-gray-100   ">
        <div className="w-full max-w-[1200px] p-2 ">
          <div className="text-center mb-8 flex gap-2 justify-center items-center">
            <Title title="Jobs :" />
            <span className="text-2xl font-semibold">{searchItem}</span>
          </div>

          {!searchItem && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 w-full">
              {jobsData.map((job, index) => (
                <JobCard job={job} key={index} />
              ))}
            </div>
          )}

          {searchItem && (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 w-full">
              {filteredJobs.map((job, index) => (
                <JobCard job={job} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobListing;
