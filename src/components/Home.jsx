import React, { use, useEffect, useState } from "react";

import Banner from "./Banner";
import Categories from "./Categories";
import BookCoverTicker from "./BookCoverTicker";
import axios from "axios";
import { Helmet } from "react-helmet";
import LibraryInfoSection from "./LibraryInfoSection";
import useAxiosInstance from "../api/useAxiosInstance";
import Loader from "./Loader";
import Testimonials from "./Testimonials";
import Stats from "./Stats";
import FeaturedBooks from "./FeaturedBooks";
// const serverUrl = "http://localhost:3000";
// const serverUrl = "https://booknest-lime.vercel.app";

// const booksPromise = axios(`${serverUrl}/books`);

const Home = () => {
  const axiosInstance = useAxiosInstance();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axiosInstance
      .get("/books")
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* <Helmet>
        <title>Home | BookNest</title>
      </Helmet> */}
      <Banner />
      <Categories />
      <LibraryInfoSection />
      <FeaturedBooks />
      <BookCoverTicker books={books} />
      <Stats />
      <Testimonials />
    </>
  );
};

export default Home;
