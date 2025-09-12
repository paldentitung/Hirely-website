import Home from "./Pages/Home";
import Jobs from "./Pages/Jobs";
import JobAdd from "./Pages/JobAdd";
import Register from "./Pages/Register";
import JobDetails from "./Pages/JobDetails";
import NotFountPage from "./Pages/NotFountPage";
import MainLayout from "./Pages/MainLayout";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />

        <Route
          path="/home"
          element={
            <MainLayout>
              <Home></Home>
            </MainLayout>
          }
        />
        <Route
          path="/jobs"
          element={
            <MainLayout>
              <Jobs />
            </MainLayout>
          }
        />
        <Route
          path="/add-job"
          element={
            <MainLayout>
              <JobAdd />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFountPage />
            </MainLayout>
          }
        />

        <Route
          path="/jobs/:id"
          element={
            <MainLayout>
              <JobDetails />
            </MainLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
