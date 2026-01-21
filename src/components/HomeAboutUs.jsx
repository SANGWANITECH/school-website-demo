// HomeAboutUs.jsx
import { FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HomeAboutUs() {
  const [modalData, setModalData] = useState(null);

  const staff = [
    {
      img: "/director.png",
      role: "The Director",
      name: "Mr Kanyimbo",
    },
    {
      img: "/head.png",
      role: "Head Teacher",
      name: "Mr Kalinga",
    },
  ];

  const handleImageClick = (person) => {
    if (window.innerWidth < 768) {
      setModalData(person);
    }
  };

  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Icon in rounded div with zoom */}
        <div className="flex justify-center mb-4">
          <div className="bg-teal-100 rounded-full p-4 inline-block transform transition-transform duration-500 animate-zoomInOut">
            <FaSchool className="text-teal-600 text-4xl md:text-5xl" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 flex justify-center items-center gap-2">
          <span className="text-teal-600 font-extrabold text-4xl md:text-5xl">|</span>
          About Us
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 text-base md:text-lg max-w-4xl mx-auto mb-10">
          Welcome to <span className="text-teal-600 font-semibold">Sample Private Secondary School</span>, a nurturing destination for children seeking excellence in education.
          Established in 2010 in LIlongwe, Malawi, we provide a holistic learning environment that fosters academic, personal, and leadership growth.
          Our campus inspires curiosity, creativity, and character in every student, with focus not only on academics but also on sports, arts, and overall development.
        </p>

        {/* Staff Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 lg:gap-20 justify-center items-start max-w-5xl mx-auto mb-12">
          {staff.map((person, idx) => (
            <div
              key={idx}
              className="group cursor-pointer"
              onClick={() => handleImageClick(person)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                {/* Image Container */}
                <div className="overflow-hidden">
                  <img
                    src={person.img}
                    alt={person.role}
                    className="w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] 
                               object-cover object-top 
                               transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Caption Below Image */}
                <div className="p-6 bg-gradient-to-t from-teal-50 to-white">
                  <h3 className="font-bold text-xl text-teal-700">{person.role}</h3>
                  <p className="text-gray-800 font-semibold text-lg mt-1">{person.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="flex justify-end">
          <Link to="/About">
            <button
              className="bg-teal-600 text-white font-semibold py-3 px-8 rounded-full transform transition-all duration-500 hover:scale-105 hover:bg-teal-700 shadow-md"
              style={{ animation: "zoomInOut 2s ease-in-out infinite" }}
            >
              See More &gt;
            </button>
          </Link>
        </div>
      </div>

      {/* Modal for mobile */}
      {modalData && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 md:hidden"
          onClick={() => setModalData(null)}
        >
          <div className="bg-white rounded-xl overflow-hidden w-full max-w-md relative shadow-2xl">
            <img
              src={modalData.img}
              alt={modalData.role}
              className="w-full h-auto max-h-[70vh] object-cover object-top"
            />
            <div className="p-5 text-center">
              <h3 className="font-bold text-xl text-teal-700">{modalData.role}</h3>
              <p className="text-gray-800 font-semibold text-lg mt-1">{modalData.name}</p>
            </div>
            <button
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:bg-black/70"
              onClick={() => setModalData(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          .animate-zoomInOut {
            animation: zoomIcon 2s ease-in-out infinite;
          }
          @keyframes zoomIcon {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.2); }
          }
        `}
      </style>
    </section>
  );
}