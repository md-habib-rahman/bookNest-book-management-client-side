import React from "react";
import TableRow from "./TableRow";

const AllBookTable = ({ books }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        
        <thead>
          <tr className="text-md">
            <th>#</th>
            <th>Book Details</th>
            <th>
              Author
              <br />
              Category
            </th>
            <th>Rating</th>
            <th>Actioin</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <TableRow book={book} key={book._id} index={index}></TableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBookTable;
