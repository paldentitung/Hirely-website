import React from "react";
import SecondaryButton from "./SecondaryButton";
import { Link } from "react-router-dom";
const JobCard = ({ job }) => {
  return (
    <div className="flex flex-col space-y-3 w-[350px]  font-arial h-[300px] px-4 py-2 shadow-md shadow-[rgb(225,225,225)] rounded-md  transition-all duration-200 hover:cursor-pointer hover:shadow-lg">
      <div className="font-bold">{job.title}</div>
      <div className="font-semibold">{job.type}</div>
      <div className="text-gray-400 line-clamp-3 ">{job.description}</div>
      <div className=" flex-1 flex justify-between">
        <div>{job.salary}</div>
        <div>{job.location}</div>
      </div>
      <div className="flex-1">
        <Link to={`/jobs/${job.id}`}>
          <SecondaryButton name="Read More" />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
