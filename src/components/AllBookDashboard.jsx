import React, { useEffect, useState } from "react";
import useAxiosInstance from "../api/useAxiosInstance";
import { Link } from "react-router";

const AllBookDashboard = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    async function fetchBooks() {
      try {
        // Replace with your real API endpoint
        const res = await axiosInstance.get("/books");
        setBooks(res.data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, []);

  if (loading) return <p className="text-base-content">Loading books...</p>;
  if (books.length === 0)
    return <p className="text-base-content">No books found.</p>;

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md overflow-x-auto">
      <h2 className="text-2xl font-bold text-primary mb-6">All Books</h2>
      <table className="min-w-full table-auto border-collapse border border-base-300 rounded-lg">
        <thead className="bg-base-200">
          <tr>
            <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
              Name
            </th>
            <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
              Author
            </th>
            <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
              Category
            </th>
            <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
              Quantity
            </th>
            <th className="border border-base-300 px-4 py-2 text-center text-secondary font-semibold">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map(({ _id, name, authorName, category, quantity }) => (
            <tr
              key={_id}
              className="odd:bg-base-100 even:bg-base-300 hover:bg-base-200 transition-colors"
            >
              <td className="border border-base-300 px-4 py-2 text-base-content">
                {name}
              </td>
              <td className="border border-base-300 px-4 py-2 text-base-content">
                {authorName}
              </td>
              <td className="border border-base-300 px-4 py-2 text-base-content">
                {category}
              </td>
              <td className="border border-base-300 px-4 py-2 text-base-content">
                {quantity}
              </td>
              <td className="border border-base-300 px-4 py-2 text-center">
                <Link
                  to={`/update-book/${_id}`}
                  className="bg-secondary text-white px-3 py-1 rounded hover:bg-secondary/90 transition"
                >
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookDashboard;
