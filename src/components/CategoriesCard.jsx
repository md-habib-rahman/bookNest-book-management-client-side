import React from "react";
import { Link } from "react-router";

const CategoriesCard = ({ category }) => {
  return (
    <div className="bg-base-300 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 hover:shadow-2xl hover:transition-all duration-500 group hover:translate-y-[-10px]">
      <img
        src={category.icon}
        alt=""
        className="w-50 group-hover:rotate-y-180 preserve-3d transition-transform duration-500"
      />
      <Link to={`/categories-books/${category.name}`}>
        <h2 className="font-semibold text-lg hover:underline hover:">
          {category.name}
        </h2>
      </Link>
    </div>
  );
};

export default CategoriesCard;
