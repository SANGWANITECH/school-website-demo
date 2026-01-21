// Hero.jsx
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Hero() {
  const images = ["/clas.jpg"];
  const [currentImg, setCurrentImg] = useState(0);

  

  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex items-end md:items-center md:justify-center">
      {/* Hero Images */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full bg-center bg-cover bg-no-repeat transition-opacity duration-1000 ${
            idx === currentImg ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        ></div>
      ))}

      {/* Dark overlays */}
      {/* Mobile: bottom to middle */}
      <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/95 via-black/70 to-transparent" />
      {/* Desktop: left/right + bottom to almost middle */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/90 via-transparent to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/90 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pb-20 md:pb-0">
        <div className="px-6 max-w-4xl mx-auto text-center md:mt-20">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-4">
            School Gallery
          </h2>
          <p className="text-lg md:text-3xl text-white mb-8">
            A store of School Photos Of Students & Teachers and Everyone On campus       </p>
          <Link to="/admissions">
            <button
              className="bg-teal-600 text-white font-semibold rounded-full py-2 px-6 md:py-4 md:px-10 transform transition-transform duration-500"
              style={{ animation: "zoomInOut 2s ease-in-out infinite" }}
            >
              Register Now
            </button>
          </Link>
        </div>
      </div>

      {/* Zoom animation keyframes */}
      <style>
        {`
          @keyframes zoomInOut {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}
      </style>
    </section>
  );
}