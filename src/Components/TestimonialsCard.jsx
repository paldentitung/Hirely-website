import React from "react";

const TestimonialsCard = ({ testimonials }) => {
  const { desc, name, image } = testimonials;
  console.log(desc);
  return (
    <div className="text-black w-ful md:w-full rounded-md  p-3 flex flex-col space-y-2.5 shadow-md shadow-[rgb(230,230,230)] transition-all duration-300 hover:cursor-pointer hover:scale-105 hover:shadow-lg  ">
      <div className="flex-1">{desc}</div>
      <div className="flex items-center gap-2">
        <div>
          <img src={image} alt="" className="w-12 h-12 rounded-[50%]" />
        </div>
        <div>
          <div>{name}</div>
          <span className="text-[13px] text-blue-300">@{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
