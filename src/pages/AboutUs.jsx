import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaBookOpen,
  FaHandshake,
  FaStore,
  FaUsers,
  FaBook,
  FaGlobeAmericas,
  FaSmile,
} from "react-icons/fa";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import ButtonsSecondary from "../components/ButtonsSecondary";
import CountUp from "react-countup";
import Testimonials from "../components/Testimonials";

const missionData = [
  {
    icon: <FaBookOpen className="text-primary text-4xl" />,
    title: "Best Bookstore",
    description:
      "We pride ourselves on curating a diverse collection of books for readers of all ages and interests — from timeless classics to the latest bestsellers.",
  },
  {
    icon: <FaHandshake className="text-primary text-4xl" />,
    title: "Trusted Seller",
    description:
      "With years of experience in the book industry, we have earned the trust of thousands of customers through reliable service and quality selections.",
  },
  {
    icon: <FaStore className="text-primary text-4xl" />,
    title: "Expanding Stores",
    description:
      "Our mission is to make books accessible to everyone. We are continually opening new locations and enhancing our online platform to reach more readers.",
  },
];
const stats = [
  {
    icon: <FaUsers className="text-primary text-4xl" />,
    value: 50000,
    label: "Happy Readers",
  },
  {
    icon: <FaBook className="text-primary text-4xl" />,
    value: 12000,
    label: "Books Available",
  },
  {
    icon: <FaGlobeAmericas className="text-primary text-4xl" />,
    value: 25,
    label: "Countries Served",
  },
  {
    icon: <FaSmile className="text-primary text-4xl" />,
    value: 15,
    label: "Years of Service",
  },
];

const AboutUsHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div>
      <section className="py-16 bg-base-100">
        <div className="w-full md:w-10/12 lg:max-w-8/12 mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Images */}
          <div className="flex gap-6" data-aos="fade-right">
            {/* First Image */}
            <div className="relative">
              <img
                src={about1}
                alt="Books"
                className="w-48 h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-8 left-4 bg-primary text-white px-4 py-8 rounded-lg shadow-lg text-center ">
                <span className="text-4xl font-bold">50+</span>
                <p className="text-sm leading-tight">Years of Experience</p>
              </div>
            </div>

            {/* Second Image */}
            <img
              src={about2}
              alt="Bookshelf"
              className="w-48 h-64 object-cover rounded-lg shadow-lg mt-8"
            />
          </div>

          {/* Right Content */}
          <div data-aos="fade-left">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              About BookNest
            </h2>
            <p className="mb-6 text-gray-600">
              Founded with a love for books and a vision to create a hub for
              passionate readers, BookNest is more than just a bookstore — it’s
              a community. We carefully curate our shelves with titles that
              inspire, educate, and entertain, catering to readers of all tastes
              and ages.
            </p>

            {/* Checklist */}
            <ul className="space-y-2 mb-6">
              {[
                "Comics & Graphics",
                "Biography",
                "Literary Collections",
                "Children Fiction",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <FaCheckCircle className="text-primary" />
                  {item}
                </li>
              ))}
            </ul>

            <ButtonsSecondary text="Contact Us"></ButtonsSecondary>
          </div>
        </div>
      </section>
      <section className="py-16 bg-base-100">
        <div className="w-full md:w-10/12 lg:max-w-8/12 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Mission
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-12">
            At BookNest, we believe in the power of stories to inspire, educate,
            and connect people. Our mission is to create a community where
            readers can discover, share, and cherish books that enrich their
            lives.
          </p>

          {/* Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionData.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="bg-base-300 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="text-primary font-medium flex items-center justify-center gap-2 hover:underline"
                >
                  Learn More <span>&raquo;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                className="transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-8 border-2 border-dashed border-primary rounded-lg flex items-center justify-center bg-base-200">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-primary">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    enableScrollSpy={true}
                    scrollSpyOnce={false}
                  />
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default AboutUsHero;
