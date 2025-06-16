import { Rating } from "@smastrom/react-rating";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";

const AllBooksCards = ({ book }) => {
  return (
    <div className="flex bg-base-100 gap-8 rounded-xl shadow-lg px-2 mb-6 pb-4 relative">
      <div className="-mt-6 w-60 h-50 rounded-lg">
        <img src={book.image} alt="" className="w-full h-full object-fill" />
      </div>
      <div className="py-4 space-y-2">
        <h4 className="text-primary font-bold text-xl">{book.name}</h4>
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
      <div className="text-primary/60 hover:text-primary transition-all  absolute right-1 top-1">
        <Link to={`/update-book/${book._id}`}>
          <FiEdit size={24} />
        </Link>
      </div>
    </div>
  );
};

export default AllBooksCards;
