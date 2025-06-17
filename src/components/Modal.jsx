import React, { use } from "react";
import ButtonSubmit from "./ButtonSubmit";
import ButtonsPrimary from "./ButtonsPrimary";
import { MdCleaningServices } from "react-icons/md";
import { toast } from "react-toastify";
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Modal = ({ dbUserInfo, setShowModal, book, setBook }) => {
  console.log(dbUserInfo);
  const { serverUrl } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const returnDate = new Date(form.date.value);
    const now = new Date();
    const borrowedOn = now.toLocaleString();
    const bookId = book?._id;
    if (returnDate < now) {
      toast.warning("You Can not set a Return Date Earlier than today!");
      return;
    }

    const newEntry = {
      email,
      bookId,
      returnDate: returnDate.toISOString().split("T")[0],
      borrowedOn,
    };

    axios
      .post(`${serverUrl}/book-borrow`, newEntry)
      .then((res) => {
        if (res.data) {
          axios
            .patch(`${serverUrl}/update-quantity/${bookId}`, { q: -1 })
            .then(() => {
              // console.log("Quantity updated");
              axios.get(`${serverUrl}/book-details/${bookId}`).then((res) => {
                // console.log("Updated Book:", res.data);
                setBook(res.data);
                toast.success("Book borrowed successfully!");
                setShowModal(false);
              });
            });
        }
      })
      .catch((err) => {
        toast.error(`There was an error: ${err.message}`);
      });

    // console.log(newEntry);
  };
  return (
    <dialog open className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Borrow "{book.name}"</h3>
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-3">
          <input
            type="text"
            placeholder="Your Full Name"
            defaultValue={dbUserInfo?.name}
            className="input input-bordered w-full"
            required
            readOnly
          />
          <input
            type="email"
            placeholder="Your Email"
            defaultValue={dbUserInfo?.email}
            className="input input-bordered w-full"
            name="email"
            required
            readOnly
          />
          <input
            name="date"
            type="date"
            className="input input-bordered w-full"
            required
          />
          <div className="modal-action  flex items-center">
            <ButtonSubmit text={"Submit"} />
            {/* <button type="submit" className="btn btn-primary">
              Submit
            </button> */}

            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="btn btn-outline rounded-xl btn-primary border-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
