import React from "react";
import PrimaryButton from "../Components/PrimaryButton";
import { Link } from "react-router-dom";
const NotFountPage = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 mt-10">
        <div className="text-2xl font-bold font-mono">
          Sorry , Page Not Found
        </div>
        <p>
          <p>We're sorry, the page you are looking for does not exist.</p>
        </p>

        <Link to="/home">
          <PrimaryButton name="Back Home" />
        </Link>
      </div>
    </>
  );
};

export default NotFountPage;
