import React from "react";
import aboutus_image from "../assets/aboutus-image.jpg";
import Title from "./Title";

const AboutUs = () => {
  return (
    <div className="w-full max-w-[800px] h-[350px] backdrop-blur-md bg-white/30 rounded-lg p-6 text-center flex justify-center items-center flex-col mx-auto ">
      <Title title="About Us" />
      <p className="  text-base sm:text-lg">
        Hirely connects job seekers with top companies effortlessly. Job seekers
        can explore opportunities, while companies can post jobs and find the
        right talent—all in one place. Our mission is to make hiring simple,
        fast, and meaningful.
      </p>
    </div>
  );
};

export default AboutUs;
