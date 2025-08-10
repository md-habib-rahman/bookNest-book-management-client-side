import React, { use, useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useAxiosInstance from "../api/useAxiosInstance";

const COLORS = [
  "#6f50d6", // primary purple
  "#4ac1a1", // secondary teal
  "#f29e4c", // accent orange
  "#bfbfe6", // base-300 lavender
  "#2e2e3a", // base-content dark gray
];

const DashboardChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosInstance = useAxiosInstance();

  // Fetch books data grouped by category
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axiosInstance.get("/books/category-count");

        setData(res.data);
      } catch (error) {
        console.error("Failed to fetch books data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-base-content">Loading chart...</p>;
  if (!data.length)
    return <p className="text-base-content">No book data available.</p>;

  return (
    <div className="bg-base-100 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-6">
        Books by Category
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill={COLORS[0]}
            label={({ name, percent }) =>
              `${name} ${(percent * 100).toFixed(0)}%`
            }
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => [value, "Books"]}
            contentStyle={{ backgroundColor: "#f5f5fa", borderRadius: "6px" }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DashboardChart;
