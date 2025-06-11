import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer autoClose={6000} />
    </>
  );
};

export default MainLayouts;
