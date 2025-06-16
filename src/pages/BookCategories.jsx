import React from "react";
import { useLoaderData, useParams } from "react-router";
import BookCategoriesCard from "../components/BookCategoriesCard";
import { Helmet } from "react-helmet";

const BookCategories = () => {
  const books = useLoaderData();
  const { category } = useParams();
  let quantity = 0;
  books && (quantity = books.length);
  console.log(books);

  return (
    <main className="bg-white py-16 min-h-[clac(100vh-400px)]">
      <Helmet>
        <title>Book Categories | {category} | BookNest</title>
      </Helmet>
      <div className="w-10/12 mx-auto ">
        <div className="text-center">
          <h3 className="font-bold text-3xl">{`Total ${quantity} books available of ${category} Category`}</h3>
        </div>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-12">
          {books.map((book) => (
            <BookCategoriesCard book={book} key={book._id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default BookCategories;
