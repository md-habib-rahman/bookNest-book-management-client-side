import { Rating } from "@smastrom/react-rating";
import React, { use } from "react";
import { BiCategory } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AllBooksCards = ({ book, index }) => {
  const { dbUserInfo } = use(AuthContext);
  console.log(book);
  return (
    <div
      className="flex bg-base-200 gap-4 rounded-xl shadow-lg px-2 mb-6 pb-4 relative"
      data-aos="zoom-in"
      data-aos-delay={index * 100}
    >
      <div className="-mt-6 w-70 h-40 rounded-lg overflow-hidden">
        <img
          src={book.image}
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="py-4 space-y-2">
        <Link to={`/book-details/${book._id}`}>
          <h4 className="text-primary font-bold text-xl">{book.name}</h4>
        </Link>
        <p className="text-gray-500 text-sm">By {book.authorName}</p>
        <div className="flex items-center gap-2 justify-around">
          <div className="flex gap-2 items-center">
            <Rating style={{ maxWidth: 70 }} value={book.rating} readOnly />
            <span className="text-sm text-gray-700 font-semibold">
              {book.rating}
            </span>
          </div>

          <div className="badge badge-success gap-1 text-white text-sm">
            <BiCategory className="text-lg" />
            {book.category}
          </div>
        </div>
        <p className="text-sm text-gray-400">{book.shortDescription}</p>
      </div>
      <div
        className={`text-primary/60 hover:text-primary transition-all  absolute right-2 top-2 ${
          dbUserInfo?.role !== "admin" && "hidden"
        }`}
      >
        <Link to={`/update-book/${book._id}`}>
          <FiEdit size={24} />
        </Link>
      </div>
    </div>
  );
};

export default AllBooksCards;
