import React from "react";
import { useState } from "react";
const IsExpanded = ({ description }) => {
  const [IsExpanded, setIsExpaned] = useState(false);
  const showText = IsExpanded ? description : description.slice(0, 150);
  return (
    <div>
      <p>
        {showText}
        {description.length > 150 && (
          <span
            onClick={() => setIsExpaned(!IsExpanded)}
            className="text-gray-500 ml-2 hover:cursor-pointer"
          >
            {IsExpanded ? "show less.." : "show more..."}
          </span>
        )}
      </p>
    </div>
  );
};

export default IsExpanded;
