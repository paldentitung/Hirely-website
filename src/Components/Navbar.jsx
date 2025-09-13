import React from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const Navbar = ({ role }) => {
  return (
    <header className="w-full flex justify-around items-center p-6 bg-orange-500 text-white z-50  sticky top-0">
      <div className="text-2xl font-semibold ">
        <Link to="/home">Home</Link>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li className=" transition-all    block duration-200 hover:border-b-[2px]">
            <Link to="/home"> Home</Link>
          </li>
          <li className=" transition-all border-b border-transparent   duration-200 hover:border-b-white">
            <Link to="/jobs">Jobs</Link>
          </li>
          {role === "company" && (
            <li className=" transition-all duration-200 hover:border-b-[2px]">
              <Link to="/add-job"> Add Job</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
