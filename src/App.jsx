import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobAdd from "./Pages/JobAdd";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/add-job" element={<JobAdd />} />
      </Routes>
    </>
  );
};

export default App;
