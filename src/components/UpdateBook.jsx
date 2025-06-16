import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";

const bookCategories = [
  "Novel",
  "Thriller",
  "History",
  "Drama",
  "Sci-Fi",
  "Travel",
  "Science-Fiction",
  "Fantasy",
  "Biography",
  "Mystery",
  "Poetry",
  "Self-Help",
];

const UpdateBook = () => {
  const book = useLoaderData();
  const navigate = useNavigate();
  const { serverUrl } = use(AuthContext);

  const { register, handleSubmit } = useForm({
    defaultValues: book,
  });

  const onSubmit = (data) => {
    axios
      .patch(`${serverUrl}/update-book/${book._id}`, data)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Book updated successfully!");
          navigate("/all-books");
        }
      })
      .catch(() => toast.error("Error updating book."));
  };

  return (
    <section className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Update Book
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 p-8 rounded-lg shadow space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">Title</label>
            <input
              {...register("name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Author Name</label>
            <input
              {...register("authorName", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              {...register("quantity", { required: true, min: 1 })}
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="label">Rating (1-5)</label>
            <input
              type="number"
              {...register("rating", { required: true, min: 1, max: 5 })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="label">Category</label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option disabled value="">
                Select a category
              </option>
              {bookCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="label">Image URL</label>
            <input
              {...register("image", { required: true })}
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div>
          <label className="label">Short Description</label>
          <textarea
            {...register("shortDescription")}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>

        <div>
          <label className="label">Book Content</label>
          <textarea
            {...register("bookContent")}
            className="textarea textarea-bordered w-full h-40"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-full">
          Update Book
        </button>
      </form>
    </section>
  );
};

export default UpdateBook;
