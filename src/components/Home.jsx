import React, { use } from "react";

import Banner from "./Banner";
import Categories from "./Categories";
import BookCoverTicker from "./BookCoverTicker";
import axios from "axios";
import { Helmet } from "react-helmet";
const serverUrl = "http://localhost:3000";

const booksPromise = axios(`${serverUrl}/books`);

const Home = () => {
  const { data } = use(booksPromise);

  return (
    <>
      {/* <Helmet>
        <title>Home | BookNest</title>
      </Helmet> */}
      <Banner />
      <Categories />
      <BookCoverTicker books={data} />
    </>
  );
};

export default Home;
