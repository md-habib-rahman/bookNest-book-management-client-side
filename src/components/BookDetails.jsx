import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import { BiCategory } from "react-icons/bi";
import Loader from "./Loader";
import Modal from "./Modal";

const BookDetails = () => {
  const { serverUrl, user, loading } = use(AuthContext);
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [dbUserInfo, setDbUserInfo] = useState(null);

  useEffect(() => {
    // console.log("Loading:", loading, "User:", user);
    if (!loading && user?.email) {
      axios.get(`${serverUrl}/users/${user?.email}`).then((res) => {
        // console.log("Fetched user info:", res.data);
        setDbUserInfo(res.data);
      });
    }
  }, [user, serverUrl, loading]);

  useEffect(() => {
    axios(`${serverUrl}/book-details/${id}`).then((res) => {
      setBook(res.data);
    });
  }, [id, serverUrl]);
  console.log(book);

  if (!book) {
    return <Loader />;
  }

  return (
    <main className="min-h-[calc(100vh-400px)] bg-base-300 ">
      <section className="w-10/12 mx-auto py-12 ">
        <div className="flex gap-4  flex-col md:flex-row  justify-center ">
          <div className="p-8 flex flex-col gap-2">
            <img src={book?.image} alt="" className="w-60" />
            <p className="w-60">{book?.bookContent}</p>
          </div>

          <div className="lg:m-8 p-8 w-full lg:w-2/5 rounded-xl border border-gray-400 flex flex-col gap-2 justify-center relative overflow-hidden">
            <h4 className="font-bold text-2xl text-neutral">{book?.name}</h4>
            <p className="text-gray-600">By {book?.authorName}</p>
            <div className="flex gap-2 text-gray-600">
              <Rating style={{ maxWidth: 80 }} value={book?.rating} readOnly />
              <p>{book?.rating}</p>
            </div>
            <div className="badge badge-success">
              <BiCategory />
              {book?.category}
            </div>
            <p className="mb-4 md:mb-0">{book?.shortDescription}</p>
            <div className="absolute bottom-0 flex w-full border-t bg-base-200 border-gray-400 left-0 items-center">
              <p className="w-1/2 text-center text-white">
                {book?.quantity} pcs available
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="btn btn-primary rounded-none w-1/2"
              >
                Borrow Now
              </button>
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <Modal dbUserInfo={dbUserInfo} setShowModal={setShowModal} book={book} />
      )}
    </main>
  );
};

export default BookDetails;
