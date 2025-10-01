import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobAdd from "./Pages/JobAdd";
import Register from "./Pages/Register";
import JobDetails from "./Pages/JobDetails";
import NotFountPage from "./Pages/NotFountPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import jobsData from "./Data/JobsData";
import MainLayout from "./Pages/MainLayout";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  // Initialize role from localStorage
  const [role, setRole] = useState(() => localStorage.getItem("role") || "");
  const [login, setLogin] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [jobs, setJobs] = useState(jobsData);

  const handleDeletedJob = (id) => {
    const updateJobs = jobs.filter((job) => job.id !== id);
    setJobs(updateJobs);
  };

  // Save role to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("role", role);
  }, [role]);

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
              <Jobs jobs={jobs} setJobs={setJobs} />
            </MainLayout>
          }
        />
        <Route
          path="/add-job"
          element={
            <MainLayout role={role}>
              <JobAdd jobs={jobs} setJobs={setJobs} />
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
              <JobDetails
                role={role}
                jobs={jobs}
                setJobs={setJobs}
                handleDeletedJob={handleDeletedJob}
              />
            </MainLayout>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp role={role} />} />
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
