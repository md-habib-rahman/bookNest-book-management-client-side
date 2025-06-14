import React from "react";
import ButtonSubmit from "./ButtonSubmit";
import ButtonsPrimary from "./ButtonsPrimary";

const Modal = ({ dbUserInfo, setShowModal, book }) => {
  const handleSubmit = () => {};
  return (
    <dialog open className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Borrow "{book.name}"</h3>
        <form
          onSubmit={(e) => {
            () => handleSubmit();
            e.preventDefault();
            setShowModal(false);
          }}
          className="space-y-3"
        >
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
            required
			readOnly
          />
          <input type="date" className="input input-bordered w-full" required />
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
