import React, { useState } from "react";
import JobCard from "./JobCard";
import jobsData from "../Data/JobsData";
import SecondaryButton from "./SecondaryButton";
import Title from "./Title";
import { useLocation } from "react-router-dom";

const JobListing = () => {
  const [showJobs, setShowJob] = useState(8);
  const location = useLocation();
  const searchItem = location.state?.searchItem || "";

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchItem.toLowerCase()) || // job title
      job.company.name.toLowerCase().includes(searchItem.toLowerCase()) || // company name
      job.location.toLowerCase().includes(searchItem.toLowerCase()) || // location
      job.type.toLowerCase().includes(searchItem.toLowerCase()) // job type
  );

  // Decide which list to show
  const jobsToShow = searchItem ? filteredJobs : jobsData.slice(0, showJobs);

  return (
    <div className="h-auto flex justify-center px-[10%] py-[5%] w-full bg-gray-100">
      <div className="w-full max-w-[1200px] p-2">
        {/* Header */}
        <div className="text-center mb-8 flex gap-2 justify-center items-center">
          <Title title="Jobs :" />
          <span className="text-2xl font-semibold">{searchItem}</span>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 w-full">
          {jobsToShow.map((job, index) => (
            <JobCard job={job} key={index} />
          ))}
        </div>

        {/* See More / See Less Buttons */}
        {!searchItem && (
          <div className="flex justify-center items-center mt-5 gap-4">
            {showJobs < jobsData.length && (
              <SecondaryButton
                name="See More Jobs"
                onClick={() => setShowJob(showJobs + 4)}
              />
            )}
            {showJobs > 4 && (
              <SecondaryButton
                name="See Less Jobs"
                onClick={() => setShowJob(Math.max(showJobs - 4, 4))}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;
