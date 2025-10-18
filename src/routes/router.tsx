import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout.tsx";
import BoardPage from "../pages/BoardPage.tsx";
import HomePage from "../pages/HomePage.tsx";

const router = createBrowserRouter([
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/board",
        Component: BoardPage,
      },
    ],
  },
]);

export default router;
