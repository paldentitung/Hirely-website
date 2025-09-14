import React from "react";
import google from "../assets/google.svg";
import microsoft from "../assets/microsoft.svg";
import meta from "../assets/meta.svg";
import netflix from "../assets/netflix.svg";
import shopify from "../assets/shopify.svg";
import coinbase from "../assets/coinbase.svg";

const FeaturedCompanies = () => {
  const companies = [google, meta, microsoft, netflix, coinbase, shopify];

  return (
    <div className="overflow-hidden h-24 mt-10 flex items-center">
      <div className="marquee flex space-x-24">
        {companies.concat(companies).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="Company Logo"
            className="w-16 h-16 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCompanies;
