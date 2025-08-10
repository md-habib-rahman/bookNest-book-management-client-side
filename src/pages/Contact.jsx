import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import "aos/dist/aos.css";
import L from "leaflet";
import ButtonsSecondary from "../components/ButtonsSecondary";
import ButtonSubmit from "../components/ButtonSubmit";
import { BsSend } from "react-icons/bs";
import ButtonsPrimary from "../components/ButtonsPrimary";
import useAxiosInstance from "../api/useAxiosInstance";

const Contact = () => {
  const axiosInstance = useAxiosInstance();
  const position = [23.796258680496702, 90.36817876789198];
  const [message, setMessage] = useState(null);

  const markerIcon = new L.Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    iconSize: [35, 35],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    // console.log(name,email,message)

    const newMessage = { name, email, message };
    const result = await axiosInstance.post("/message", newMessage);
    if (result.data.insertedId) {
      setMessage("Message Sent Successfully!");
    } else {
      setMessage(null);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-16 px-4">
      {/* Page Title */}
      <h1
        className="text-4xl md:text-5xl text-primary font-bold text-center mb-12"
        data-aos="fade-up"
      >
        Contact Us
      </h1>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
        <div
          className="p-6 bg-base-100 rounded-2xl shadow-lg flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="0"
        >
          <FaMapMarkerAlt className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Our Location</h3>
          <p>Mirpur, Dhaka-1216, Bangladesh</p>
        </div>

        <div
          className="p-6 bg-base-100 rounded-2xl shadow-lg flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <FaEnvelope className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p>support@booknest.com</p>
        </div>

        <div
          className="p-6 bg-base-100 rounded-2xl shadow-lg flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <FaPhone className="text-secondary text-4xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p>+880 1715 983652</p>
        </div>
      </div>

      {/* Contact Form + Map */}
      <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <form
          className="bg-base-100 p-8 rounded-2xl shadow-lg"
          data-aos="fade-right"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full"
              required={true}
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full"
              rows="5"
              name="message"
              placeholder="Your message"
              required
            ></textarea>
          </div>

          <ButtonSubmit text="Submit" addClass="w-full" icon={BsSend} />
		  {message&&<p className="text-primary">{message}</p>}
        </form>

        {/* Map */}
        <div
          className="rounded-2xl overflow-hidden shadow-lg"
          data-aos="fade-left"
        >
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", minHeight: "400px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
              <Popup>
                BookNest HQ <br /> 123 BookNest Street
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
