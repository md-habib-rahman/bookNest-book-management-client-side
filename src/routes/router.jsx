import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
