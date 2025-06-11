import React from "react";
import { Link } from "react-router";

const ButtonsPrimary = ({ text, dest, icon: Icon }) => {
  return (
    <Link
      to={dest}
      className="  rounded-xl px-6 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary text-primary "
    >
      <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
      <span className="relative text-primary transition duration-300 group-hover:text-white ease flex items-center gap-2">
        <span className="hidden sm:inline whitespace-nowrap">{text}</span>
        {Icon && <Icon className="text-lg shrink-0" />}
      </span>
    </Link>
  );
};

export default ButtonsPrimary;
