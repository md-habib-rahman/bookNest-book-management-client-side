import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { BiCategory, BiSolidBookReader } from "react-icons/bi";
import { useParams } from "react-router";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader";

import Modal from "../components/Modal";
import ButtonsPrimary from "../components/ButtonsPrimary";
import ButtonsSecondary from "../components/ButtonsSecondary";

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

  if (!book) {
    return <Loader />;
  }

  return (
    <main className="min-h-screen bg-[#f2e9ff] flex items-center justify-center py-10 px-4">
      <section className="w-full max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all">
        <div className="md:w-1/2 bg-gradient-to-br from-violet-500 to-indigo-600 flex flex-col text-white items-center justify-center p-8">
          <img
            src={book.image}
            alt=""
            className="w-full max-w-xs object-cover rounded-lg shadow-lg"
          />
          <p>{book.shortDescription}</p>
        </div>

        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-primary mb-2">
              {book.name}
            </h1>
            <p className="text-gray-600 mb-3 font-medium">
              By {book.authorName}
            </p>

            <div className="flex items-center gap-2 mb-2">
              <Rating style={{ maxWidth: 100 }} value={book.rating} readOnly />
              <span className="text-sm text-gray-700 font-semibold">
                {book.rating}
              </span>
            </div>

            <div className="badge badge-success mb-4 gap-1 text-white text-sm">
              <BiCategory className="text-lg" />
              {book.category}
            </div>
            <div className="text-gray-500">
              <BiSolidBookReader size={40} />
              <p className=" leading-relaxed flex gap-2 items-center">
                {book.bookContent}
              </p>
            </div>
          </div>

          <div className="mt-6 border-t pt-4 flex items-center justify-between">
            <p className="text-sm text-violet-700 font-semibold">
              {book.quantity} pcs available
            </p>
            <button onClick={() => setShowModal(true)}>
              <ButtonsSecondary text={"Borrow Now"} />
            </button>
          </div>
        </div>
      </section>
      {showModal && (
        <Modal
          dbUserInfo={dbUserInfo}
          setShowModal={setShowModal}
          book={book}
          setBook={setBook}
        />
      )}
    </main>
  );
};

export default BookDetails;
