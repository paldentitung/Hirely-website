import React from "react";
import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobsData from "../Data/JobsData";
const Navbar = ({ role }) => {
  const navigator = useNavigate();

  const handleNavigator = () => {
    navigator("/jobs", { state: { searchItem } });
  };

  const [searchItem, setSearchItem] = useState("");

  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full   flex justify-between flex-col  space-y-6 md:flex-row items-center p-6 bg-orange-500 text-white z-50 sticky top-0">
      {/* Logo */}
      <div className="text-2xl font-semibold ml-auto mr-auto  flex  justify-around gap-7 ">
        <Link to="/home">Hirely</Link>
        {showMenu ? (
          <>
            <BiX
              className="z-50 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            />
          </>
        ) : (
          <BiMenu
            className=" cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        )}
      </div>

      {/* Nav + Search Container */}
      <div className="hidden md:flex items-center gap-6 ml-6 flex-1 max-w-[800px]">
        {/* Nav Links */}
        <nav className="flex gap-6">
          <Link
            to="/home"
            className="hover:border-b-[2px] transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="border-b border-transparent hover:border-b-white transition-all duration-200"
          >
            Jobs
          </Link>
          {role === "company" && (
            <Link
              to="/add-job"
              className="hover:border-b-[2px] transition-all duration-200"
            >
              Add Job
            </Link>
          )}
        </nav>

        {/* Search Bar */}
        <div className="relative ml-6 flex-1 max-w-[400px]">
          <input
            type="search"
            value={searchItem}
            placeholder="Search jobs..."
            className="w-full py-2 pl-8 pr-3 rounded-md text-black text-[14px] outline-0 bg-white"
            onChange={(e) => {
              setSearchItem(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                navigator("/jobs", { state: { searchItem } });
              }
            }}
          />
          <BiSearch className="absolute left-2 bottom-3 text-black" />
        </div>
      </div>
      {showMenu && (
        <div
          className={`fixed inset-0 z-40 flex flex-col justify-center items-center bg-orange-500/95 space-y-6 px-4 transform transition-all duration-300 ${
            showMenu ? " translate-x-0 " : "translate-x-full "
          }`}
        >
          <nav className="flex flex-col gap-6 items-center">
            <Link
              to="/home"
              className="text-white text-2xl hover:border-b-[2px] transition-all duration-200"
            >
              Home
            </Link>
            <Link
              to="/jobs"
              className="text-white text-2xl border-b border-transparent hover:border-b-white transition-all duration-200"
            >
              Jobs
            </Link>
            {role === "company" && (
              <Link
                to="/add-job"
                className="text-white text-2xl hover:border-b-[2px] transition-all duration-200"
              >
                Add Job
              </Link>
            )}
          </nav>

          {/* Search Bar */}
          <div className="w-full max-w-md">
            <input
              type="search"
              value={searchItem}
              placeholder="Search jobs..."
              className="w-full py-3 px-4 rounded-md bg-white text-black text-[14px] outline-0"
              onChange={(e) => setSearchItem(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigator("/jobs", { state: { searchItem } });
                }
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
