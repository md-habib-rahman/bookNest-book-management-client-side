import React, { use } from "react";

import Banner from "./Banner";
import Categories from "./Categories";
import BookCoverTicker from "./BookCoverTicker";
import axios from "axios";
import { Helmet } from "react-helmet";
import LibraryInfoSection from "./LibraryInfoSection";
// const serverUrl = "http://localhost:3000";
const serverUrl = "https://booknest-lime.vercel.app";


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
      <LibraryInfoSection />
      <BookCoverTicker books={data} />
    </>
  );
};

export default Home;
