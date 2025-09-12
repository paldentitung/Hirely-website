import React from "react";
import heroimage from "../assets/hero.jpg";
import PrimaryButton from "./PrimaryButton";
const Hero = () => {
  return (
    <>
      <div className="w-full h-[80vh] relative">
        <img
          src={heroimage}
          alt="hero image"
          className="w-full h-full object-cover backdrop:backdrop-brightness-50 -z-10"
        />
        {/* overlay */}
        <div className=" absolute inset-0 bg-orange-400/30   flex flex-col justify-center items-center space-y-5 text-white p-3  ">
          <div className="text-[28px] sm:text-5xl font-semibold text-center">
            Find Your Dream Job Today
          </div>
          <div className=" sm:text-lg text-gray-300 text-center ">
            Connect with top companies, discover exciting opportunities, and
            grow your career.
          </div>
          <PrimaryButton name="See Jobs" />
        </div>
      </div>
    </>
  );
};

export default Hero;
