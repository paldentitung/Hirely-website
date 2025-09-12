import React from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigator = useNavigate();
  const handlenav = () => {
    navigator("/home");
  };
  return (
    <div>
      Register
      <button onClick={handlenav}>go</button>
    </div>
  );
};

export default Register;
