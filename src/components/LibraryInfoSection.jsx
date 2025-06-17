import React from "react";

const LibraryInfoSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Welcome to Our Digital Library
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Discover a world of knowledge with thousands of books, journals, and
          research papers across various categories. Whether you're a student,
          teacher, or book lover — our digital library is open 24/7 just for
          you.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Explore Books
            </h3>
            <p className="text-gray-600">
              Browse through our ever-growing collection of fiction,
              non-fiction, academic resources, and more.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Borrow & Read
            </h3>
            <p className="text-gray-600">
              Borrow books online and read from anywhere. Enjoy a smooth and
              user-friendly borrowing experience.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-2xl">
            <h3 className="text-xl font-semibold text-primary mb-2">
              Stay Updated
            </h3>
            <p className="text-gray-600">
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
