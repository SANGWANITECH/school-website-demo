// OurHistory.jsx
import { FaClock } from "react-icons/fa";

export default function OurHistory() {
  return (
    <section className="w-full py-10 md:py-14 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Icon with slow zoom in/out */}
        <div className="mb-5 md:mb-8">
          <div className="w-14 h-14 md:w-18 md:h-18 mx-auto bg-gray-200 rounded-full flex items-center justify-center shadow-lg animate-slow-pulse">
            <FaClock className="text-teal-600 text-2xl md:text-3xl" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Our History
        </h2>

        {/* Text - 2 short, enhanced paragraphs */}
        <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          <p>
            Sample Private Secondary School was founded in <strong>2010</strong> in LIlongwe, Malawi, beginning with just two classrooms, 50 students, and a handful of dedicated teachers in a renovated hall , driven by a vision to provide quality secondary education.
          </p>
          <p>
            Over the past decade, we have grown into a respected institution known for strong academic results, nurturing environment, and excellent MSCE performance, shaping confident leaders and looking forward to celebrating our upcoming 16th anniversary.
          </p>
        </div>
      </div>

      {/* Slow Pulse Animation */}
      <style jsx>{`
        @keyframes slowPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .animate-slow-pulse {
          animation: slowPulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}