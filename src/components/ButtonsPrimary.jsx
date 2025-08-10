import { Link } from "react-router";

const ButtonsPrimary = ({ text, dest, addClass = "", icon: Icon }) => (
  <Link
    to={dest}
    className={`relative group inline-block px-6 py-2 m-1 border-2 font-medium border-primary text-primary bg-transparent text-center rounded-xl overflow-hidden ${addClass}`}
  >
    {/* Animated background fill */}
    <span className="absolute w-100 h-0 rotate-45 -translate-x-40 bg-primary top-1/2 transition-all duration-300 group-hover:h-96 group-hover:-translate-y-32 ease-in-out z-0"></span>

    {/* Text + Icon */}
    <span className="relative z-10 transition duration-300 group-hover:text-white flex gap-2 items-center">
      <span
        className={`${
          Icon && "hidden"
        } sm:inline whitespace-nowrap text-center`}
      >
        {text}
      </span>
      {Icon && <Icon className="text-lg shrink-0" />}
    </span>
  </Link>
);

export default ButtonsPrimary;
