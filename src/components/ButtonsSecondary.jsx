import { Link } from "react-router";

const ButtonsSecondary = ({ text, dest, addClass, icon: Icon }) => (
  <Link
    to={dest}
    className={`relative group inline-block px-6 py-2 m-1 border-2 font-medium border-primary bg-primary text-white text-center rounded-xl overflow-hidden ${addClass}`}
  >
    <span className="absolute w-100 h-0 rotate-45 -translate-x-40 bg-white top-1/2 transition-all duration-300 group-hover:h-96 group-hover:-translate-y-32 ease-in-out z-0"></span>
    <span className="relative z-10 transition duration-300 group-hover:text-primary flex gap-2 items-center">
      <span className="hidden sm:inline whitespace-nowrap">{text}</span>
      {Icon && <Icon className="text-lg shrink-0" />}
    </span>
  </Link>
);

export default ButtonsSecondary;
