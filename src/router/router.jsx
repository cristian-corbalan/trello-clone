import { createBrowserRouter } from 'react-router';
import MainLayout from '../layouts/MainLayout.jsx';
import HomePage from '../pages/HomePage.jsx';

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: '/',
        Component: HomePage,
      },
    ],
  },
]);

export default router;
