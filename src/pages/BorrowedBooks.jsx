import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../components/Loader";
import axios from "axios";
import ButtonSubmit from "../components/ButtonSubmit";
import ButtonsSecondary from "../components/ButtonsSecondary";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const BorrowedBooks = () => {
  const { user, serverUrl } = use(AuthContext);
  const [books, setBooks] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBorrowedBooks = async () => {
      if (!user?.email) return; // avoid calling API with undefined email
      setLoading(true);
      const res = await axios(
        `${serverUrl}/borrowed-books-lists/${user.email}`
      );
      //   console.log(res.data);
      setBooks(res.data);
      setLoading(false);
    };
    fetchBorrowedBooks();
  }, [user, serverUrl]);

  console.log(books);
  if (loading) return <Loader></Loader>;
  if (!user) {
    return <Loader></Loader>;
  }
  // const {
  //   returnDate,
  //   borrowedOn,
  //   bookDetails: { name, image, authorName, shortDescription, rating },
  // } = books;
  const hadleReturn = (id, bookId) => {
    Swal.fire({
      title: "Want to return the book?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${serverUrl}/book-return/${id}`).then((res) => {
          if (res.status === 200) {
            axios
              .patch(`${serverUrl}/update-quantity/${bookId}`, { q: 1 })
              .then((res) => {
                if (res.status === 200) {
                  toast.success("Book Returned!");
                  setBooks((prv) => prv.filter((book) => book._id !== id));
                }
              });
          }
        });
      }
    });
  };
  return (
    <div className="bg-base-300 px-2 py-12 min-h-[calc(100vh-350px)]">
      <h2 className="text-center text-4xl font-bold text-primary">
        Borrowed Book Lists
      </h2>
      <div className="overflow-x-auto w-9/12 mx-auto">
        {books.length===0&&<p className="text-center text-amber-600 mt-2 mb-10">No borrowed books found</p>}
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book</th>
              <th>
                Author
                <br />
                Category
              </th>
              <th>Borrowed On</th>
              <th>Returned Date</th>
              <th>Action</th>
            </tr>
          </thead>
		  
          <tbody>
			
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className=" h-18 w-12">
                        <img
                          src={book.bookDetails?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{book.bookDetails.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {book.bookDetails.authorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {book.bookDetails.category}
                  </span>
                </td>
                <td>{book.borrowedOn}</td>
                <td>{book.returnDate}</td>
                <td>
                  <button
                    onClick={() => hadleReturn(book._id, book.bookDetails._id)}
                  >
                    <ButtonsSecondary text={"Return"} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BorrowedBooks;
