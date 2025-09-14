import React from "react";
import Title from "./Title";

import {
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6"; // latest Font Awesome 6

export const Footer = () => {
  return (
    <>
      <div className="h-auto md:h-[60vh] border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 w-full px-[10%] py-12 justify-between">
          {/* Left Section */}
          <div className="flex flex-col gap-4 items-start">
            <Title title="Hirely" />
            <div className="flex gap-5">
              <FaFacebook className="text-2xl text-gray-800 dark:text-gray-300 hover:text-blue-600 hover:scale-110 cursor-pointer transition-all duration-300" />
              <FaInstagram className="text-2xl text-gray-800 dark:text-gray-300 hover:text-pink-500 hover:scale-110 cursor-pointer transition-all duration-300" />
              <FaLinkedin className="text-2xl text-gray-800 dark:text-gray-300 hover:text-blue-700 hover:scale-110 cursor-pointer transition-all duration-300" />
              <FaXTwitter className="text-2xl text-gray-800 dark:text-gray-300 hover:text-black dark:hover:text-white hover:scale-110 cursor-pointer transition-all duration-300" />
              <FaWhatsapp className="text-2xl text-gray-800 dark:text-gray-300 hover:text-green-600 hover:scale-110 cursor-pointer transition-all duration-300" />
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              &copy;2025 Hirely. All rights reserved
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* Solutions */}
            <div className="flex flex-col space-y-3 items-start md:items-center">
              <span className="font-semibold uppercase tracking-wide">
                Solutions
              </span>
              <ul className="flex flex-col space-y-3">
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Marketing
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Analytics
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Automation
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Commerce
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Insights
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-3 items-start md:items-center">
              <span className="font-semibold uppercase tracking-wide">
                Company
              </span>
              <ul className="flex flex-col space-y-3">
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  About
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Blog
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Jobs
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Press
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col space-y-3 items-start md:items-center">
              <span className="font-semibold uppercase tracking-wide">
                Support
              </span>
              <ul className="flex flex-col space-y-3">
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Submit ticket
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Documentation
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Guides
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col space-y-3 items-start md:items-center">
              <span className="font-semibold uppercase tracking-wide">
                Legal
              </span>
              <ul className="flex flex-col space-y-3">
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Terms of Service
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  Privacy Policy
                </li>
                <li className="text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 cursor-pointer transition-colors duration-300 border-b border-transparent hover:border-gray-500">
                  License
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
