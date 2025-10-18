import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation.tsx";

const MainLayout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] min-h-dvh">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
