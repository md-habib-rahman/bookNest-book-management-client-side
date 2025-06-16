import React, { use } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../AuthProvider/AuthProvider";
import ButtonSubmit from "../components/ButtonSubmit";

const bookCategories = [
  "Novel",
  "Thriller",
  "History",
  "Drama",
  "Engineering",
  "Text-Books",
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

  const onSubmit = (d) => {
    const { _id, ...UpdatedBook } = d;
    // console.log(UpdatedBook);
    axios
      .patch(`${serverUrl}/update-book/${book._id}`, UpdatedBook)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Book updated successfully!");
          navigate("/all-books");
        }
      })
      .catch(() => toast.error("Error updating book."));
  };

  return (
    <section className="  py-12 px-4 bg-base-300">
      <h2 className="text-3xl font-bold text-center text-primary mb-8">
        Update Book "
        <span className="border-b-2 border-amber-600 pb-1 text-amber-600">
          {book.name}
        </span>
        "
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-100 p-8 rounded-lg shadow-lg space-y-5 w-10/12 lg:w-8/12 mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">Title</label>
            <input
              {...register("name", { required: true })}
              className="input focus:outline-none  w-full"
            />
          </div>
          <div>
            <label className="label">Author Name</label>
            <input
              {...register("authorName", { required: true })}
              className="input focus:outline-none w-full"
            />
          </div>

          <div>
            <label className="label">Quantity</label>
            <input
              type="number"
              {...register("quantity", { required: true })}
              className="input focus:outline-none w-full"
            />
          </div>
          <div>
            <label className="label">Rating (1-5)</label>
            <input
              type="number"
              {...register("rating", { required: true })}
              className="input focus:outline-none w-full"
            />
          </div>

          <div>
            <label className="label">Category</label>
            <select
              {...register("category", { required: true })}
              className="select focus:outline-none w-full"
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
              type="url"
              {...register("image", { required: true })}
              className="input focus:outline-none w-full"
            />
          </div>
        </div>

        <div>
          <label className="label">Short Description</label>
          <textarea
            {...register("shortDescription")}
            className="textarea focus:outline-none  w-full"
          ></textarea>
        </div>

        <div>
          <label className="label">Book Content</label>
          <textarea
            {...register("bookContent")}
            className="textarea focus:outline-none w-full h-40"
          ></textarea>
        </div>
        <div className="text-right">
          <ButtonSubmit text={"Update Book"} addClass={"w-sm"} />
        </div>
      </form>
    </section>
  );
};

export default UpdateBook;
