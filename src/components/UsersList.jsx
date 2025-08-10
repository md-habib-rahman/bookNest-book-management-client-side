import React, { useEffect, useState } from "react";
import useAxiosInstance from "../api/useAxiosInstance";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  // Fetch users from your API or DB here
  useEffect(() => {
    async function fetchUsers() {
      try {
        // Replace this URL with your actual API endpoint
        const res = await axiosInstance.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">All Users</h2>

      {loading ? (
        <p className="text-base-content">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-base-content">No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-base-300 rounded-lg">
            <thead className="bg-base-200">
              <tr>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  ID
                </th>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  Name
                </th>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  Email
                </th>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, name, email, role }, index) => (
                <tr
                  key={_id}
                  className="odd:bg-base-100 even:bg-base-300 hover:bg-base-200 transition-colors"
                >
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {index + 1}
                  </td>
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {name}
                  </td>
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {email}
                  </td>
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UsersList;
