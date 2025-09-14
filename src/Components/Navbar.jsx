import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu, BiX, BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const [searchItem, setSearchItem] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const handleSearch = () => {
    navigate("/jobs", { state: { searchItem } });
    setShowMenu(false); // close mobile menu after search
  };

  return (
    <header className="sticky top-0 z-50 bg-orange-500 text-white w-full">
      {/* Main container */}
      <div className="flex items-center justify-between p-6 ">
        {/* Logo */}
        <Link to="/home" className="text-2xl font-semibold ml-auto mr-auto">
          Hirely
        </Link>

        {/* Desktop Nav + Search */}
        <div className="hidden md:flex items-center gap-6 flex-1 max-w-[800px] ml-6">
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
          <div className="relative flex-1 max-w-[400px] ml-6">
            <input
              type="search"
              value={searchItem}
              placeholder="Search jobs..."
              className="w-full py-2 pl-8 pr-3 rounded-md text-black text-[14px] outline-0 bg-white"
              onChange={(e) => setSearchItem(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <BiSearch className="absolute left-2 bottom-3 text-black" />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <span className="md:hidden">
          <BiMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setShowMenu(true)}
          />
        </span>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 md:hidden flex flex-col justify-center items-center bg-orange-500/95 space-y-6 px-4 transform transition-transform duration-300 ${
          showMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link
            to="/home"
            className="text-white text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            to="/jobs"
            className="text-white text-2xl"
            onClick={() => setShowMenu(false)}
          >
            Jobs
          </Link>
          {role === "company" && (
            <Link
              to="/add-job"
              className="text-white text-2xl"
              onClick={() => setShowMenu(false)}
            >
              Add Job
            </Link>
          )}
        </nav>

        <div className="w-full max-w-md mt-6">
          <input
            type="search"
            value={searchItem}
            placeholder="Search jobs..."
            className="w-full py-3 px-4 rounded-md bg-white text-black text-[14px] outline-0"
            onChange={(e) => setSearchItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </div>

        <div>
          <BiX
            className=" absolute top-5 right-5 text-2xl"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
