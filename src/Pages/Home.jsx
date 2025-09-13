import React from "react";
import Hero from "../Components/Hero";
import JobListing from "../Components/JobListing";
import AboutUs from "../Components/AboutUs";
const Home = ({ role }) => {
  return (
    <>
      <Hero />

      <AboutUs />
      <JobListing role={role} />
    </>
  );
};

export default Home;
