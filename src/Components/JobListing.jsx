import React, { useState } from "react";
import JobCard from "./JobCard";
import SecondaryButton from "./SecondaryButton";
import Title from "./Title";
import { useLocation } from "react-router-dom";

const JobListing = ({ jobs, setJobs }) => {
  const [showJobs, setShowJob] = useState(8);
  const location = useLocation();
  const searchItem = location.state?.searchItem || "";

  if (!jobs) return null;
  console.log(jobs);
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      job.company.name.toLowerCase().includes(searchItem.toLowerCase()) ||
      job.location.toLowerCase().includes(searchItem.toLowerCase()) ||
      job.type.toLowerCase().includes(searchItem.toLowerCase())
  );

  const jobsToShow = searchItem ? filteredJobs : jobs.slice(0, showJobs);

  return (
    <div className="h-auto flex justify-center px-[10%] py-[5%] w-full bg-gray-100">
      <div className="w-full max-w-[1200px] p-2">
        <div className="text-center mb-8 flex gap-2 justify-center items-center">
          <Title title="Jobs :" />
          {searchItem && (
            <span className="text-2xl font-semibold">{searchItem}</span>
          )}
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 w-full">
          {jobsToShow.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </div>

        {!searchItem && (
          <div className="flex justify-center items-center mt-5 gap-4">
            {showJobs < jobs.length && (
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
