import React from "react";

import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Link } from "react-router";
import { BiCategory } from "react-icons/bi";

const BookCategoriesCard = ({ book }) => {
  const { _id, authorName, category, image, name, quantity, rating } = book;
  return (
    <div className=" shadow-2xl  flex flex-col bg-base-100 rounded-2xl overflow-hidden">
      <div className="bg-base-200 px-6  relative">
        <div className="flex items-center gap-4">
          <img src={image} alt="" className="w-1/2 -mb-12 mt-12" />
          <div className="text-white space-y-1">
            <h4 className="text-xl/5 font-semibold">{name}</h4>
            <div className="flex gap-2 items-center">
              <Rating style={{ maxWidth: 70 }} value={rating} readOnly />
              <p className="font-semibold text-sm">{rating}</p>
            </div>
            <p className="text-sm text-slate-300">{quantity} pcs available</p>
            <div className="badge badge-success">
              <BiCategory />
              {category}
            </div>
            <div className="absolute bottom-0 translate-y-1/2 translate-x-1/2">
              <Link
                to={`/book-details/${_id}`}
                className={`relative group inline-block px-6 border-2 font-medium border-primary bg-primary text-white text-center rounded-xl overflow-hidden`}
              >
                <span className="absolute w-100 h-0 rotate-45 -translate-x-40 bg-white top-1/2 transition-all duration-300 group-hover:h-96 group-hover:-translate-y-32 ease-in-out z-0"></span>
                <span className="relative z-10 transition duration-300 group-hover:text-primary flex gap-2 items-center">
                  Details
                </span>
              </Link>
              {/* <ButtonsSecondary text={'Details'}/> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" px-16 pt-12 pb-8 mt-4">
        <div className="flex gap-2 items-center justify-center border-b-1 border-gray-300 pb-2">
          <img
            src="https://i.ibb.co/5XnvtB0k/icons8-author-32.png"
            alt="writer-male"
          />
          <p className="text-lg font-semibold text-gray-500">{authorName}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCategoriesCard;
