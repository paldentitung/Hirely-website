import React from "react";
import aboutus_image from "../assets/aboutus-image.jpg";
import Title from "./Title";

const AboutUs = () => {
  return (
    <div className="h-[700px] relative flex justify-center items-center">
      <img src={aboutus_image} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30 flex justify-center items-center px-4">
        <div className="w-full max-w-[600px] backdrop-blur-md bg-white/30 rounded-lg p-6 text-center bottom-10 lg:absolute lg:left-20">
          <Title title="About Us" />
          <p className="text-white text-base sm:text-lg">
            Hirely connects job seekers with top companies effortlessly. Job
            seekers can explore opportunities, while companies can post jobs and
            find the right talent—all in one place. Our mission is to make
            hiring simple, fast, and meaningful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
