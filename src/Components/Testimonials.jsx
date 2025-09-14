import React from "react";
import TestimonialsCard from "./TestimonialsCard";
import TestimonialsData from "../Data/TestimonialsData";
import Title from "./Title";
import { TiLeaf } from "react-icons/ti";
const Testimonials = () => {
  return (
    <>
      <div className="h-auto mt-10 p-3">
        <div className="flex justify-center items-center mb-7">
          <Title title="Testimonials" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-6 w-full mx-auto  max-w-[1200px] m-2">
          {TestimonialsData.map((testimonials, index) => (
            <TestimonialsCard testimonials={testimonials} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
