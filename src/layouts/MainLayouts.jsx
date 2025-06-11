import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer autoClose={6000} />
    </>
  );
};

export default MainLayouts;
