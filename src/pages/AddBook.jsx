import React, { use } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

import { AuthContext } from "../AuthProvider/AuthProvider";
import ButtonSubmit from "../components/ButtonSubmit";
import { Helmet } from "react-helmet";

const AddBook = () => {
  const { register, handleSubmit, reset } = useForm();
  const { serverUrl } = use(AuthContext);

  const onSubmit = (d) => {
    d.rating = parseInt(d.rating);
    d.quantity = parseInt(d.quantity);
    console.log(d);

    axios
      .post(`${serverUrl}/add-book`, d)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Book added successfully!");
          reset();
        }
      })
      .catch((err) => {
        toast.error("Failed to add book: " + err.message);
      });
  };

  return (
    <section className="min-h-[calc(100vh-400px)] bg-base-300 flex justify-center items-center p-4">
      <Helmet>
        <title>Add Book | BookNest</title>
      </Helmet>
      <div className=" w-full md:w-10/12 p-6 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">
          Add a New Book
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              {...register("image")}
              type="url"
              placeholder="Book Cover Image URL"
              className="input input-bordered w-full"
              required
            />
            <input
              {...register("name")}
              type="text"
              placeholder="Title of the Book"
              className="input input-bordered w-full"
              required
            />
            <input
              {...register("authorName")}
              type="text"
              placeholder="Author Name"
              className="input input-bordered w-full"
              required
            />
            <input
              {...register("quantity")}
              type="number"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              required
            />
            <select
              {...register("category")}
              className="select select-bordered w-full"
              required
            >
              <option value="">Select Category</option>
              <option value="Novel">Novel</option>
              <option value="Mystery">Mystery</option>
              <option value="History">History</option>
              <option value="Engineering">Engineering</option>
              <option value="Drama">Drama</option>
              <option value="Science-Fiction">Science-Fiction</option>
              <option value="Biography">Biography</option>
              <option value="Travel">Travel</option>
              <option value="Self Help">Self Help</option>
            </select>
            <input
              {...register("rating")}
              type="number"
              placeholder="Rating (1-5)"
              step="1"
              min="1"
              max="5"
              className="input input-bordered w-full"
              required
            />
            <textarea
              {...register("shortDescription")}
              placeholder="Short Description"
              className="textarea textarea-bordered w-full"
              required
            ></textarea>

            <textarea
              {...register("bookContent")}
              placeholder="Additional Information (Book Content)"
              className="textarea textarea-bordered w-full"
              rows={3}
            ></textarea>
          </div>
          <div className="text-right mt-4">
            <ButtonSubmit text={"Add Book"} addClass={"w-sm"} />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
