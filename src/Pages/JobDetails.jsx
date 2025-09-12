import React from "react";
import { useParams } from "react-router-dom";
const JobDetails = () => {
  const { id } = useParams();
  return <div>JobDetails {id}</div>;
};

export default JobDetails;
