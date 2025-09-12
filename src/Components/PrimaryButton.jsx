import React from "react";

const PrimaryButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-8 py-2 bg-orange-600   rounded-md shadow-md shadow-[rgba(240,240,240,0.2)] text-white transition-all duration-200 hover:cursor-pointer hover:scale-105"
    >
      {name}
    </button>
  );
};

export default PrimaryButton;
