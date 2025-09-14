import React from "react";
import Hero from "../Components/Hero";
import JobListing from "../Components/JobListing";
import AboutUs from "../Components/AboutUs";
import FeaturedCompanies from "../Components/FeaturedCompanies";
import Testimonials from "../Components/Testimonials";
import { Footer } from "../Components/Footer";
const Home = ({ role }) => {
  return (
    <>
      <Hero />

      <AboutUs />
      <JobListing role={role} />
      <FeaturedCompanies />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
