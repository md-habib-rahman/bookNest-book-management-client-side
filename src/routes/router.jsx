import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import BookCategories from "../pages/BookCategories";
import BookDetails from "../components/BookDetails";
const serverUrl = "http://localhost:3000";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/book-details/:id",
        Component: BookDetails,
		
        
      },
      {
        path: "/categories-books/:category",
        Component: BookCategories,
        loader: ({ params }) => fetch(`${serverUrl}/books/${params.category}`),
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);

export default router;
