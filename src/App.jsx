import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobAdd from "./Pages/JobAdd";
import Register from "./Pages/Register";
import JobDetails from "./Pages/JobDetails";
import NotFountPage from "./Pages/NotFountPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

import MainLayout from "./Pages/MainLayout";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [role, setRole] = useState(""); // global role
  const [login, setLogin] = useState(true); // global login/signup selection
  return (
    <>
      <Routes>
        <Route
          path="/home"
          element={
            <MainLayout role={role}>
              <Home role={role} />
            </MainLayout>
          }
        />
        <Route
          path="/jobs"
          element={
            <MainLayout role={role}>
              <Jobs />
            </MainLayout>
          }
        />
        <Route
          path="/add-job"
          element={
            <MainLayout role={role}>
              <JobAdd />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout role={role}>
              <NotFountPage />
            </MainLayout>
          }
        />

        <Route
          path="/jobs/:id"
          element={
            <MainLayout role={role}>
              <JobDetails role={role} />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/"
          element={
            <Register
              role={role}
              setRole={setRole}
              login={login}
              setLogin={setLogin}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
