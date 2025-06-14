import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import ErrorPage from "../pages/ErrorPage";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import BookCategories from "../pages/BookCategories";

import PrivateRoute from "../AuthProvider/PrivateRoute";
import AddBooks from "../pages/AddBook";
import BookDetails from "../pages/BookDetails";
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
        element: (
          <PrivateRoute>
            <BookDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/add-books",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
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
