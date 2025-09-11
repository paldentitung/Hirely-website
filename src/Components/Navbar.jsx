import React from "react";
import { Link } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
const Navbar = () => {
  return (
    <header className="w-full flex justify-around items-center p-6 bg-orange-500 text-white">
      <div className="text-2xl font-semibold ">
        <Link to="/home">Hirely</Link>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li className=" transition-all duration-200 hover:border-b-[2px]">
            <Link to="/home"> Home</Link>
          </li>
          <li className=" transition-all duration-200 hover:border-b-[2px]">
            <Link to="/jobs">Jobs</Link>
          </li>
          <li className=" transition-all duration-200 hover:border-b-[2px]">
            <Link to="/add-job"> Add Job</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
