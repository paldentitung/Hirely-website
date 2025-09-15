import React from "react";
import JobListing from "../Components/JobListing";
const Jobs = ({ jobs, setJobs }) => {
  return <JobListing jobs={jobs} setJobs={setJobs} />;
};

export default Jobs;
