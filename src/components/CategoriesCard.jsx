import React from "react";
import { Link } from "react-router";

const CategoriesCard = ({ category }) => {
  return (
    <div className="bg-base-300 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-xl">
      <img src={category.icon} alt="" className="w-50" />
      <Link to={`/categories-books/${category.name}`}>
	  
        <h2 className="font-semibold text-lg hover:underline hover:">
          {category.name}
        </h2>
      </Link>
    </div>
  );
};

export default CategoriesCard;
