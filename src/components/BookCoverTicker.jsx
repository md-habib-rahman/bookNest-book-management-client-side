import Marquee from "react-fast-marquee";
import * as motion from "motion/react-client";
import { Link } from "react-router";

const BookCoverTicker = ({ books }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-base-300 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Explore the Shelf</h2>
        <p className="text-gray-500">A scrolling showcase of our latest and most-loved reads.</p>
      </div>

      <Marquee pauseOnHover={true} speed={40}>
        <div className="flex gap-6 mr-5">
          {books.map((book, index) => (
            <Link to={`/book-details/${book?._id}`}>
              <motion.div
                key={index}
                className="relative min-w-[200px] h-72 rounded-md shadow-md overflow-hidden cursor-pointer"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-full object-cover"
                  variants={{
                    hover: { scale: 1.05 },
                    rest: { scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Dark Overlay */}
                <motion.div
                  variants={{
                    hover: { opacity: 0.6 },
                    rest: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black z-10"
                />

                <motion.div
                  variants={{
                    hover: { y: 0 },
                    rest: { y: "100%" },
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-0 left-0 w-full z-20 text-white p-3 bg-black bg-opacity-80 backdrop-blur-sm"
                >
                  <h4 className="text-sm font-semibold truncate">
                    {book.name}
                  </h4>
                  <p className="text-xs text-gray-300">{book.authorName}</p>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BookCoverTicker;
