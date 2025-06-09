import React from "react";
import logo from "../assets/bookNestLogo.png";
import { Link, Links, NavLink } from "react-router";
import ButtonsPrimary from "./ButtonsPrimary";
import ButtonsSecondary from "./ButtonsSecondary";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
           className={({ isActive }) =>
            isActive
              ? "border-b-2 pb-1 border-primary text-primary font-semibold transition-all duration-200 ease-in-out"
              : "hover:text-primary font-semibold transition-all duration-200 ease-in-out"
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
      </li><li>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
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
          <ul className="flex gap-4 px-1 ">{links}</ul>
        </div>
        <div className="navbar-end space-x-2   ">
          <ButtonsPrimary text={"Login"} dest={"/login"} />
          <ButtonsSecondary text={"Register"} dest={"/register"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
