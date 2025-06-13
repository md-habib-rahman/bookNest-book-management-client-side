import React from "react";
import CategoriesCard from "./CategoriesCard";

const bookCategories = [
  {
    name: "Science-Fiction",
    icon: "https://i.ibb.co/1fzY5Yb4/science-fiction.png",
  },
  {
    name: "Mystery",
    icon: "https://i.ibb.co/wZ9X4wN6/thriller.png",
  },
  {
    name: "Travel",
    icon: "https://i.ibb.co/G4Bqgt56/travel-book.png",
  },
  {
    name: "History",
    icon: "https://i.ibb.co/bhMgNHQ/history-2201563.png",
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-16">
		<div className="text-center mb-12">
			<h2 className="font-bold text-3xl">
			Browse Book Categories
		</h2>
		<p className="text-gray-500">Discover a curated selection of genres to help you find the right book for every interest.</p>
		</div>
		
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bookCategories.map((category, index) => (
          <CategoriesCard category={category} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
