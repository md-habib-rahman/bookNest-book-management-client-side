import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const MainLayouts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: false, easing: "ease" });
  }, []);
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
