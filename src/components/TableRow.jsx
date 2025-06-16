import { Rating } from "@smastrom/react-rating";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";

const TableRow = ({ book, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className=" h-18 w-12">
              <img src={book.image} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold">{book.name}</div>
          </div>
        </div>
      </td>
      <td>
        {book.authorName}
        <br />
        <span className="badge badge-ghost badge-sm">
          <BiCategory />
          {book.category}
        </span>
      </td>
      <td>
        <div className="flex gap-2 items-center">
          <Rating style={{ maxWidth: 70 }} value={book.rating} readOnly />
          <span className="text-sm text-gray-700 font-semibold">
            {book.rating}
          </span>
        </div>
      </td>
      <th>
        <Link
          to={`/update-book/${book._id}`}
          className="text-gray-500 hover:text-primary transition-all"
        >
          <FiEdit size={24} />
        </Link>
      </th>
    </tr>
  );
};

export default TableRow;
