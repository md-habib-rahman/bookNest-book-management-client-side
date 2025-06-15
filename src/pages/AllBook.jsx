import React from "react";
import { useLoaderData } from "react-router";

const AllBook = () => {
  const books = useLoaderData();
  console.log(books);
  return <div>AllBook</div>;
};

export default AllBook;
