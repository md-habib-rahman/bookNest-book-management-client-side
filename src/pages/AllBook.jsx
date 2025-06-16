import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import AllBooksCards from "../components/AllBooksCards";

import AllBookTable from "../components/AllBookTable";

const AllBook = () => {
  const books = useLoaderData();
  console.log(books);
  const [viewState, SetViewState] = useState("card");

  const handleViewChange = (e) => {
    if (e.target.value === "card") {
      SetViewState("card");
    } else {
      SetViewState("table");
    }
  };
  return (
    <>
      {/* <Helmet>
        <title>All Book | BookNest</title>
      </Helmet> */}
      <section className="bg-base-300 py-12">
        <div className="w-10/12 mx-auto text-center space-y-2 mb-8">
          <h2 className="font-bold text-4xl text-primary">
            Explore Our Complete Book Collection
          </h2>
          <p className="text-gray-500">
            Browse through a diverse library of genres, authors, and timeless
            stories—all in one place.
          </p>
        </div>
        <div className="w-10/12 mx-auto">
          <select
            defaultValue="Choose View"
            className="select focus:outline-none"
            onChange={handleViewChange}
          >
            <option disabled={true}>Choose View</option>
            <option value={"card"}>Card View</option>
            <option value={"table"}>Table View</option>
          </select>
        </div>

        <div
          className={`w-10/12 mx-auto py-12 ${
            viewState === "card" &&
            "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
          }`}
        >
          {viewState === "card" ? (
            books.map((book) => (
              <AllBooksCards book={book} key={book._id}></AllBooksCards>
            ))
          ) : (
            <AllBookTable books={books}></AllBookTable>
          )}
        </div>
      </section>
    </>
  );
};

export default AllBook;
