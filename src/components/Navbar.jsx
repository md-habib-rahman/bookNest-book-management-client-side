import React, { use, useEffect, useState } from "react";
import logo from "../assets/bookNestLogo.png";
import { Link, NavLink } from "react-router";
import ButtonsPrimary from "./ButtonsPrimary";
import ButtonsSecondary from "./ButtonsSecondary";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { IoMenuSharp } from "react-icons/io5";
import { MdLogin, MdLogout } from "react-icons/md";
import axios from "axios";

const Navbar = () => {
  const { user, logOut, serverUrl, loading } = use(AuthContext);
  const [dbUserInfo, setDbUserInfo] = useState(null);

  useEffect(() => {
    console.log("Loading:", loading, "User:", user);
    if (!loading && user?.email) {
      axios.get(`${serverUrl}/users/${user?.email}`).then((res) => {
        console.log("Fetched user info:", res.data);
        setDbUserInfo(res.data);
      });
    }
  }, [user, serverUrl, loading]);

  //   if (user) {
  //     const result = axios.get(`${serverUrl}/users/${user.email}`).then((res) => {
  //       setDbUserInfo(res.data);
  //     });
  //   }
  console.log(dbUserInfo?.PhotoUrl, dbUserInfo?.name);

  const handleLogOut = () => {
    Swal.fire({
      title: "Want to Logout?",

      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            toast("Successfully logged out!", {
              position: "top-right",
              autoClose: 5000,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          })
          .catch((err) => {
            toast.error(`${err.message}`, {
              position: "top-right",
              autoClose: 5000,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 border-primary text-primary font-semibold transition-all duration-200 ease-in-out"
              : "hover:text-primary transition-all duration-200 ease-in-out"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 border-primary text-primary font-semibold transition-all duration-200 ease-in-out"
              : "hover:text-primary  transition-all duration-200 ease-in-out"
          }
        >
          All Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 border-primary text-primary font-semibold transition-all duration-200 ease-in-out"
              : "hover:text-primary  transition-all duration-200 ease-in-out"
          }
        >
          Add Book
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/all-books"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 border-primary text-primary font-semibold transition-all duration-200 ease-in-out"
              : "hover:text-primary  transition-all duration-200 ease-in-out"
          }
        >
          Borrowed Books
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
      <div className=" navbar lg:max-w-10/12 mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoMenuSharp size={35} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img src={logo} alt="book nest logo" className=" md:w-50" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="flex gap-6 px-1 ">{links}</ul>
        </div>
        <div className="navbar-end space-x-2   ">
          {user ? (
            <div className="relative w-fit group">
              <div className="w-9 h-9 rounded-full border-2 border-primary p-[2px] cursor-pointer">
                <img
                  src={
                    dbUserInfo?.PhotoUrl ||
                    "https://i.ibb.co/jZf74p9g/User-avatar-svg.png"
                  }
                  alt="User Avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div
                className=" absolute right-9 top-0 w-48 bg-base-100 rounded shadow-lg 
        opacity-0 scale-95 invisible pointer-events-none 
        group-hover:opacity-100 group-hover:scale-100 group-hover:visible group-hover:pointer-events-auto 
        transition-all duration-200 z-50"
              >
                <div className="p-4">
                  <p className="text-sm font-semibold border-b pb-2 mb-2 border-gray-300">
                    {dbUserInfo?.name || "User"}
                  </p>
                  <button
                    onClick={handleLogOut}
                    className="btn btn-sm btn-error w-full hover:text-white"
                  >
                    Logout
                    <MdLogout />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <>
              <ButtonsPrimary text="Login" dest="/login" icon={MdLogin} />
              <ButtonsSecondary text="Register" dest="/register" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
