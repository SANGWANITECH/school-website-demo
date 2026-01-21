// ContactFooter.jsx
import { FaFacebookF, FaWhatsapp, FaArrowUp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ContactFooter() {
  return (
    <footer className="w-full">
      {/* Contact Section with school bg */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact1.png')" }}
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-end">
          <div className="w-full px-6 pb-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us Now
            </h2>

            <div className="flex flex-col items-center gap-3 mb-6">
              <a
                href="tel:+265999943476"
                className="text-lg md:text-xl font-semibold"
              >
                +265 (0) 999 943 476 | 882 950 677
              </a>

              <span className="opacity-80">Or send us an email</span>

              <a
                href="mailto:Sampleadmissions@school.ac.mw"
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-full font-semibold
                           transform transition-transform duration-500 hover:scale-105"
                style={{ animation: "zoomInOut 2s ease-in-out infinite" }}
              >
                Sampleadmissions@school.ac.mw
              </a>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes zoomInOut {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.05); }
            }
          `}
        </style>
      </section>

      {/* Footer Section */}
      <section className="bg-gray-900 text-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-8">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-2">
            <img
              src="/logo.png"
              alt="Sample School Logo"
              className="w-30 -ml-7 h-20 object-contain mb-2"
            />
            <h3 className="font-bold text-lg">
              Sample Private Secondary School
            </h3>
            <p className="text-sm md:text-base">
              P. O. Box 9, LIlongwe, Malawi
            </p>
            <p className="text-sm md:text-base">
              Mon - Fri: 07:00 - 16:00
            </p>
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-4">
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 rounded-full bg-gray-200 text-black hover:bg-teal-600 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/265999943476"
                className="p-3 rounded-full bg-gray-200 text-black hover:bg-teal-600 hover:text-white transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:daviekanyimbo@gmail.com"
                className="p-3 rounded-full bg-gray-200 text-black hover:bg-teal-600 hover:text-white transition"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-2 text-gray-300 text-sm md:text-base">
              <Link to="/About" className="hover:text-teal-400 transition">
                About Us
              </Link>
              <Link to="/Academics" className="hover:text-teal-400 transition">
                Academics
              </Link>
              <Link to="/Admissions" className="hover:text-teal-400 transition">
                Admissions
              </Link>
              <Link to="/SchoolLife" className="hover:text-teal-400 transition">
                School Life
              </Link>
              <Link to="/#" className="hover:text-teal-400 transition">
                News
              </Link>
              <Link to="/Gallery" className="hover:text-teal-400 transition">
                Gallery
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 pt-4 pb-4 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-teal-600 font-semibold hover:underline"
          >
            <FaArrowUp /> Back to Top
          </button>

          <span className="text-gray-400 text-sm mt-2 md:mt-0">
            © 2025 Sample pvt School. All rights reserved.
          </span>
          <div className="text-center text-xs text-gray-500 py-2">
  Built by <a
    href="https://ram-tech.netlify.app"
    target="_blank"
    className="hover:text-teal-400"
  >
   Built by <span className="text-teal-600"> Ram-Tech</span>
  </a>
</div>

        </div>
      </section>
    </footer>
  );
}
