import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";
import useAxiosInstance from "../api/useAxiosInstance";
import ButtonsPrimary from "./ButtonsPrimary";
import ButtonsSecondary from "./ButtonsSecondary";
import { Link } from "react-router";

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    axiosInstance
      .get("/top-rated")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error("Error fetching featured books:", err));
  }, []);

  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            🌟 Featured Books
          </h2>
          <p className="text-base-content mt-2">
            Handpicked gems from our collection with the highest ratings.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <div
              key={book._id}
              className="group p-5 rounded-2xl shadow-lg bg-base-100 hover:shadow-2xl hover:transition-all duration-500  hover:translate-y-[-10px]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              {/* Book Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-84 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Book Info */}
              <div className="mt-4">
                <Link to={`/book-details/${book._id}`}>
                  {" "}
                  <h3 className="text-lg font-semibold text-primary hover:underline">
                    {book.name}
                  </h3>
                </Link>
                <p className="text-sm text-base-content/70">
                  {book.authorName}
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span className="text-base font-medium">{book.rating}</span>
                </div>
              </div>

              {/* Button */}
              {/* <div className="mt-4">
                <ButtonsSecondary
                  text="View Details"
                  addClass="w-full"
                ></ButtonsSecondary>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
