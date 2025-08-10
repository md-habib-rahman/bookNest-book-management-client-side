import React from "react";

const ButtonSubmit = ({ text, addClass, icon: Icon }) => {
  return (
    <button
      type="submit"
      
      className={`relative group inline-block px-4 py-2 m-1 border-2 font-medium border-primary bg-primary text-white text-center rounded-xl overflow-hidden ${addClass}`}
    >
      <span className="absolute w-100 h-0 rotate-45 -translate-x-40 bg-white top-1/2 transition-all duration-300 group-hover:h-96 group-hover:-translate-y-48 group-hover:-translate-x-48 ease-in-out z-0"></span>
      <span className="relative z-10 transition duration-300 group-hover:text-primary flex gap-4 items-center justify-center">
        {Icon && <Icon className="text-lg shrink-0" />}
        {text}
      </span>
    </button>
  );
};

export default ButtonSubmit;
