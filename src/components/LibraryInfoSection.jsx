import React from "react";
import { FaBookReader } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { MdUpdate } from "react-icons/md";

const LibraryInfoSection = () => {
  return (
    <section className="bg-base-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-primary mb-4"
          data-aos="fade-in"
        >
          Welcome to Our Digital Library
        </h2>
        <p className="text-base-content text-lg mb-6">
          Discover a world of knowledge with thousands of books, journals, and
          research papers across various categories. Whether you're a student,
          teacher, or book lover — our digital library is open 24/7 just for
          you.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div
            className="relative p-6 bg-white rounded-2xl transition-transform duration-300
          hover:shadow-lg border-2 border-transparent group
          hover:border-primary border-b-[4px]"
            data-aos="flip-left"
          >
            <GiBookshelf className="mx-auto text-secondary" size={50} />
            <h3 className="text-xl text-secondary font-bold mb-2">
              Explore Books
            </h3>
            <p className="text-gray-700">
              Browse through our ever-growing collection of fiction,
              non-fiction, academic resources, and more.
            </p>
          </div>

          <div
            className="relative p-6 bg-white rounded-2xl transition-transform duration-300
          hover:shadow-lg border-2 border-transparent group
          hover:border-primary border-b-[4px]"
            data-aos="flip-left"
            data-aos-delay={100}
          >
            <FaBookReader className="mx-auto text-secondary" size={50} />
            <h3 className="text-xl font-bold text-secondary mb-2">
              Borrow & Read
            </h3>
            <p className="text-gray-700">
              Borrow books online and read from anywhere. Enjoy a smooth and
              user-friendly borrowing experience.
            </p>
          </div>

          <div
            className="relative p-6 bg-white rounded-2xl transition-transform duration-300
          hover:shadow-lg border-2 border-transparent group
          hover:border-primary border-b-[4px]"
            data-aos="flip-left"
            data-aos-delay={200}
          >
            <MdUpdate className="text-secondary mx-auto" size={50} />
            <h3 className="text-xl font-bold text-secondary mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-700">
              Check new arrivals, top picks, and recommended reads updated every
              week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LibraryInfoSection;
