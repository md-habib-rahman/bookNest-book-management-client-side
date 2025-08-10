import { Link } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import logo from "../assets/bookNestLogo.png";
import ButtonsSecondary from "./ButtonsPrimary";
import ButtonsPrimary from "./ButtonsPrimary";

const Footer = () => {
  return (
    <footer className="bg-base-100 pt-10 px-8 border-t border-base-200">
      <div className="md:w-10/12 lg:w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-300 pb-5">
        <div>
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            <img src={logo} alt="" className="w-50" />
          </Link>
          <p className="mt-3 text-sm opacity-80">
            Your smart digital bookshelf. Manage, share, and explore your
            reading journey — all in one cozy place.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Connected</h3>
          <div className="flex gap-4 mb-4 text-xl">
            <a
              href="https://facebook.com"
              target="_blank"
              className="hover:text-primary relative hover:-top-1 transition-all duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              className="hover:text-primary relative hover:-top-1 transition-all duration-200"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-primary relative hover:-top-1 transition-all duration-200"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="hover:text-primary relative hover:-top-1 transition-all duration-200"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Your email"
			  required
              className=" text-black w-full max-w-xs border-primary input input-sm py-4 border-r-0 rounded-none rounded-l-md focus:outline-none"
            />
            <button
              
              class="rounded-r  py-1 pr-5 pl-1  overflow-hidden relative group cursor-pointer border font-medium border-primary text-primary text-center"
            >
              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-primary transition duration-300 group-hover:text-white ease">
                Subscribe
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="text-center my-5 text-xs opacity-80">
        &copy; {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
