import Navbar from "../Components/Navbar";
const MainLayout = ({ children, role }) => {
  return (
    <div>
      <div>
        <Navbar role={role} />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
