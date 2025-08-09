import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero bg-base-200 py-12">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8">
          <img
            src="https://i.ibb.co/DL6ZxKP/bookshelf.jpg"
            alt="Bookshelf"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-bold text-primary">About BookNest</h1>
            <p className="py-6 text-lg text-base-content">
              BookNest is your modern, user-friendly platform to manage,
              explore, and share books. Our mission is to connect readers with
              their next great read while giving book lovers a space to organize
              their collections with ease.
            </p>
            <button className="btn btn-primary">Explore Books</button>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card bg-base-200 shadow-xl p-6">
            <h2 className="card-title text-secondary">Our Mission</h2>
            <p className="mt-4 text-base-content">
              To make book management and discovery effortless for everyone,
              whether you’re a casual reader or a passionate collector.
            </p>
          </div>
          <div className="card bg-base-200 shadow-xl p-6">
            <h2 className="card-title text-secondary">Our Vision</h2>
            <p className="mt-4 text-base-content">
              A world where every reader finds the right book at the right time,
              and every author’s voice is heard.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-base-200 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Habibur Rahman",
                role: "Founder & Lead Developer",
                img: "https://i.ibb.co/0JmppjZ/user1.jpg",
              },
              {
                name: "Jane Doe",
                role: "UI/UX Designer",
                img: "https://i.ibb.co/9trn2HJ/user2.jpg",
              },
              {
                name: "John Smith",
                role: "Backend Engineer",
                img: "https://i.ibb.co/3mB1d4P/user3.jpg",
              },
            ].map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-full w-32 h-32 object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="text-sm text-base-content/70">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Join the BookNest Community
          </h2>
          <p className="text-lg text-base-content mb-6">
            Be part of a growing family of book lovers. Discover, manage, and
            share your favorite books with the world.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
