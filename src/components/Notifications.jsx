import React, { useEffect, useState } from "react";
import useAxiosInstance from "../api/useAxiosInstance";

const Notifications = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  // Fetch messages from your API or DB here
  useEffect(() => {
    async function fetchMessages() {
      try {
        // Replace with your real API call
        const result = await axiosInstance.get("/messages");
        console.log(result.data);
        setMessages(result.data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMessages();
  }, []);

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">User Messages</h2>

      {loading ? (
        <p className="text-base-content">Loading messages...</p>
      ) : messages.length === 0 ? (
        <p className="text-base-content">No messages found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse border border-base-300 rounded-lg">
            <thead className="bg-base-200">
              <tr>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  Name
                </th>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  Email
                </th>
                <th className="border border-base-300 px-4 py-2 text-left text-secondary font-semibold">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map(({ _id, name, email, message }) => (
                <tr
                  key={_id}
                  className="odd:bg-base-100 even:bg-base-300 hover:bg-base-200 transition-colors"
                >
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {name}
                  </td>
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {email}
                  </td>
                  <td className="border border-base-300 px-4 py-2 text-base-content">
                    {message}
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

export default Notifications;
