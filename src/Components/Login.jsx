import React, { useState } from "react";
import { BsEye, BsGoogle, BsApple } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ role }) => {
  const [showPassword, setShowPasword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/home");
  };

  return (
    <div className="w-full max-w-[400px] flex flex-col items-center bg-white rounded-lg space-y-5 px-7 py-2 shadow-md shadow-[rgb(235,235,235)]">
      {/* ✅ Form with proper submit */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 w-full ">
        <div className="flex flex-col">
          <label htmlFor="Email">Email address:</label>
          <input
            type="email"
            name="Email"
            placeholder="enter your email"
            autoComplete="email"
            className="border-gray-300 outline-0 border-[1px] px-4 py-2 rounded-md"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Password">Password:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="Password"
              placeholder="enter your password"
              autoComplete="current-password"
              className="border-gray-300 outline-0 w-full border-[1px] px-4 py-2 rounded-md"
              required
            />
            <BsEye
              className="absolute bottom-3 right-3 cursor-pointer"
              onClick={() => setShowPasword(!showPassword)}
            />
          </div>
        </div>

        {role === "company" && (
          <div>
            <label htmlFor="company-name">Company Name:</label>
            <input
              type="text"
              placeholder="Enter the company name"
              name="company-name"
              className="border-gray-300 outline-0 w-full border-[1px] px-4 py-2 rounded-md"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="bg-gray-800 text-white py-2 rounded-md transition-all duration-200 hover:cursor-pointer hover:shadow-sm hover:shadow-[rgba(0,0,0,0.5)] hover:bg-gray-900 active:opacity-50"
        >
          {role === "user" ? "Login as user" : "Login as company"}
        </button>
      </form>

      {/* OAuth Options */}
      <div className="w-full flex flex-col space-y-3">
        <div className="flex gap-2 px-2 py-2 border-gray-200 border-[1px] justify-center items-center transition-all duration-200 hover:shadow-md hover:shadow-[rgb(245,245,245)] hover:cursor-pointer">
          <BsGoogle className="text-[16px]" />
          <span>Continue with Google</span>
        </div>
        <div className="flex gap-2 px-2 py-2 border-gray-200 border-[1px] justify-center items-center transition-all duration-200 hover:shadow-md hover:shadow-[rgb(245,245,245)] hover:cursor-pointer">
          <BsApple />
          <span>Continue with Apple</span>
        </div>
      </div>

      {/* Navigation to SignUp */}
      <div className="text-sm flex gap-2 border-b border-transparent hover:border-b-gray-800 hover:cursor-pointer">
        <span className="text-gray-500">Don't have an account yet?</span>
        <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
