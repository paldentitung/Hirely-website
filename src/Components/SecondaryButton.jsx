import React from "react";

const SecondaryButton = ({ name, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 bg-purple-400 text-white rounded-md hover:bg-purple-500"
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
