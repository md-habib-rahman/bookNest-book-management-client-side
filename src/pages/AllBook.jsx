import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import AllBooksCards from "../components/AllBooksCards";

const AllBook = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <>
      <Helmet>
        <title>All Book | BookNest</title>
      </Helmet>
      <section className="bg-base-300 py-12">
		<div className="w-10/12 mx-auto text-center space-y-2 mb-8">
			<h2 className="font-bold text-4xl text-primary">Explore Our Complete Book Collection</h2>
			<p className="text-gray-500">Browse through a diverse library of genres, authors, and timeless stories—all in one place.</p>
		</div>
		
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 py-12">
          {books.map((book) => (
            <AllBooksCards book={book} key={book._id}></AllBooksCards>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllBook;
