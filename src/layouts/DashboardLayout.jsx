import { useState } from "react";
import { Outlet, NavLink, Link } from "react-router";
import {
  FiHome,
  FiSettings,
  FiUser,
  FiBell,
  FiMenu,
  FiX,
} from "react-icons/fi";
import logo from "../assets/bookNestLogoInverse.png";

const Dashboard = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { to: "/dashboard", label: "Home", icon: <FiHome size={20} /> },
    { to: "/dashboard/profile", label: "Profile", icon: <FiUser size={20} /> },
    {
      to: "/dashboard/notifications",
      label: "Notifications",
      icon: <FiBell size={20} />,
    },
    {
      to: "/dashboard/settings",
      label: "Settings",
      icon: <FiSettings size={20} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content font-sans">
      {/* Mobile Navbar with menu button */}
      <header className="md:hidden flex items-center justify-between bg-primary text-base-100 px-4 py-3 fixed top-0 left-0 right-0 z-30">
        <div className="text-xl font-bold tracking-wide">MyDashboard</div>
        <button
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          className="focus:outline-none"
        >
          <FiMenu size={28} />
        </button>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          drawerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setDrawerOpen(false)}
      />

      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-50 w-64 bg-primary text-base-100
          transform transition-transform duration-300
          ${drawerOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex md:flex-col
        `}
      >
        <Link to="/">
          <img src={logo} alt="book nest logo" className="w-50 m-2" />
        </Link>
        <div className="flex items-center justify-between px-6 py-6 border-b border-base-200 md:hidden">
          <div className="text-2xl font-bold tracking-wide">MyDashboard</div>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="focus:outline-none"
          >
            <FiX size={28} />
          </button>
        </div>

        <nav className="flex flex-col flex-grow px-4 py-6 space-y-3">
          {navLinks.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setDrawerOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                 ${
                   isActive
                     ? "bg-base-200 text-primary font-semibold"
                     : "hover:bg-base-200"
                 }`
              }
            >
              {icon}
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="p-6 border-t border-base-200 text-sm text-base-content opacity-70">
          &copy; 2025 Your Company
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 md:p-8 bg-base-100 min-h-screen md:ml-64">
        {/* Top Navbar (hidden on mobile, visible on md+) */}
        <header className="hidden md:flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-primary">Dashboard</h1>
          <button
            type="button"
            className="bg-secondary text-white px-4 py-2 rounded-lg shadow hover:bg-secondary/90 transition"
          >
            New Report
          </button>
        </header>

        {/* Nested Routes Render Here */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
