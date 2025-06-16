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
import AllBook from "../pages/AllBook";
import BorrowedBooks from "../pages/BorrowedBooks";
import UpdateBook from "../components/UpdateBook";
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
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${serverUrl}/book-details/${params.id}`),
      },
      {
        path: "/borrowed-books",
        element: (
          <PrivateRoute>
            <BorrowedBooks />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-books",
        element: (
          <PrivateRoute>
            <AllBook />
          </PrivateRoute>
        ),
        loader: () => fetch(`${serverUrl}/books`),
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
