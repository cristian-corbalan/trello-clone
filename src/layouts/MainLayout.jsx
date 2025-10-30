import { Outlet } from 'react-router';
import MainNavigation from '../components/navigation/MainNavigation.jsx';

export default function MainLayout() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] min-h-dvh bg-linear-0">
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
