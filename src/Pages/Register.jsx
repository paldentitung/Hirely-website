import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import { BiLogIn } from "react-icons/bi";
import { FaUserPlus } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

const Register = ({ role, setRole, login, setLogin }) => {
  const signup = (e) => {
    e.preventDefault();

    // 1️⃣ Collect form data
    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    localStorage.setItem("signedUp", "true");
  };
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center flex-col">
      {!role && (
        <div className="flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-100 p-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Select your role
          </h2>

          <div className="flex gap-8">
            {/* User Card */}
            <button
              onClick={() => setRole("user")}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 active:opacity-80 hover:cursor-pointer"
            >
              <FaUserPlus className="text-6xl text-blue-500" />
              <span className="text-lg md:text-xl font-medium text-gray-700">
                User
              </span>
            </button>

            {/* Company Card */}
            <button
              onClick={() => setRole("company")}
              className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 active:opacity-80 hover:cursor-pointer"
            >
              <FaBuilding className="text-6xl text-green-500" />
              <span className="text-lg md:text-xl font-medium text-gray-700">
                Company
              </span>
            </button>
          </div>
        </div>
      )}

      {role && (
        <>
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
            {login ? (
              <Login role={role} login={login} />
            ) : (
              <SignUp role={role} login={login} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Register;
