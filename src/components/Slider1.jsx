import React from "react";
import lottieAnimation from "../assets/book with graduation hat.json";
import { Link } from "react-router";
import Lottie from "lottie-react";
import ButtonsSecondary from "./ButtonsSecondary";
import ButtonsPrimary from "./ButtonsPrimary";

const Slider1 = () => {
  return (
    <section className="bg-base-300 text-white py-16 ">
      <div className="lg:w-8/12 w-10/12  mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
        <div className="max-w-2xl text-left">
          <h2 className="text-4xl font-fredoka lg:text-6xl font-bold mb-4 text-primary">
            Bring Readers Together
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Create shared shelves, recommend books, and see what your group is
            reading.
          </p>

          <ButtonsSecondary
            text={"Get Started"}
            dest={"/register"}
          ></ButtonsSecondary>
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <Lottie animationData={lottieAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Slider1;
