import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import bookStudents from "../assets/books around students.json";


const Slider2 = () => {
  return (
    <section className="w-full bg-base-200 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Manage Libraries With Ease
        </h2>
        <p className="text-lg md:text-xl mb-6">
          From classroom collections to school-wide systems, BookNest keeps
          everything sorted.
        </p>
        <Link to="/educators">
          <button className="bg-white text-[#714ED5] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
            Explore Tools for Educators
          </button>
        </Link>
      </div>

      <div className="w-full md:w-1/2 max-w-md">
        <Lottie animationData={bookStudents} loop={true} />
      </div>
    </section>
  );
};

export default Slider2;
