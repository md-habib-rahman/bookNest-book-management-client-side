import React, { use } from "react";

import Banner from "./Banner";
import Categories from "./Categories";
import BookCoverTicker from "./BookCoverTicker";
import axios from "axios";
const serverUrl = "http://localhost:3000";

const booksPromise = axios(`${serverUrl}/books`);

const Home = () => {
  const { data } = use(booksPromise);

  return (
    <>
      <Banner />
      <Categories />
      <BookCoverTicker books={data} />
    </>
  );
};

export default Home;
