// AdmissionsCTA.jsx
import { FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdmissionsCTA() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/admin.png')" }}
      />

      {/* Dark Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto md:flex md:flex-col md:justify-center">
        {/* Icon - Now perfectly centered */}
        <div className="mb-6 md:mb-12 flex justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl animate-slow-pulse">
            <FaUserGraduate className="text-teal-600 text-3xl md:text-4xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-6xl lg:text-5xl font-bold text-white mb-4 md:mb-8">
          Admissions
        </h2>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl lg:text-xl text-gray-200 mb-8 md:mb-12 max-w-3xl mx-auto px-4 leading-relaxed">
          Admissions Are Open for Everyone with PMSCE Certificate<br />
          Registration Fee is {" "}
          <span className="text-teal-400 font-bold">
            MK 10,000
          </span>{" "}
          Only per year<br />
          Boarding Fees:{" "}
          <span className="text-teal-400 font-bold">
            MK 450,000
          </span>
          <br />
          Day Scholars Fees:{" "}
          <span className="text-teal-400 font-bold">
            MK 150,000
          </span>
        </p>

        {/* Register Button */}
        <Link to="/admissions">
          <button
            className="bg-teal-600 text-white font-bold text-xl md:text-2xl px-10 md:px-12 py-4 md:py-5 rounded-full shadow-xl transform transition-all duration-500 hover:scale-110 hover:bg-teal-500 animate-slow-pulse"
          >
            Register Now
          </button>
        </Link>
      </div>

      {/* Slow Breathing Animation */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-slow-pulse {
          animation: slowPulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}