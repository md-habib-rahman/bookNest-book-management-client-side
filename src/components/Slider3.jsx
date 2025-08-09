import React from "react";
import bookNestSlider from "../assets/bookNestSlider3.json";
import ButtonsSecondary from "./ButtonsSecondary";
import Lottie from "lottie-react";

const Slider3 = () => {
  return (
    <section className="bg-base-300 text-white py-16 ">
      <div className="w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-primary font-fredoka">
            Keep Every Book in One Beautiful Nest
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Track your reading, organize your shelves, and never lose a title
            again.
          </p>
          <ButtonsSecondary text={"Track Reading"} dest={"/borrowed-books"} />
        </div>

        <div className="w-full md:w-1/2 max-w-md">
          <Lottie animationData={bookNestSlider} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Slider3;
