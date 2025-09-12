import Navbar from "../Components/Navbar";
const MainLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
