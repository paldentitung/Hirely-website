import React from "react";
import { useNavigate } from "react-router-dom";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { useState } from "react";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
const Register = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col">
      <div className="bg-white flex flex-col justify-center items-center w-full max-w-[400px] ">
        <div
          className="flex gap-3 mt-5  px-2 py-1 w-1/2  justify-center items-center
              "
        >
          <div
            onClick={() => setLogin(true)}
            className="flex gap-1 text-[14px] border-b-[1px] border-transparent hover:border-gray-800 hover:cursor-pointer "
          >
            <BiLogIn />
            <span>Login</span>
          </div>
          <div
            onClick={() => setLogin(false)}
            className="flex  gap-1 text-[14px]  
                 border-b-[1px] border-transparent hover:cursor-pointer hover:border-gray-800"
          >
            <FaUserPlus />
            <span>Sign Up</span>
          </div>
        </div>
        {login ? <Login /> : <SignUp />}
      </div>
    </div>
  );
};

export default Register;
