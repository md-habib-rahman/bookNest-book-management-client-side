import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Miranda Lee",
    role: "Writer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "BookNest has transformed my reading habits! The vast selection and seamless user experience keep me coming back every week.",
  },
  {
    name: "Steve Henry",
    role: "Book Lover",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 3,
    review:
      "A great place to find rare and classic books. Some improvements could be made in delivery speed, but overall an amazing store.",
  },
  {
    name: "Jason Huang",
    role: "Author",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
    rating: 4,
    review:
      "Love how BookNest connects readers and authors. The recommendation system always finds something I enjoy.",
  },
];

const Testimonials = () => {
  const renderStars = (count) =>
    Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-lg ${i < count ? "text-yellow-500" : "text-gray-300"}`}
      >
        ★
      </span>
    ));

  return (
    <section className="py-16 bg-base-100 " id="testimonials">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-6 text-primary">
          People Talk About Us
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
          Hear from our community of book lovers, authors, and lifelong learners
          about their experiences with BookNest.
        </p>

        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={5000}
          className="max-w-5xl mx-auto"
        >
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-base-300 rounded-xl p-8 shadow-md flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-4xl text-primary mb-4" />
              <p className="text-gray-800 max-w-xl italic mb-4">"{t.review}"</p>
              <div className="flex mb-4">{renderStars(t.rating)}</div>
              <div className="flex flex-col items-center">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover mb-2"
                />
                <h4 className="font-semibold">{t.name}</h4>
                <span className="text-sm text-gray-500">{t.role}</span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
