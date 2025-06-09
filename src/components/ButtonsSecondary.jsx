import { Link } from "react-router";

const ButtonsSecondary = ({ text, dest }) => (
  <Link
    to={dest}
    className="rounded-xl px-4 py-1 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary bg-primary text-white"
  >
    <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-white top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
    <span className="relative text-white transition duration-300 group-hover:text-primary ease">
      {text}
    </span>
  </Link>
);

export default ButtonsSecondary;
