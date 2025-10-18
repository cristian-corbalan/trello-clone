import { Outlet } from "react-router";

const MainLayout: React.FC = () => {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
};

export default MainLayout;
