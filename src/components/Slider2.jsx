import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import bookStudents from "../assets/books around students.json";
import ButtonsPrimary from "./ButtonsPrimary";
import ButtonsSecondary from "./ButtonsSecondary";

const Slider2 = () => {
  return (
    <section className="h-auto bg-base-200 text-white py-16 ">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl font-fredoka md:text-6xl font-bold mb-4">
            Manage Libraries With Ease
          </h2>
          <p className="text-lg md:text-xl mb-6">
            From classroom collections to school-wide systems, BookNest keeps
            everything sorted.
          </p>
          <ButtonsSecondary text={'Add Books'} dest={"/add-books"}/>
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <Lottie animationData={bookStudents} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Slider2;
