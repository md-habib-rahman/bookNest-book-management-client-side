import React from "react";
import ButtonsPrimary from "../components/ButtonsPrimary";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-base-100 px-6">
      <img
        src="https://i.ibb.co/Cst6jqLv/booknest-error-sign.png"
        alt=""
        className="w-64 mb-8"
      />
      <h1 className="text-8xl font-fredoka font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-fredoka font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <ButtonsPrimary text={"Go Back Home"} dest={"/"}></ButtonsPrimary>
    </div>
  );
};

export default ErrorPage;
